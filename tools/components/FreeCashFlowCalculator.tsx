"use client";

import { useState } from "react";

export default function FreeCashFlowCalculator() {
  const [operatingCashFlow, setOperatingCashFlow] = useState("");
  const [capitalExpenditure, setCapitalExpenditure] = useState("");

  const operatingCashFlowNum = Number(operatingCashFlow);
  const capitalExpenditureNum = Number(capitalExpenditure);

  let result: string | null = null;

  if (operatingCashFlow !== "" && capitalExpenditure !== "") {
    result = (operatingCashFlowNum - capitalExpenditureNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Operating Cash Flow
        </label>
        <input
          type="number"
          value={operatingCashFlow}
          onChange={(e) => setOperatingCashFlow(e.target.value)}
          className="input-premium"
          placeholder="Enter OCF"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Capital Expenditure
        </label>
        <input
          type="number"
          value={capitalExpenditure}
          onChange={(e) => setCapitalExpenditure(e.target.value)}
          className="input-premium"
          placeholder="Enter capex"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Free Cash Flow</p>
        <p className="text-2xl font-semibold text-gray-900">
          {result ?? "—"}
        </p>
      </div>
    </div>
  );
}