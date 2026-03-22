"use client";

import { useState } from "react";

export default function EbitdaCalculator() {
  const [operatingProfit, setOperatingProfit] = useState("");
  const [depreciation, setDepreciation] = useState("");
  const [amortization, setAmortization] = useState("");

  const operatingProfitNum = Number(operatingProfit);
  const depreciationNum = Number(depreciation);
  const amortizationNum = Number(amortization);

  let ebitda: string | null = null;

  if (operatingProfit !== "" && depreciation !== "" && amortization !== "") {
    ebitda = (operatingProfitNum + depreciationNum + amortizationNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Operating Profit</label>
        <input type="number" value={operatingProfit} onChange={(e) => setOperatingProfit(e.target.value)} className="input-premium" placeholder="Enter operating profit" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Depreciation</label>
        <input type="number" value={depreciation} onChange={(e) => setDepreciation(e.target.value)} className="input-premium" placeholder="Enter depreciation" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Amortization</label>
        <input type="number" value={amortization} onChange={(e) => setAmortization(e.target.value)} className="input-premium" placeholder="Enter amortization" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">EBITDA</p>
        <p className="text-2xl font-semibold text-gray-900">{ebitda ?? "—"}</p>
      </div>
    </div>
  );
}
