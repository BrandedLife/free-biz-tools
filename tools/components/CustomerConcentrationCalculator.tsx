"use client";

import { useState } from "react";

export default function CustomerConcentrationCalculator() {
  const [topCustomerRevenue, setTopCustomerRevenue] = useState("");
  const [totalRevenue, setTotalRevenue] = useState("");

  const top = Number(topCustomerRevenue);
  const total = Number(totalRevenue);
  const valid = topCustomerRevenue !== "" && totalRevenue !== "" && top >= 0 && total > 0 && top <= total;

  const concentration = valid ? (top / total) * 100 : null;

  return (
    <div className="rounded-2xl border p-6 bg-white shadow-sm space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Customer Concentration Calculator</h2>
        <p className="text-sm text-gray-600 mt-2">
          Measure how much of your revenue depends on your biggest customer.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium">Top customer revenue</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={topCustomerRevenue}
            onChange={(e) => setTopCustomerRevenue(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="250000"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium">Total revenue</span>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={totalRevenue}
            onChange={(e) => setTotalRevenue(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="1200000"
          />
        </label>
      </div>

      <div className="rounded-2xl bg-gray-50 p-6">
        <p className="text-sm text-gray-500">Customer concentration</p>
        <p className="text-3xl font-semibold">{concentration !== null ? `${concentration.toFixed(2)}%` : "—"}</p>
      </div>

      <p className="text-sm text-gray-600">
        Formula: <strong>Customer Concentration = Top Customer Revenue ÷ Total Revenue × 100</strong>
      </p>
    </div>
  );
}
