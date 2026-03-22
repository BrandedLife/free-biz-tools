"use client";

import { useState } from "react";

export default function ArpuCalculator() {
  const [monthlyRecurringRevenue, setMonthlyRecurringRevenue] = useState("");
  const [activeUsers, setActiveUsers] = useState("");

  const monthlyRecurringRevenueNum = Number(monthlyRecurringRevenue);
  const activeUsersNum = Number(activeUsers);

  let arpu: string | null = null;

  if (monthlyRecurringRevenue !== "" && activeUsers !== "" && activeUsersNum > 0) {
    arpu = (monthlyRecurringRevenueNum / activeUsersNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Monthly Recurring Revenue</label>
        <input type="number" value={monthlyRecurringRevenue} onChange={(e) => setMonthlyRecurringRevenue(e.target.value)} className="input-premium" placeholder="Enter MRR" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Active Users</label>
        <input type="number" value={activeUsers} onChange={(e) => setActiveUsers(e.target.value)} className="input-premium" placeholder="Enter active users" />
      </div>
      <div className="result-premium">
        <p className="text-sm text-gray-600">ARPU</p>
        <p className="text-2xl font-semibold text-gray-900">{arpu ?? "—"}</p>
      </div>
    </div>
  );
}
