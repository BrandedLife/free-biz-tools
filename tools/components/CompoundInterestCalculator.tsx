"use client";

import { useState } from "react";

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [annualRate, setAnnualRate] = useState("");
  const [years, setYears] = useState("");
  const [compoundsPerYear, setCompoundsPerYear] = useState("12");

  const principalNum = Number(principal);
  const annualRateNum = Number(annualRate);
  const yearsNum = Number(years);
  const compoundsPerYearNum = Number(compoundsPerYear);

  let futureValue: string | null = null;

  if (
    principal !== "" &&
    annualRate !== "" &&
    years !== "" &&
    compoundsPerYear !== "" &&
    principalNum >= 0 &&
    annualRateNum >= 0 &&
    yearsNum > 0 &&
    compoundsPerYearNum > 0
  ) {
    const rate = annualRateNum / 100;
    const fv =
      principalNum *
      Math.pow(1 + rate / compoundsPerYearNum, compoundsPerYearNum * yearsNum);

    futureValue = fv.toFixed(2);
  }

  return (
    <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Initial Amount
        </label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
          placeholder="Enter initial amount"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            value={annualRate}
            onChange={(e) => setAnnualRate(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
            placeholder="Enter annual rate"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Years
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
            placeholder="Enter years"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Compounds Per Year
          </label>
          <input
            type="number"
            value={compoundsPerYear}
            onChange={(e) => setCompoundsPerYear(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
            placeholder="12"
          />
        </div>
      </div>

      <div className="rounded-lg bg-gray-50 p-4">
        <p className="text-sm text-gray-600">Future Value</p>
        <p className="text-2xl font-semibold text-gray-900">
          {futureValue ?? "—"}
        </p>
      </div>
    </div>
  );
}