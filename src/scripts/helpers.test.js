import { describe, it, expect, vi } from "vitest";
import {
  OBJECTS,
  STRING,
  TIME,
  NUMBERS,
  FORM_DATA,
  formatCertificate,
  formatCertificateID,
  createLookup,
  timestampToLocale,
  capitalizeFirstLetter,
  proxyLivepeerOriginEndpoint,
} from "./helpers";

describe("OBJECTS utilities", () => {
  describe("sanitizeObject", () => {
    it("should sanitize a simple object", () => {
      const obj = { a: 1, b: 2 };
      const result = OBJECTS.sanitizeObject(obj);
      expect(result).toEqual({ a: 1, b: 2 });
    });

    it("should sanitize nested objects", () => {
      const obj = { a: { b: { c: 1 } } };
      const result = OBJECTS.sanitizeObject(obj);
      expect(result).toEqual({ a: { b: { c: 1 } } });
    });

    it("should sanitize arrays", () => {
      const arr = [1, 2, 3];
      const result = OBJECTS.sanitizeObject(arr);
      expect(result).toEqual([1, 2, 3]);
    });

    it("should handle circular references", () => {
      const obj = { a: 1 };
      obj.self = obj;
      const result = OBJECTS.sanitizeObject(obj);
      expect(result.self).toBeNull();
    });

    it("should respect max depth", () => {
      const deepObj = { l1: { l2: { l3: { l4: { l5: 1 } } } } };
      const result = OBJECTS.sanitizeObject(deepObj, 0, 3);
      expect(result.l1.l2.l3).toBeNull();
    });

    it("should handle primitive values", () => {
      expect(OBJECTS.sanitizeObject(42)).toBe(42);
      expect(OBJECTS.sanitizeObject("string")).toBe("string");
      expect(OBJECTS.sanitizeObject(true)).toBe(true);
    });
  });

  describe("findValueByKey", () => {
    it("should find value by key", () => {
      const obj = { name: "John", age: 30 };
      expect(OBJECTS.findValueByKey(obj, "name")).toBe("John");
      expect(OBJECTS.findValueByKey(obj, "age")).toBe(30);
    });

    it("should return undefined for non-existent key", () => {
      const obj = { name: "John" };
      expect(OBJECTS.findValueByKey(obj, "missing")).toBeUndefined();
    });
  });

  describe("ensureKeyFirst", () => {
    it("should move specified key to first position", () => {
      const obj = { a: 1, b: 2, c: 3 };
      const result = OBJECTS.ensureKeyFirst(obj, "b");
      const keys = Object.keys(result);
      expect(keys[0]).toBe("b");
    });

    it("should return object unchanged if key doesn't exist", () => {
      const obj = { a: 1, b: 2 };
      const result = OBJECTS.ensureKeyFirst(obj, "missing");
      expect(result).toEqual(obj);
    });

    it("should handle null/undefined objects", () => {
      expect(OBJECTS.ensureKeyFirst(null, "key")).toBeNull();
      expect(OBJECTS.ensureKeyFirst(undefined, "key")).toBeUndefined();
    });
  });

  describe("OBJECTS.SEARCH.containsQuery", () => {
    it("should find query in string", () => {
      expect(OBJECTS.SEARCH.containsQuery("Hello World", "world")).toBe(true);
    });

    it("should be case insensitive", () => {
      expect(OBJECTS.SEARCH.containsQuery("Hello World", "WORLD")).toBe(true);
    });

    it("should search in object values", () => {
      const obj = { name: "John", city: "New York" };
      expect(OBJECTS.SEARCH.containsQuery(obj, "york")).toBe(true);
    });

    it("should search in arrays", () => {
      const arr = ["apple", "banana", "orange"];
      expect(OBJECTS.SEARCH.containsQuery(arr, "banana")).toBe(true);
    });

    it("should return false when query not found", () => {
      expect(OBJECTS.SEARCH.containsQuery("Hello", "goodbye")).toBe(false);
    });
  });

  describe("OBJECTS.SEARCH.filterObjectByQuery", () => {
    it("should filter object by query", () => {
      const obj = { a: "test", b: "other" };
      const result = OBJECTS.SEARCH.filterObjectByQuery(obj, "test");
      expect(result).toBeDefined();
    });

    it("should filter arrays by query", () => {
      const arr = ["test1", "other", "test2"];
      const result = OBJECTS.SEARCH.filterObjectByQuery(arr, "test");
      expect(result).toHaveLength(2);
    });

    it("should handle non-object types", () => {
      expect(OBJECTS.SEARCH.filterObjectByQuery("string", "str")).toBe("string");
      expect(OBJECTS.SEARCH.filterObjectByQuery(42, "42")).toBe(42);
    });
  });
});

