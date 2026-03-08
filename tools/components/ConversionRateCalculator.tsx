"use client";

import { useState } from "react";

export default function ConversionRateCalculator() {
  const [visitors, setVisitors] = useState("");
  const [conversions, setConversions] = useState("");

  const visitorsNum = Number(visitors);
  const conversionsNum = Number(conversions);

  let result: string | null = null;

  if (visitors !== "" && conversions !== "" && visitorsNum > 0) {
    const conversionRate = (conversionsNum / visitorsNum) * 100;
    result = `${conversionRate.toFixed(2)}%`;
  }

  return (
    <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Visitors
        </label>
        <input
          type="number"
          value={visitors}
          onChange={(e) => setVisitors(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
          placeholder="Enter total visitors"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Conversions
        </label>
        <input
          type="number"
          value={conversions}
          onChange={(e) => setConversions(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
          placeholder="Enter total conversions"
        />
      </div>

      <div className="rounded-lg bg-gray-50 p-4">
        <p className="text-sm text-gray-600">Conversion Rate</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}