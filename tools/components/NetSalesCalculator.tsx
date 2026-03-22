"use client";

import { useState } from "react";

export default function NetSalesCalculator() {
  const [grossSales, setGrossSales] = useState("");
  const [discounts, setDiscounts] = useState("");
  const [returns, setReturns] = useState("");
  const [allowances, setAllowances] = useState("");

  const grossSalesNum = Number(grossSales);
  const discountsNum = Number(discounts);
  const returnsNum = Number(returns);
  const allowancesNum = Number(allowances);

  let netSales: string | null = null;

  if (grossSales !== "" && discounts !== "" && returns !== "" && allowances !== "") {
    const result = grossSalesNum - discountsNum - returnsNum - allowancesNum;
    netSales = result.toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Gross Sales</label>
        <input type="number" value={grossSales} onChange={(e) => setGrossSales(e.target.value)} className="input-premium" placeholder="Enter gross sales" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Discounts</label>
        <input type="number" value={discounts} onChange={(e) => setDiscounts(e.target.value)} className="input-premium" placeholder="Enter discounts" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Returns</label>
        <input type="number" value={returns} onChange={(e) => setReturns(e.target.value)} className="input-premium" placeholder="Enter returns" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Allowances</label>
        <input type="number" value={allowances} onChange={(e) => setAllowances(e.target.value)} className="input-premium" placeholder="Enter allowances" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Net Sales</p>
        <p className="text-2xl font-semibold text-gray-900">{netSales ?? "—"}</p>
      </div>
    </div>
  );
}
