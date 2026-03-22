"use client";

import { useState } from "react";

export default function InterestCoverageRatioCalculator() {
  const [ebit, setEbit] = useState("");
  const [interestExpense, setInterestExpense] = useState("");

  const ebitNum = Number(ebit);
  const interestExpenseNum = Number(interestExpense);

  let interestCoverageRatio: string | null = null;

  if (ebit !== "" && interestExpense !== "" && interestExpenseNum > 0) {
    interestCoverageRatio = (ebitNum / interestExpenseNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">EBIT</label>
        <input type="number" value={ebit} onChange={(e) => setEbit(e.target.value)} className="input-premium" placeholder="Enter EBIT" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Interest Expense</label>
        <input type="number" value={interestExpense} onChange={(e) => setInterestExpense(e.target.value)} className="input-premium" placeholder="Enter interest expense" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Interest Coverage Ratio</p>
        <p className="text-2xl font-semibold text-gray-900">{interestCoverageRatio ?? "—"}</p>
      </div>
    </div>
  );
}
