"use client";

import { useState } from "react";

export default function BlendedCacCalculator() {
  const [totalMarketingSpend, setTotalMarketingSpend] = useState("");
  const [newCustomers, setNewCustomers] = useState("");

  const spend = Number(totalMarketingSpend);
  const customers = Number(newCustomers);
  const valid = totalMarketingSpend !== "" && newCustomers !== "" && spend >= 0 && customers > 0;

  const blendedCac = valid ? spend / customers : null;

  return (
    <div className="rounded-2xl border p-6 bg-white shadow-sm space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Blended CAC Calculator</h2>
        <p className="text-sm text-gray-600 mt-2">
          Measure your true customer acquisition cost across all channels, not just paid ads.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium">Total marketing spend</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={totalMarketingSpend}
            onChange={(e) => setTotalMarketingSpend(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="120000"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium">New customers acquired</span>
          <input
            type="number"
            min="1"
            step="1"
            value={newCustomers}
            onChange={(e) => setNewCustomers(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="240"
          />
        </label>
      </div>

      <div className="rounded-2xl bg-gray-50 p-6">
        <p className="text-sm text-gray-500">Blended CAC</p>
        <p className="text-3xl font-semibold">{blendedCac !== null ? blendedCac.toFixed(2) : "—"}</p>
      </div>

      <p className="text-sm text-gray-600">
        Formula: <strong>Blended CAC = Total Marketing Spend ÷ New Customers</strong>
      </p>
    </div>
  );
}
