"use client";

import { useState } from "react";

export default function DiscountRateCalculator() {
  const [futureValue, setFutureValue] = useState("");
  const [presentValue, setPresentValue] = useState("");
  const [years, setYears] = useState("");

  const futureValueNum = Number(futureValue);
  const presentValueNum = Number(presentValue);
  const yearsNum = Number(years);

  let discountRate: string | null = null;

  if (futureValue !== "" && presentValue !== "" && years !== "" && presentValueNum > 0 && yearsNum > 0) {
    const rate = (Math.pow(futureValueNum / presentValueNum, 1 / yearsNum) - 1) * 100;
    discountRate = `${rate.toFixed(2)}%`;
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Future Value</label>
        <input type="number" value={futureValue} onChange={(e) => setFutureValue(e.target.value)} className="input-premium" placeholder="Enter future value" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Present Value</label>
        <input type="number" value={presentValue} onChange={(e) => setPresentValue(e.target.value)} className="input-premium" placeholder="Enter present value" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Years</label>
        <input type="number" value={years} onChange={(e) => setYears(e.target.value)} className="input-premium" placeholder="Enter number of years" />
      </div>
      <div className="result-premium">
        <p className="text-sm text-gray-600">Discount Rate</p>
        <p className="text-2xl font-semibold text-gray-900">{discountRate ?? "—"}</p>
      </div>
    </div>
  );
}
