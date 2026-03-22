"use client";

import { useState } from "react";

export default function RefundRateCalculator() {
  const [refundedOrders, setRefundedOrders] = useState("");
  const [totalOrders, setTotalOrders] = useState("");

  const refundedOrdersNum = Number(refundedOrders);
  const totalOrdersNum = Number(totalOrders);

  let refundRate: string | null = null;

  if (refundedOrders !== "" && totalOrders !== "" && totalOrdersNum > 0) {
    const result = (refundedOrdersNum / totalOrdersNum) * 100;
    refundRate = `${result.toFixed(2)}%`;
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Refunded Orders</label>
        <input type="number" value={refundedOrders} onChange={(e) => setRefundedOrders(e.target.value)} className="input-premium" placeholder="Enter refunded orders" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Total Orders</label>
        <input type="number" value={totalOrders} onChange={(e) => setTotalOrders(e.target.value)} className="input-premium" placeholder="Enter total orders" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Refund Rate</p>
        <p className="text-2xl font-semibold text-gray-900">{refundRate ?? "—"}</p>
      </div>
    </div>
  );
}
