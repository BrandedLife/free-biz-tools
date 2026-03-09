"use client";

import { useState } from "react";

export default function CacCalculator() {
  const [marketingSpend, setMarketingSpend] = useState("");
  const [newCustomers, setNewCustomers] = useState("");

  const marketingSpendNum = Number(marketingSpend);
  const newCustomersNum = Number(newCustomers);

  let result: string | null = null;

  if (marketingSpend !== "" && newCustomers !== "" && newCustomersNum > 0) {
    const cac = marketingSpendNum / newCustomersNum;
    result = cac.toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Total Marketing Spend
        </label>
        <input
          type="number"
          value={marketingSpend}
          onChange={(e) => setMarketingSpend(e.target.value)}
          className="input-premium"
          placeholder="Enter total spend"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          New Customers
        </label>
        <input
          type="number"
          value={newCustomers}
          onChange={(e) => setNewCustomers(e.target.value)}
          className="input-premium"
          placeholder="Enter new customers"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">CAC</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}