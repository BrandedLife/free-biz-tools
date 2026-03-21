"use client";

import { useState } from "react";

export default function CpaCalculator() {
  const [adSpend, setAdSpend] = useState("");
  const [acquisitions, setAcquisitions] = useState("");

  const adSpendNum = Number(adSpend);
  const acquisitionsNum = Number(acquisitions);

  let cpa: string | null = null;

  if (adSpend !== "" && acquisitions !== "" && acquisitionsNum > 0) {
    cpa = (adSpendNum / acquisitionsNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Ad Spend
        </label>
        <input
          type="number"
          value={adSpend}
          onChange={(e) => setAdSpend(e.target.value)}
          className="input-premium"
          placeholder="Enter ad spend"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Acquisitions
        </label>
        <input
          type="number"
          value={acquisitions}
          onChange={(e) => setAcquisitions(e.target.value)}
          className="input-premium"
          placeholder="Enter acquisitions"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Cost Per Acquisition</p>
        <p className="text-2xl font-semibold text-gray-900">
          {cpa ?? "—"}
        </p>
      </div>
    </div>
  );
}
