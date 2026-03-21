"use client";

import { useState } from "react";

export default function CrossSellRevenueCalculator() {
  const [orders, setOrders] = useState("");
  const [crossSellTakeRate, setCrossSellTakeRate] = useState("");
  const [crossSellValue, setCrossSellValue] = useState("");

  const ordersNum = Number(orders);
  const crossSellTakeRateNum = Number(crossSellTakeRate);
  const crossSellValueNum = Number(crossSellValue);

  let crossSellRevenue: string | null = null;

  if (orders !== "" && crossSellTakeRate !== "" && crossSellValue !== "") {
    const revenue = ordersNum * (crossSellTakeRateNum / 100) * crossSellValueNum;
    crossSellRevenue = revenue.toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Number of Orders
        </label>
        <input
          type="number"
          value={orders}
          onChange={(e) => setOrders(e.target.value)}
          className="input-premium"
          placeholder="Enter number of orders"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Cross-Sell Take Rate (%)
        </label>
        <input
          type="number"
          value={crossSellTakeRate}
          onChange={(e) => setCrossSellTakeRate(e.target.value)}
          className="input-premium"
          placeholder="Enter cross-sell take rate"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Cross-Sell Value
        </label>
        <input
          type="number"
          value={crossSellValue}
          onChange={(e) => setCrossSellValue(e.target.value)}
          className="input-premium"
          placeholder="Enter cross-sell value"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Cross-Sell Revenue</p>
        <p className="text-2xl font-semibold text-gray-900">
          {crossSellRevenue ?? "—"}
        </p>
      </div>
    </div>
  );
}
