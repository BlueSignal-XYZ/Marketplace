// src/hooks/useFetchNPCCreditEvents.js

import { useEffect, useState } from "react";

/**
 * TEMPORARY SAFE VERSION (no backend calls)
 *
 * Prevents 500 errors from breaking the dashboard.
 * Keeps the exact hook shape your components expect.
 */
export default function useFetchNPCCreditEvents() {
  const [eventsData, setEventsData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Disable backend calls — just provide empty safe data.
    setEventsData([]);
    setErrorMessage(null);
    setLoading(false);
  }, []);

  return { eventsData, errorMessage, loading };
}
