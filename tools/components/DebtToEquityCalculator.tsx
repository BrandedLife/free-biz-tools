"use client";

import { useState } from "react";

export default function DebtToEquityCalculator() {
  const [totalDebt, setTotalDebt] = useState("");
  const [totalEquity, setTotalEquity] = useState("");

  const totalDebtNum = Number(totalDebt);
  const totalEquityNum = Number(totalEquity);

  let debtToEquity: string | null = null;

  if (totalDebt !== "" && totalEquity !== "" && totalEquityNum > 0) {
    debtToEquity = (totalDebtNum / totalEquityNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Total Debt</label>
        <input type="number" value={totalDebt} onChange={(e) => setTotalDebt(e.target.value)} className="input-premium" placeholder="Enter total debt" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Total Equity</label>
        <input type="number" value={totalEquity} onChange={(e) => setTotalEquity(e.target.value)} className="input-premium" placeholder="Enter total equity" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Debt-to-Equity Ratio</p>
        <p className="text-2xl font-semibold text-gray-900">{debtToEquity ?? "—"}</p>
      </div>
    </div>
  );
}
