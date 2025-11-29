import { describe, it, expect, beforeEach, vi } from "vitest";
import { fetchDevices, type Device } from "./api";

describe("API utilities", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.restoreAllMocks();
  });

  describe("fetchDevices", () => {
    it("should fetch and return devices successfully", async () => {
      const mockDevices: Device[] = [
        { id: "device-1", last_seen: "2025-11-28", total: 100, status: "active" },
        { id: "device-2", last_seen: "2025-11-27", total: 50, status: "inactive" },
      ];

      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ devices: mockDevices }),
        } as Response)
      );

      const devices = await fetchDevices();

      expect(devices).toEqual(mockDevices);
      expect(fetch).toHaveBeenCalledWith("/api/v1/devices", {
        headers: { Accept: "application/json" },
      });
    });

    it("should handle empty devices array", async () => {
      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ devices: [] }),
        } as Response)
      );

      const devices = await fetchDevices();

      expect(devices).toEqual([]);
    });

    it("should throw error when fetch fails", async () => {
      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: false,
          status: 500,
          text: () => Promise.resolve("Internal Server Error"),
        } as Response)
      );

      await expect(fetchDevices()).rejects.toThrow(
        "GET /api/v1/devices failed: 500 Internal Server Error"
      );
    });

    it("should throw error when network fails", async () => {
      global.fetch = vi.fn(() =>
        Promise.reject(new Error("Network error"))
      );

      await expect(fetchDevices()).rejects.toThrow("Network error");
    });

    it("should handle devices with null last_seen", async () => {
      const mockDevices: Device[] = [
        { id: "device-1", last_seen: null, total: 0, status: "pending" },
      ];

      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ devices: mockDevices }),
        } as Response)
      );

      const devices = await fetchDevices();

      expect(devices[0].last_seen).toBeNull();
    });

    it("should handle 404 error", async () => {
      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: false,
          status: 404,
          text: () => Promise.resolve("Not Found"),
        } as Response)
      );

      await expect(fetchDevices()).rejects.toThrow(
        "GET /api/v1/devices failed: 404 Not Found"
      );
    });
  });
});
