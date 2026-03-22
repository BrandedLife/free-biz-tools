"use client";

import { useState } from "react";

export default function SellThroughRateCalculator() {
  const [unitsSold, setUnitsSold] = useState("");
  const [unitsReceived, setUnitsReceived] = useState("");

  const sold = Number(unitsSold);
  const received = Number(unitsReceived);
  const valid = unitsSold !== "" && unitsReceived !== "" && sold >= 0 && received > 0;

  const sellThroughRate = valid ? (sold / received) * 100 : null;

  return (
    <div className="rounded-2xl border p-6 bg-white shadow-sm space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Sell-Through Rate Calculator</h2>
        <p className="text-sm text-gray-600 mt-2">
          See how much of your incoming stock you are actually selling in a given period.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium">Units sold</span>
          <input
            type="number"
            min="0"
            step="1"
            value={unitsSold}
            onChange={(e) => setUnitsSold(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="180"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium">Units received</span>
          <input
            type="number"
            min="1"
            step="1"
            value={unitsReceived}
            onChange={(e) => setUnitsReceived(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="240"
          />
        </label>
      </div>

      <div className="rounded-2xl bg-gray-50 p-6">
        <p className="text-sm text-gray-500">Sell-through rate</p>
        <p className="text-3xl font-semibold">{sellThroughRate !== null ? `${sellThroughRate.toFixed(2)}%` : "—"}</p>
      </div>

      <p className="text-sm text-gray-600">
        Formula: <strong>Sell-Through Rate = Units Sold ÷ Units Received × 100</strong>
      </p>
    </div>
  );
}
