"use client";

import { useState } from "react";

export default function AccountsPayableDaysCalculator() {
  const [averageAccountsPayable, setAverageAccountsPayable] = useState("");
  const [costOfGoodsSold, setCostOfGoodsSold] = useState("");

  const averageAccountsPayableNum = Number(averageAccountsPayable);
  const costOfGoodsSoldNum = Number(costOfGoodsSold);

  let payableDays: string | null = null;

  if (averageAccountsPayable !== "" && costOfGoodsSold !== "" && costOfGoodsSoldNum > 0) {
    const result = (averageAccountsPayableNum / costOfGoodsSoldNum) * 365;
    payableDays = result.toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Average Accounts Payable</label>
        <input type="number" value={averageAccountsPayable} onChange={(e) => setAverageAccountsPayable(e.target.value)} className="input-premium" placeholder="Enter average accounts payable" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Cost of Goods Sold</label>
        <input type="number" value={costOfGoodsSold} onChange={(e) => setCostOfGoodsSold(e.target.value)} className="input-premium" placeholder="Enter cost of goods sold" />
      </div>
      <div className="result-premium">
        <p className="text-sm text-gray-600">Accounts Payable Days</p>
        <p className="text-2xl font-semibold text-gray-900">{payableDays ?? "—"}</p>
      </div>
    </div>
  );
}
