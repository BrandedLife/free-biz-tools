"use client";

import { useState } from "react";

export default function QuoteCalculator() {
  const [hours, setHours] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [extraCosts, setExtraCosts] = useState("");

  const hoursNum = Number(hours);
  const hourlyRateNum = Number(hourlyRate);
  const extraCostsNum = Number(extraCosts);

  let quoteTotal: string | null = null;

  if (hours !== "" && hourlyRate !== "" && extraCosts !== "") {
    const total = hoursNum * hourlyRateNum + extraCostsNum;
    quoteTotal = total.toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Hours
        </label>
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="input-premium"
          placeholder="Enter hours"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Hourly Rate
        </label>
        <input
          type="number"
          value={hourlyRate}
          onChange={(e) => setHourlyRate(e.target.value)}
          className="input-premium"
          placeholder="Enter hourly rate"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Extra Costs
        </label>
        <input
          type="number"
          value={extraCosts}
          onChange={(e) => setExtraCosts(e.target.value)}
          className="input-premium"
          placeholder="Enter extra costs"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Quote Total</p>
        <p className="text-2xl font-semibold text-gray-900">
          {quoteTotal ?? "—"}
        </p>
      </div>
    </div>
  );
}
