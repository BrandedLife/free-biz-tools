"use client";

import { useState } from "react";

export default function FulfillmentCostCalculator() {
  const [ordersFulfilled, setOrdersFulfilled] = useState("");
  const [costPerOrder, setCostPerOrder] = useState("");

  const ordersFulfilledNum = Number(ordersFulfilled);
  const costPerOrderNum = Number(costPerOrder);

  let fulfillmentCost: string | null = null;

  if (ordersFulfilled !== "" && costPerOrder !== "") {
    fulfillmentCost = (ordersFulfilledNum * costPerOrderNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Orders Fulfilled</label>
        <input type="number" value={ordersFulfilled} onChange={(e) => setOrdersFulfilled(e.target.value)} className="input-premium" placeholder="Enter orders fulfilled" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Cost Per Order</label>
        <input type="number" value={costPerOrder} onChange={(e) => setCostPerOrder(e.target.value)} className="input-premium" placeholder="Enter cost per order" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Total Fulfillment Cost</p>
        <p className="text-2xl font-semibold text-gray-900">{fulfillmentCost ?? "—"}</p>
      </div>
    </div>
  );
}
