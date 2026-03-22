"use client";

import { useState } from "react";

export default function NetRevenueRetentionCalculator() {
  const [startingMrr, setStartingMrr] = useState("");
  const [expansionMrr, setExpansionMrr] = useState("");
  const [churnedMrr, setChurnedMrr] = useState("");

  const startingMrrNum = Number(startingMrr);
  const expansionMrrNum = Number(expansionMrr);
  const churnedMrrNum = Number(churnedMrr);

  let nrr: string | null = null;

  if (startingMrr !== "" && expansionMrr !== "" && churnedMrr !== "" && startingMrrNum > 0) {
    const result = ((startingMrrNum + expansionMrrNum - churnedMrrNum) / startingMrrNum) * 100;
    nrr = `${result.toFixed(2)}%`;
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Starting MRR</label>
        <input type="number" value={startingMrr} onChange={(e) => setStartingMrr(e.target.value)} className="input-premium" placeholder="Enter starting MRR" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Expansion MRR</label>
        <input type="number" value={expansionMrr} onChange={(e) => setExpansionMrr(e.target.value)} className="input-premium" placeholder="Enter expansion MRR" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Churned MRR</label>
        <input type="number" value={churnedMrr} onChange={(e) => setChurnedMrr(e.target.value)} className="input-premium" placeholder="Enter churned MRR" />
      </div>
      <div className="result-premium">
        <p className="text-sm text-gray-600">Net Revenue Retention</p>
        <p className="text-2xl font-semibold text-gray-900">{nrr ?? "—"}</p>
      </div>
    </div>
  );
}
