"use client";

import { useState } from "react";

export default function BreakEvenCpcCalculator() {
  const [averageOrderValue, setAverageOrderValue] = useState("");
  const [conversionRate, setConversionRate] = useState("");
  const [grossMargin, setGrossMargin] = useState("");

  const aov = Number(averageOrderValue);
  const cr = Number(conversionRate);
  const margin = Number(grossMargin);

  const valid = averageOrderValue !== "" && conversionRate !== "" && grossMargin !== "" && aov > 0 && cr > 0 && margin > 0 && margin <= 100;

  const revenuePerClick = valid ? aov * (cr / 100) : null;
  const breakEvenCpc = valid ? revenuePerClick! * (margin / 100) : null;

  return (
    <div className="rounded-2xl border p-6 bg-white shadow-sm space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Break-Even CPC Calculator</h2>
        <p className="text-sm text-gray-600 mt-2">
          Calculate the maximum cost per click you can afford before your ads stop being profitable.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <label className="space-y-2">
          <span className="text-sm font-medium">Average order value</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={averageOrderValue}
            onChange={(e) => setAverageOrderValue(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="1500"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium">Conversion rate (%)</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={conversionRate}
            onChange={(e) => setConversionRate(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="2.5"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium">Gross margin (%)</span>
          <input
            type="number"
            min="0"
            max="100"
            step="0.01"
            value={grossMargin}
            onChange={(e) => setGrossMargin(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="40"
          />
        </label>
      </div>

      <div className="rounded-2xl bg-gray-50 p-6 space-y-3">
        <div>
          <p className="text-sm text-gray-500">Revenue per click</p>
          <p className="text-3xl font-semibold">{revenuePerClick !== null ? revenuePerClick.toFixed(2) : "—"}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Break-even CPC</p>
          <p className="text-3xl font-semibold">{breakEvenCpc !== null ? breakEvenCpc.toFixed(2) : "—"}</p>
        </div>
      </div>

      <p className="text-sm text-gray-600">
        Formula: <strong>Break-even CPC = Average Order Value × Conversion Rate × Gross Margin</strong>
      </p>
    </div>
  );
}
