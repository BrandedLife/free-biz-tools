"use client";

import { useState } from "react";

export default function ReturnRateCalculator() {
  const [returnedOrders, setReturnedOrders] = useState("");
  const [totalOrders, setTotalOrders] = useState("");

  const returnedOrdersNum = Number(returnedOrders);
  const totalOrdersNum = Number(totalOrders);

  let returnRate: string | null = null;

  if (returnedOrders !== "" && totalOrders !== "" && totalOrdersNum > 0) {
    const result = (returnedOrdersNum / totalOrdersNum) * 100;
    returnRate = `${result.toFixed(2)}%`;
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Returned Orders</label>
        <input type="number" value={returnedOrders} onChange={(e) => setReturnedOrders(e.target.value)} className="input-premium" placeholder="Enter returned orders" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Total Orders</label>
        <input type="number" value={totalOrders} onChange={(e) => setTotalOrders(e.target.value)} className="input-premium" placeholder="Enter total orders" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Return Rate</p>
        <p className="text-2xl font-semibold text-gray-900">{returnRate ?? "—"}</p>
      </div>
    </div>
  );
}
