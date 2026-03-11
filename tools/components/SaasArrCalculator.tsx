"use client";

import { useState } from "react";

export default function SaasArrCalculator() {
  const [mrr, setMrr] = useState("");

  const mrrNum = Number(mrr);

  let result: string | null = null;

  if (mrr !== "") {
    result = (mrrNum * 12).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          MRR
        </label>
        <input
          type="number"
          value={mrr}
          onChange={(e) => setMrr(e.target.value)}
          className="input-premium"
          placeholder="Enter MRR"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">ARR</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}