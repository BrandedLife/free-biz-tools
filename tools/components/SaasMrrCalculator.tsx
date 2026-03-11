"use client";

import { useState } from "react";

export default function SaasMrrCalculator() {
  const [customers, setCustomers] = useState("");
  const [subscriptionPrice, setSubscriptionPrice] = useState("");

  const customersNum = Number(customers);
  const subscriptionPriceNum = Number(subscriptionPrice);

  let result: string | null = null;

  if (customers !== "" && subscriptionPrice !== "") {
    result = (customersNum * subscriptionPriceNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
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
            Subscription Price
          </label>
          <input
            type="number"
            value={subscriptionPrice}
            onChange={(e) => setSubscriptionPrice(e.target.value)}
            className="input-premium"
            placeholder="Enter price"
          />
        </div>
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">MRR</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}