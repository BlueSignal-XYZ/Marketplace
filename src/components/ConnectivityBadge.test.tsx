import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { ConnectivityBadge } from "./ConnectivityBadge";
import * as api from "../lib/api";
import type { Device } from "../lib/api";

vi.mock("../lib/api");

describe("ConnectivityBadge", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render with checking state initially", () => {
    vi.mocked(api.fetchDevices).mockImplementation(
      () => new Promise(() => {}) // Never resolves
    );

    render(<ConnectivityBadge />);

    expect(screen.getByText(/Checking…/)).toBeInTheDocument();
  });

  it("should display cloud linked status when devices are fetched", async () => {
    const mockDevices: Device[] = [
      { id: "device-1", last_seen: "2h ago", total: 100, status: "active" },
      { id: "device-2", last_seen: "5m ago", total: 50, status: "active" },
    ];

    vi.mocked(api.fetchDevices).mockResolvedValue(mockDevices);

    render(<ConnectivityBadge />);

    await waitFor(
      () => {
        expect(screen.getByText(/Cloud linked/)).toBeInTheDocument();
      },
      { timeout: 1000 }
    );

    expect(screen.getByText(/2 devices/)).toBeInTheDocument();
    expect(screen.getByText(/last 2h ago/)).toBeInTheDocument();
  });

  it("should display singular device text for one device", async () => {
    const mockDevices: Device[] = [
      { id: "device-1", last_seen: "1h ago", total: 100, status: "active" },
    ];

    vi.mocked(api.fetchDevices).mockResolvedValue(mockDevices);

    render(<ConnectivityBadge />);

    await waitFor(
      () => {
        const elements = screen.getAllByText(/device/i);
        const hasCorrectText = elements.some((el) => {
          const text = el.textContent || "";
          return text.includes("1 device") && !text.includes("1 devices");
        });
        expect(hasCorrectText).toBe(true);
      },
      { timeout: 1000 }
    );
  });

  it("should display no link status when fetch fails", async () => {
    vi.mocked(api.fetchDevices).mockRejectedValue(new Error("Network error"));

    render(<ConnectivityBadge />);

    await waitFor(
      () => {
        expect(screen.getByText(/No link/)).toBeInTheDocument();
      },
      { timeout: 1000 }
    );

    expect(screen.getByText(/0 devices/)).toBeInTheDocument();
  });

  it("should handle devices with null last_seen", async () => {
    const mockDevices: Device[] = [
      { id: "device-1", last_seen: null, total: 0, status: "pending" },
    ];

    vi.mocked(api.fetchDevices).mockResolvedValue(mockDevices);

    render(<ConnectivityBadge />);

    await waitFor(
      () => {
        expect(screen.getByText(/Cloud linked/)).toBeInTheDocument();
      },
      { timeout: 1000 }
    );

    // Should not display "last" text when last_seen is null
    const badge = screen.getByTitle("Click to view devices");
    expect(badge.textContent).not.toContain("last");
  });

  it("should call fetchDevices on mount", async () => {
    const mockDevices: Device[] = [
      { id: "device-1", last_seen: "now", total: 1, status: "active" },
    ];

    vi.mocked(api.fetchDevices).mockResolvedValue(mockDevices);

    render(<ConnectivityBadge />);

    await waitFor(
      () => {
        expect(api.fetchDevices).toHaveBeenCalled();
      },
      { timeout: 1000 }
    );

    expect(api.fetchDevices).toHaveBeenCalledTimes(1);
  });
});
