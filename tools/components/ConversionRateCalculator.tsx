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
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Visitors
        </label>
        <input
          type="number"
          value={visitors}
          onChange={(e) => setVisitors(e.target.value)}
          className="input-premium"
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
          className="input-premium"
          placeholder="Enter total conversions"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Conversion Rate</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}