"use client";

import { useState } from "react";

export default function SaasLtvCacRatioCalculator() {
  const [ltv, setLtv] = useState("");
  const [cac, setCac] = useState("");

  const ltvNum = Number(ltv);
  const cacNum = Number(cac);

  let ratio: string | null = null;

  if (ltv !== "" && cac !== "" && cacNum > 0) {
    ratio = (ltvNum / cacNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">LTV</label>
        <input type="number" value={ltv} onChange={(e) => setLtv(e.target.value)} className="input-premium" placeholder="Enter lifetime value" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">CAC</label>
        <input type="number" value={cac} onChange={(e) => setCac(e.target.value)} className="input-premium" placeholder="Enter customer acquisition cost" />
      </div>
      <div className="result-premium">
        <p className="text-sm text-gray-600">LTV:CAC Ratio</p>
        <p className="text-2xl font-semibold text-gray-900">{ratio ?? "—"}</p>
      </div>
    </div>
  );
}
