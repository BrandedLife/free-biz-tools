"use client";

import { useState } from "react";

export default function LeadValueCalculator() {
  const [totalRevenue, setTotalRevenue] = useState("");
  const [totalLeads, setTotalLeads] = useState("");

  const totalRevenueNum = Number(totalRevenue);
  const totalLeadsNum = Number(totalLeads);

  let leadValue: string | null = null;

  if (totalRevenue !== "" && totalLeads !== "" && totalLeadsNum > 0) {
    leadValue = (totalRevenueNum / totalLeadsNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Total Revenue</label>
        <input type="number" value={totalRevenue} onChange={(e) => setTotalRevenue(e.target.value)} className="input-premium" placeholder="Enter total revenue" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Total Leads</label>
        <input type="number" value={totalLeads} onChange={(e) => setTotalLeads(e.target.value)} className="input-premium" placeholder="Enter total leads" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Lead Value</p>
        <p className="text-2xl font-semibold text-gray-900">{leadValue ?? "—"}</p>
      </div>
    </div>
  );
}
