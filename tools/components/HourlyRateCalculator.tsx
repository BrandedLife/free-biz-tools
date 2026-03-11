"use client";

import { useState } from "react";

export default function HourlyRateCalculator() {
  const [targetIncome, setTargetIncome] = useState("");
  const [overhead, setOverhead] = useState("");
  const [billableHours, setBillableHours] = useState("");

  const targetIncomeNum = Number(targetIncome);
  const overheadNum = Number(overhead);
  const billableHoursNum = Number(billableHours);

  let result: string | null = null;

  if (
    targetIncome !== "" &&
    overhead !== "" &&
    billableHours !== "" &&
    billableHoursNum > 0
  ) {
    result = ((targetIncomeNum + overheadNum) / billableHoursNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Target Income
          </label>
          <input
            type="number"
            value={targetIncome}
            onChange={(e) => setTargetIncome(e.target.value)}
            className="input-premium"
            placeholder="Enter income target"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Annual Overhead
          </label>
          <input
            type="number"
            value={overhead}
            onChange={(e) => setOverhead(e.target.value)}
            className="input-premium"
            placeholder="Enter overhead"
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
            placeholder="Enter billable hours"
          />
        </div>
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Hourly Rate</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}