describe("STRING utilities", () => {
  describe("toTitleCase", () => {
    it("should convert camelCase to Title Case", () => {
      expect(STRING.toTitleCase("helloWorld")).toBe("Hello World");
    });

    it("should handle PascalCase", () => {
      expect(STRING.toTitleCase("HelloWorld")).toBe("Hello World");
    });

    it("should handle already spaced strings", () => {
      expect(STRING.toTitleCase("hello world")).toBe("Hello world");
    });

    it("should handle single word", () => {
      expect(STRING.toTitleCase("hello")).toBe("Hello");
    });
  });
});

describe("TIME utilities", () => {
  describe("timestampToLocalString", () => {
    it("should convert timestamp to local string", () => {
      const timestamp = 1609459200000; // Jan 1, 2021
      const result = TIME.timestampToLocalString(timestamp);
      expect(result).toContain("2021");
    });

    it("should handle current timestamp", () => {
      const now = Date.now();
      const result = TIME.timestampToLocalString(now);
      expect(result).toBeTruthy();
      expect(typeof result).toBe("string");
    });
  });
});

describe("NUMBERS utilities", () => {
  describe("toNumber", () => {
    it("should convert object with toNumber method", () => {
      const obj = { toNumber: () => 42 };
      expect(NUMBERS.toNumber(obj)).toBe(42);
    });

    it("should return number as is", () => {
      expect(NUMBERS.toNumber(42)).toBe(42);
    });

    it("should parse string to number", () => {
      expect(NUMBERS.toNumber("42")).toBe(42);
    });

    it("should handle invalid strings", () => {
      const result = NUMBERS.toNumber("invalid");
      expect(isNaN(result)).toBe(true);
    });
  });

  describe("isValidAmount", () => {
    it("should return true for positive numbers", () => {
      expect(NUMBERS.isValidAmount(10)).toBe(true);
      expect(NUMBERS.isValidAmount(0.1)).toBe(true);
    });

    it("should return false for zero", () => {
      expect(NUMBERS.isValidAmount(0)).toBe(false);
    });

    it("should return false for negative numbers", () => {
      expect(NUMBERS.isValidAmount(-5)).toBe(false);
    });

    it("should return false for NaN", () => {
      expect(NUMBERS.isValidAmount(NaN)).toBe(false);
    });
  });
});

describe("FORM_DATA utilities", () => {
  describe("isValidEmail", () => {
    it("should validate correct email addresses", () => {
      expect(FORM_DATA.isValidEmail("user@example.com")).toBe(true);
      expect(FORM_DATA.isValidEmail("test.user@domain.co.uk")).toBe(true);
      expect(FORM_DATA.isValidEmail("user123@test-domain.com")).toBe(true);
    });

    it("should reject invalid email addresses", () => {
      expect(FORM_DATA.isValidEmail("invalid")).toBe(false);
      expect(FORM_DATA.isValidEmail("@example.com")).toBe(false);
      expect(FORM_DATA.isValidEmail("user@")).toBe(false);
      expect(FORM_DATA.isValidEmail("user@domain")).toBe(false);
      expect(FORM_DATA.isValidEmail("")).toBe(false);
    });
  });
});

