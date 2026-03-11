"use client";

import { useState } from "react";

export default function PaybackPeriodCalculator() {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [annualCashFlow, setAnnualCashFlow] = useState("");

  const initialInvestmentNum = Number(initialInvestment);
  const annualCashFlowNum = Number(annualCashFlow);

  let result: string | null = null;

  if (
    initialInvestment !== "" &&
    annualCashFlow !== "" &&
    annualCashFlowNum > 0
  ) {
    result = (initialInvestmentNum / annualCashFlowNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Initial Investment
          </label>
          <input
            type="number"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(e.target.value)}
            className="input-premium"
            placeholder="Enter investment"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Annual Cash Flow
          </label>
          <input
            type="number"
            value={annualCashFlow}
            onChange={(e) => setAnnualCashFlow(e.target.value)}
            className="input-premium"
            placeholder="Enter annual cash flow"
          />
        </div>
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Payback Period (Years)</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}