"use client";

import { useState } from "react";

export default function CostPerLeadCalculator() {
  const [campaignSpend, setCampaignSpend] = useState("");
  const [leads, setLeads] = useState("");

  const campaignSpendNum = Number(campaignSpend);
  const leadsNum = Number(leads);

  let costPerLead: string | null = null;

  if (campaignSpend !== "" && leads !== "" && leadsNum > 0) {
    costPerLead = (campaignSpendNum / leadsNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Campaign Spend
        </label>
        <input
          type="number"
          value={campaignSpend}
          onChange={(e) => setCampaignSpend(e.target.value)}
          className="input-premium"
          placeholder="Enter campaign spend"
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
        <p className="text-sm text-gray-600">Cost Per Lead</p>
        <p className="text-2xl font-semibold text-gray-900">
          {costPerLead ?? "—"}
        </p>
      </div>
    </div>
  );
}
