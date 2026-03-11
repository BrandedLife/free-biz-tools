"use client";

import { useState } from "react";

export default function AverageOrderValueCalculator() {
  const [revenue, setRevenue] = useState("");
  const [orders, setOrders] = useState("");

  const revenueNum = Number(revenue);
  const ordersNum = Number(orders);

  let result: string | null = null;

  if (revenue !== "" && orders !== "" && ordersNum > 0) {
    result = (revenueNum / ordersNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Revenue
          </label>
          <input
            type="number"
            value={revenue}
            onChange={(e) => setRevenue(e.target.value)}
            className="input-premium"
            placeholder="Enter revenue"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Orders
          </label>
          <input
            type="number"
            value={orders}
            onChange={(e) => setOrders(e.target.value)}
            className="input-premium"
            placeholder="Enter orders"
          />
        </div>
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Average Order Value</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}