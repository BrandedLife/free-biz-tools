"use client";

import { useState } from "react";

export default function PurchaseFrequencyCalculator() {
  const [totalOrders, setTotalOrders] = useState("");
  const [uniqueCustomers, setUniqueCustomers] = useState("");

  const orders = Number(totalOrders);
  const customers = Number(uniqueCustomers);
  const valid = totalOrders !== "" && uniqueCustomers !== "" && orders >= 0 && customers > 0;

  const purchaseFrequency = valid ? orders / customers : null;

  return (
    <div className="rounded-2xl border p-6 bg-white shadow-sm space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Purchase Frequency Calculator</h2>
        <p className="text-sm text-gray-600 mt-2">
          Work out how often your average customer buys during a selected period.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium">Total orders</span>
          <input
            type="number"
            min="0"
            step="1"
            value={totalOrders}
            onChange={(e) => setTotalOrders(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="600"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium">Unique customers</span>
          <input
            type="number"
            min="1"
            step="1"
            value={uniqueCustomers}
            onChange={(e) => setUniqueCustomers(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="240"
          />
        </label>
      </div>

      <div className="rounded-2xl bg-gray-50 p-6">
        <p className="text-sm text-gray-500">Purchase frequency</p>
        <p className="text-3xl font-semibold">{purchaseFrequency !== null ? purchaseFrequency.toFixed(2) : "—"}</p>
      </div>

      <p className="text-sm text-gray-600">
        Formula: <strong>Purchase Frequency = Total Orders ÷ Unique Customers</strong>
      </p>
    </div>
  );
}
