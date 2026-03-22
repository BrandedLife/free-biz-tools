"use client";

import { useState } from "react";

export default function RevenuePerSessionCalculator() {
  const [totalRevenue, setTotalRevenue] = useState("");
  const [sessions, setSessions] = useState("");

  const revenue = Number(totalRevenue);
  const sessionCount = Number(sessions);
  const valid = totalRevenue !== "" && sessions !== "" && revenue >= 0 && sessionCount > 0;

  const revenuePerSession = valid ? revenue / sessionCount : null;

  return (
    <div className="rounded-2xl border p-6 bg-white shadow-sm space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Revenue per Session Calculator</h2>
        <p className="text-sm text-gray-600 mt-2">
          Measure how much revenue each website session generates on average.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium">Total revenue</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={totalRevenue}
            onChange={(e) => setTotalRevenue(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="85000"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium">Sessions</span>
          <input
            type="number"
            min="1"
            step="1"
            value={sessions}
            onChange={(e) => setSessions(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="12000"
          />
        </label>
      </div>

      <div className="rounded-2xl bg-gray-50 p-6">
        <p className="text-sm text-gray-500">Revenue per session</p>
        <p className="text-3xl font-semibold">{revenuePerSession !== null ? revenuePerSession.toFixed(2) : "—"}</p>
      </div>

      <p className="text-sm text-gray-600">
        Formula: <strong>Revenue per Session = Total Revenue ÷ Sessions</strong>
      </p>
    </div>
  );
}
