"use client";

import { useState } from "react";

export default function CpmToCpcCalculator() {
  const [cpm, setCpm] = useState("");
  const [ctr, setCtr] = useState("");

  const cpmNum = Number(cpm);
  const ctrNum = Number(ctr);

  let result: string | null = null;

  if (cpm !== "" && ctr !== "" && ctrNum > 0) {
    result = (cpmNum / (1000 * (ctrNum / 100))).toFixed(4);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          CPM
        </label>
        <input
          type="number"
          value={cpm}
          onChange={(e) => setCpm(e.target.value)}
          className="input-premium"
          placeholder="Enter CPM"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          CTR (%)
        </label>
        <input
          type="number"
          value={ctr}
          onChange={(e) => setCtr(e.target.value)}
          className="input-premium"
          placeholder="Enter CTR"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Estimated CPC</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}