describe("formatCertificate", () => {
  it("should format certificate with BigNumber values", () => {
    // Create a mock BigNumber object with valueOf method for Number() coercion
    const mockBigNumber = {
      _isBigNumber: true,
      valueOf: () => 123,
      toString: () => "123",
    };
    const input = {
      id: mockBigNumber,
      name: "Test Certificate",
    };
    const result = formatCertificate(input);
    expect(result.id).toBe(123);
    expect(result.name).toBe("Test Certificate");
  });

  it("should preserve non-BigNumber values", () => {
    const input = { name: "Test", value: 42 };
    const result = formatCertificate(input);
    expect(result).toEqual({ name: "Test", value: 42 });
  });

  it("should handle empty object", () => {
    const result = formatCertificate({});
    expect(result).toEqual({});
  });
});

describe("formatCertificateID", () => {
  it("should format single digit numbers", () => {
    expect(formatCertificateID(1)).toBe("NPRC-0000001");
  });

  it("should format multi-digit numbers", () => {
    expect(formatCertificateID(12345)).toBe("NPRC-0012345");
  });

  it("should handle already 7-digit numbers", () => {
    expect(formatCertificateID(1234567)).toBe("NPRC-1234567");
  });

  it("should handle zero", () => {
    expect(formatCertificateID(0)).toBe("NPRC-0000000");
  });
});

describe("createLookup", () => {
  it("should create lookup object from array", () => {
    const arr = [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
    ];
    const lookup = createLookup(arr);
    expect(lookup[1]).toEqual({ id: 1, name: "Item 1" });
    expect(lookup[2]).toEqual({ id: 2, name: "Item 2" });
  });

  it("should handle empty array", () => {
    const lookup = createLookup([]);
    expect(lookup).toEqual({});
  });

  it("should overwrite duplicate IDs", () => {
    const arr = [
      { id: 1, name: "First" },
      { id: 1, name: "Second" },
    ];
    const lookup = createLookup(arr);
    expect(lookup[1].name).toBe("Second");
  });
});

describe("timestampToLocale", () => {
  it("should convert Unix timestamp to locale string", () => {
    const timestamp = 1609459200; // Jan 1, 2021 (in seconds)
    const result = timestampToLocale(timestamp);
    expect(result).toContain("2021");
  });

  it("should handle zero timestamp", () => {
    const result = timestampToLocale(0);
    expect(result).toContain("1970");
  });
});

describe("capitalizeFirstLetter", () => {
  it("should capitalize first letter", () => {
    expect(capitalizeFirstLetter("hello")).toBe("Hello");
  });

  it("should handle already capitalized string", () => {
    expect(capitalizeFirstLetter("Hello")).toBe("Hello");
  });

  it("should handle single character", () => {
    expect(capitalizeFirstLetter("h")).toBe("H");
  });

  it("should handle empty string", () => {
    expect(capitalizeFirstLetter("")).toBe("");
  });

  it("should handle null/undefined", () => {
    expect(capitalizeFirstLetter(null)).toBeNull();
    expect(capitalizeFirstLetter(undefined)).toBeUndefined();
  });
});

describe("proxyLivepeerOriginEndpoint", () => {
  it("should convert Livepeer origin URL to proxy path", () => {
    const original = "https://origin.livepeer.com/asset/123";
    const result = proxyLivepeerOriginEndpoint(original);
    expect(result).toBe("/livepeer/origin/asset/123");
  });

  it("should handle URLs with query parameters", () => {
    const original = "https://origin.livepeer.com/asset/123?param=value";
    const result = proxyLivepeerOriginEndpoint(original);
    expect(result).toBe("/livepeer/origin/asset/123?param=value");
  });

  it("should throw error for non-Livepeer URLs", () => {
    const invalid = "https://example.com/asset/123";
    expect(() => proxyLivepeerOriginEndpoint(invalid)).toThrow(
      "Original endpoint does not start with the base URL"
    );
  });

  it("should handle root Livepeer URL", () => {
    const original = "https://origin.livepeer.com/";
    const result = proxyLivepeerOriginEndpoint(original);
    expect(result).toBe("/livepeer/origin/");
  });
});
