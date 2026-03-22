"use client";

import { useState } from "react";

export default function QuickRatioCalculator() {
  const [cashAndReceivables, setCashAndReceivables] = useState("");
  const [currentLiabilities, setCurrentLiabilities] = useState("");

  const cashAndReceivablesNum = Number(cashAndReceivables);
  const currentLiabilitiesNum = Number(currentLiabilities);

  let quickRatio: string | null = null;

  if (cashAndReceivables !== "" && currentLiabilities !== "" && currentLiabilitiesNum > 0) {
    quickRatio = (cashAndReceivablesNum / currentLiabilitiesNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Cash and Receivables</label>
        <input type="number" value={cashAndReceivables} onChange={(e) => setCashAndReceivables(e.target.value)} className="input-premium" placeholder="Enter cash and receivables" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Current Liabilities</label>
        <input type="number" value={currentLiabilities} onChange={(e) => setCurrentLiabilities(e.target.value)} className="input-premium" placeholder="Enter current liabilities" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Quick Ratio</p>
        <p className="text-2xl font-semibold text-gray-900">{quickRatio ?? "—"}</p>
      </div>
    </div>
  );
}
