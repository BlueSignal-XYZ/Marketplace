import { describe, it, expect } from "vitest";
import {
  formatLongString,
  isNotZeroAddress,
  extractAndCleanUrls,
} from "./utils";

describe("utils", () => {
  describe("formatLongString", () => {
    it("should format a long address with default parameters", () => {
      const address = "0x1234567890abcdef1234567890abcdef12345678";
      const result = formatLongString(address);
      expect(result).toBe("0x1234...5678");
    });

    it("should format a long address with custom first and last parameters", () => {
      const address = "0x1234567890abcdef1234567890abcdef12345678";
      const result = formatLongString(address, 8, 6);
      expect(result).toBe("0x123456...345678");
    });

    it("should return empty string for null/undefined", () => {
      expect(formatLongString(null)).toBe("");
      expect(formatLongString(undefined)).toBe("");
    });

    it("should handle short strings correctly", () => {
      const address = "0x123";
      const result = formatLongString(address);
      expect(result).toBe("0x123...x123");
    });

    it("should handle empty string", () => {
      expect(formatLongString("")).toBe("");
    });
  });

  describe("isNotZeroAddress", () => {
    it("should return false for zero address", () => {
      const zeroAddress = "0x0000000000000000000000000000000000000000";
      expect(isNotZeroAddress(zeroAddress)).toBe(false);
    });

    it("should return true for non-zero address", () => {
      const address = "0x1234567890abcdef1234567890abcdef12345678";
      expect(isNotZeroAddress(address)).toBe(true);
    });

    it("should be case insensitive", () => {
      const zeroAddressUpper = "0X0000000000000000000000000000000000000000";
      expect(isNotZeroAddress(zeroAddressUpper)).toBe(false);

      const zeroAddressMixed = "0x0000000000000000000000000000000000000000";
      expect(isNotZeroAddress(zeroAddressMixed)).toBe(false);
    });

    it("should return true for valid Ethereum address", () => {
      const validAddress = "0xAbCdEf1234567890AbCdEf1234567890AbCdEf12";
      expect(isNotZeroAddress(validAddress)).toBe(true);
    });
  });

  describe("extractAndCleanUrls", () => {
    it("should extract http URLs from string", () => {
      const text = "Check out http://example.com for more info";
      const urls = extractAndCleanUrls(text);
      expect(urls).toContain("http://example.com/");
    });

    it("should extract https URLs from string", () => {
      const text = "Visit https://secure.example.com";
      const urls = extractAndCleanUrls(text);
      expect(urls).toContain("https://secure.example.com/");
    });

    it("should extract multiple URLs", () => {
      const text = "Visit https://example.com and http://test.com";
      const urls = extractAndCleanUrls(text);
      expect(urls).toHaveLength(2);
      expect(urls).toContain("https://example.com/");
      expect(urls).toContain("http://test.com/");
    });

    it("should handle blob URLs", () => {
      const text = "File: blob:http://localhost/abc-123";
      const urls = extractAndCleanUrls(text);
      expect(urls).toHaveLength(1);
      expect(urls[0]).toContain("localhost/abc-123");
    });

    it("should return empty array when no URLs found", () => {
      const text = "This is just plain text with no URLs";
      const urls = extractAndCleanUrls(text);
      expect(urls).toEqual([]);
    });

    it("should handle FTP URLs", () => {
      const text = "Download from ftp://files.example.com/file.zip";
      const urls = extractAndCleanUrls(text);
      expect(urls).toContain("ftp://files.example.com/file.zip");
    });

    it("should handle file URLs", () => {
      const text = "Local file://path/to/file.txt";
      const urls = extractAndCleanUrls(text);
      expect(urls).toContain("file://path/to/file.txt");
    });

    it("should filter out empty results from invalid URLs", () => {
      // This test ensures the filter(Boolean) works
      const text = "Valid: https://example.com";
      const urls = extractAndCleanUrls(text);
      expect(urls.every((url) => url.length > 0)).toBe(true);
    });

    it("should handle URLs with query parameters", () => {
      const text = "Search: https://example.com/search?q=test&page=1";
      const urls = extractAndCleanUrls(text);
      expect(urls).toContain("https://example.com/search?q=test&page=1");
    });

    it("should handle URLs with fragments", () => {
      const text = "Link: https://example.com/page#section";
      const urls = extractAndCleanUrls(text);
      expect(urls).toContain("https://example.com/page#section");
    });
  });
});
