"use client";

import { useState } from "react";

export default function EcommerceConversionFunnelCalculator() {
  const [orders, setOrders] = useState("");
  const [sessions, setSessions] = useState("");

  const ordersNum = Number(orders);
  const sessionsNum = Number(sessions);

  let ecommerceConversionRate: string | null = null;

  if (orders !== "" && sessions !== "" && sessionsNum > 0) {
    const result = (ordersNum / sessionsNum) * 100;
    ecommerceConversionRate = `${result.toFixed(2)}%`;
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Orders</label>
        <input type="number" value={orders} onChange={(e) => setOrders(e.target.value)} className="input-premium" placeholder="Enter orders" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Sessions</label>
        <input type="number" value={sessions} onChange={(e) => setSessions(e.target.value)} className="input-premium" placeholder="Enter sessions" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Ecommerce Conversion Rate</p>
        <p className="text-2xl font-semibold text-gray-900">{ecommerceConversionRate ?? "—"}</p>
      </div>
    </div>
  );
}
