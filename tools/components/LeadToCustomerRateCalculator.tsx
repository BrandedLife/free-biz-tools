"use client";

import { useState } from "react";

export default function LeadToCustomerRateCalculator() {
  const [customers, setCustomers] = useState("");
  const [leads, setLeads] = useState("");

  const customersNum = Number(customers);
  const leadsNum = Number(leads);

  let leadToCustomerRate: string | null = null;

  if (customers !== "" && leads !== "" && leadsNum > 0) {
    const rate = (customersNum / leadsNum) * 100;
    leadToCustomerRate = `${rate.toFixed(2)}%`;
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Customers
        </label>
        <input
          type="number"
          value={customers}
          onChange={(e) => setCustomers(e.target.value)}
          className="input-premium"
          placeholder="Enter customers"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Leads
        </label>
        <input
          type="number"
          value={leads}
          onChange={(e) => setLeads(e.target.value)}
          className="input-premium"
          placeholder="Enter leads"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Lead-to-Customer Rate</p>
        <p className="text-2xl font-semibold text-gray-900">
          {leadToCustomerRate ?? "—"}
        </p>
      </div>
    </div>
  );
}
