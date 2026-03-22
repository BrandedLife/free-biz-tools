"use client";

import { useState } from "react";

export default function OrderFillRateCalculator() {
  const [ordersShippedComplete, setOrdersShippedComplete] = useState("");
  const [totalOrders, setTotalOrders] = useState("");

  const ordersShippedCompleteNum = Number(ordersShippedComplete);
  const totalOrdersNum = Number(totalOrders);

  let fillRate: string | null = null;

  if (ordersShippedComplete !== "" && totalOrders !== "" && totalOrdersNum > 0) {
    const result = (ordersShippedCompleteNum / totalOrdersNum) * 100;
    fillRate = `${result.toFixed(2)}%`;
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Orders Shipped Complete</label>
        <input type="number" value={ordersShippedComplete} onChange={(e) => setOrdersShippedComplete(e.target.value)} className="input-premium" placeholder="Enter orders shipped complete" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Total Orders</label>
        <input type="number" value={totalOrders} onChange={(e) => setTotalOrders(e.target.value)} className="input-premium" placeholder="Enter total orders" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Order Fill Rate</p>
        <p className="text-2xl font-semibold text-gray-900">{fillRate ?? "—"}</p>
      </div>
    </div>
  );
}
