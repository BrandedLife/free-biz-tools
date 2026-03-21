"use client";

import { useState } from "react";

export default function UpsellRevenueCalculator() {
  const [orders, setOrders] = useState("");
  const [upsellTakeRate, setUpsellTakeRate] = useState("");
  const [upsellValue, setUpsellValue] = useState("");

  const ordersNum = Number(orders);
  const upsellTakeRateNum = Number(upsellTakeRate);
  const upsellValueNum = Number(upsellValue);

  let upsellRevenue: string | null = null;

  if (orders !== "" && upsellTakeRate !== "" && upsellValue !== "") {
    const revenue = ordersNum * (upsellTakeRateNum / 100) * upsellValueNum;
    upsellRevenue = revenue.toFixed(2);
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
          Upsell Take Rate (%)
        </label>
        <input
          type="number"
          value={upsellTakeRate}
          onChange={(e) => setUpsellTakeRate(e.target.value)}
          className="input-premium"
          placeholder="Enter upsell take rate"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Upsell Value
        </label>
        <input
          type="number"
          value={upsellValue}
          onChange={(e) => setUpsellValue(e.target.value)}
          className="input-premium"
          placeholder="Enter upsell value"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Upsell Revenue</p>
        <p className="text-2xl font-semibold text-gray-900">
          {upsellRevenue ?? "—"}
        </p>
      </div>
    </div>
  );
}
