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
    <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Total Marketing Spend
        </label>
        <input
          type="number"
          value={marketingSpend}
          onChange={(e) => setMarketingSpend(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
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
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
          placeholder="Enter new customers"
        />
      </div>

      <div className="rounded-lg bg-gray-50 p-4">
        <p className="text-sm text-gray-600">CAC</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}