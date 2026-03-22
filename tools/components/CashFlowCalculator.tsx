"use client";

import { useState } from "react";

export default function CashFlowCalculator() {
  const [cashInflows, setCashInflows] = useState("");
  const [cashOutflows, setCashOutflows] = useState("");

  const cashInflowsNum = Number(cashInflows);
  const cashOutflowsNum = Number(cashOutflows);

  let netCashFlow: string | null = null;

  if (cashInflows !== "" && cashOutflows !== "") {
    netCashFlow = (cashInflowsNum - cashOutflowsNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Cash Inflows</label>
        <input type="number" value={cashInflows} onChange={(e) => setCashInflows(e.target.value)} className="input-premium" placeholder="Enter cash inflows" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Cash Outflows</label>
        <input type="number" value={cashOutflows} onChange={(e) => setCashOutflows(e.target.value)} className="input-premium" placeholder="Enter cash outflows" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Net Cash Flow</p>
        <p className="text-2xl font-semibold text-gray-900">{netCashFlow ?? "—"}</p>
      </div>
    </div>
  );
}
