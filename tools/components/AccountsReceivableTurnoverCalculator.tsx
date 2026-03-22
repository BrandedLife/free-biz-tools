"use client";

import { useState } from "react";

export default function AccountsReceivableTurnoverCalculator() {
  const [netCreditSales, setNetCreditSales] = useState("");
  const [averageAccountsReceivable, setAverageAccountsReceivable] = useState("");

  const netCreditSalesNum = Number(netCreditSales);
  const averageAccountsReceivableNum = Number(averageAccountsReceivable);

  let turnover: string | null = null;

  if (netCreditSales !== "" && averageAccountsReceivable !== "" && averageAccountsReceivableNum > 0) {
    turnover = (netCreditSalesNum / averageAccountsReceivableNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Net Credit Sales</label>
        <input type="number" value={netCreditSales} onChange={(e) => setNetCreditSales(e.target.value)} className="input-premium" placeholder="Enter net credit sales" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Average Accounts Receivable</label>
        <input type="number" value={averageAccountsReceivable} onChange={(e) => setAverageAccountsReceivable(e.target.value)} className="input-premium" placeholder="Enter average accounts receivable" />
      </div>
      <div className="result-premium">
        <p className="text-sm text-gray-600">Accounts Receivable Turnover</p>
        <p className="text-2xl font-semibold text-gray-900">{turnover ?? "—"}</p>
      </div>
    </div>
  );
}
