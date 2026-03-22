"use client";

import { useState } from "react";

export default function ChurnRateCalculator() {
  const [customersLost, setCustomersLost] = useState("");
  const [customersAtStart, setCustomersAtStart] = useState("");

  const customersLostNum = Number(customersLost);
  const customersAtStartNum = Number(customersAtStart);

  let churnRate: string | null = null;

  if (customersLost !== "" && customersAtStart !== "" && customersAtStartNum > 0) {
    const result = (customersLostNum / customersAtStartNum) * 100;
    churnRate = `${result.toFixed(2)}%`;
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Customers Lost</label>
        <input type="number" value={customersLost} onChange={(e) => setCustomersLost(e.target.value)} className="input-premium" placeholder="Enter customers lost" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Customers at Start of Period</label>
        <input type="number" value={customersAtStart} onChange={(e) => setCustomersAtStart(e.target.value)} className="input-premium" placeholder="Enter customers at start" />
      </div>
      <div className="result-premium">
        <p className="text-sm text-gray-600">Churn Rate</p>
        <p className="text-2xl font-semibold text-gray-900">{churnRate ?? "—"}</p>
      </div>
    </div>
  );
}
