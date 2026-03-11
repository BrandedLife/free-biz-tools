"use client";

import { useState } from "react";

export default function LoanInterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");

  const principalNum = Number(principal);
  const rateNum = Number(rate);
  const yearsNum = Number(years);

  let result: string | null = null;

  if (principal !== "" && rate !== "" && years !== "") {
    result = (principalNum * (rateNum / 100) * yearsNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Principal
          </label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="input-premium"
            placeholder="Enter principal"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Annual Rate %
          </label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="input-premium"
            placeholder="Enter rate"
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
            className="input-premium"
            placeholder="Enter years"
          />
        </div>
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Estimated Interest</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}