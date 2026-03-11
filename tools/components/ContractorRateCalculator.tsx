"use client";

import { useState } from "react";

export default function ContractorRateCalculator() {
  const [targetIncome, setTargetIncome] = useState("");
  const [overhead, setOverhead] = useState("");
  const [profitMargin, setProfitMargin] = useState("");
  const [billableHours, setBillableHours] = useState("");

  const targetIncomeNum = Number(targetIncome);
  const overheadNum = Number(overhead);
  const profitMarginNum = Number(profitMargin);
  const billableHoursNum = Number(billableHours);

  let result: string | null = null;

  if (
    targetIncome !== "" &&
    overhead !== "" &&
    profitMargin !== "" &&
    billableHours !== "" &&
    billableHoursNum > 0
  ) {
    const base = targetIncomeNum + overheadNum;
    result = ((base * (1 + profitMarginNum / 100)) / billableHoursNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Target Income
          </label>
          <input
            type="number"
            value={targetIncome}
            onChange={(e) => setTargetIncome(e.target.value)}
            className="input-premium"
            placeholder="Income target"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Overhead
          </label>
          <input
            type="number"
            value={overhead}
            onChange={(e) => setOverhead(e.target.value)}
            className="input-premium"
            placeholder="Overhead"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Profit Margin %
          </label>
          <input
            type="number"
            value={profitMargin}
            onChange={(e) => setProfitMargin(e.target.value)}
            className="input-premium"
            placeholder="Profit %"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Billable Hours
          </label>
          <input
            type="number"
            value={billableHours}
            onChange={(e) => setBillableHours(e.target.value)}
            className="input-premium"
            placeholder="Hours"
          />
        </div>
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Suggested Contractor Rate</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}