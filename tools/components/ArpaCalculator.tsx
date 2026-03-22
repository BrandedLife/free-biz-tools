"use client";

import { useState } from "react";

export default function ArpaCalculator() {
  const [monthlyRecurringRevenue, setMonthlyRecurringRevenue] = useState("");
  const [activeAccounts, setActiveAccounts] = useState("");

  const monthlyRecurringRevenueNum = Number(monthlyRecurringRevenue);
  const activeAccountsNum = Number(activeAccounts);

  let arpa: string | null = null;

  if (monthlyRecurringRevenue !== "" && activeAccounts !== "" && activeAccountsNum > 0) {
    arpa = (monthlyRecurringRevenueNum / activeAccountsNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Monthly Recurring Revenue</label>
        <input type="number" value={monthlyRecurringRevenue} onChange={(e) => setMonthlyRecurringRevenue(e.target.value)} className="input-premium" placeholder="Enter MRR" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Active Accounts</label>
        <input type="number" value={activeAccounts} onChange={(e) => setActiveAccounts(e.target.value)} className="input-premium" placeholder="Enter active accounts" />
      </div>
      <div className="result-premium">
        <p className="text-sm text-gray-600">ARPA</p>
        <p className="text-2xl font-semibold text-gray-900">{arpa ?? "—"}</p>
      </div>
    </div>
  );
}
