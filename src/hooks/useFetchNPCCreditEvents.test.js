import { describe, it, expect } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import useFetchNPCCreditEvents from "./useFetchNPCCreditEvents";

describe("useFetchNPCCreditEvents", () => {
  it("should return empty events data on mount", async () => {
    const { result } = renderHook(() => useFetchNPCCreditEvents());

    await waitFor(() => {
      expect(result.current.eventsData).toEqual([]);
      expect(result.current.errorMessage).toBeNull();
      expect(result.current.loading).toBe(false);
    });
  });

  it("should maintain consistent return shape", () => {
    const { result } = renderHook(() => useFetchNPCCreditEvents());

    expect(result.current).toHaveProperty("eventsData");
    expect(result.current).toHaveProperty("errorMessage");
    expect(result.current).toHaveProperty("loading");
  });

  it("should not be loading after mount", async () => {
    const { result } = renderHook(() => useFetchNPCCreditEvents());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
  });

  it("should have no error message after mount", async () => {
    const { result } = renderHook(() => useFetchNPCCreditEvents());

    await waitFor(() => {
      expect(result.current.errorMessage).toBeNull();
    });
  });
});
