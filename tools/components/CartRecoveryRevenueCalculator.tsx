"use client";

import { useState } from "react";

export default function CartRecoveryRevenueCalculator() {
  const [abandonedCarts, setAbandonedCarts] = useState("");
  const [recoveryRate, setRecoveryRate] = useState("");
  const [averageOrderValue, setAverageOrderValue] = useState("");

  const carts = Number(abandonedCarts);
  const rate = Number(recoveryRate);
  const aov = Number(averageOrderValue);

  const valid = abandonedCarts !== "" && recoveryRate !== "" && averageOrderValue !== "" && carts >= 0 && rate >= 0 && rate <= 100 && aov >= 0;

  const recoveredOrders = valid ? carts * (rate / 100) : null;
  const recoveredRevenue = valid ? recoveredOrders! * aov : null;

  return (
    <div className="rounded-2xl border p-6 bg-white shadow-sm space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Cart Recovery Revenue Calculator</h2>
        <p className="text-sm text-gray-600 mt-2">
          Estimate how much revenue you can recover from abandoned carts using email or SMS flows.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <label className="space-y-2">
          <span className="text-sm font-medium">Abandoned carts</span>
          <input
            type="number"
            min="0"
            step="1"
            value={abandonedCarts}
            onChange={(e) => setAbandonedCarts(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="300"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium">Recovery rate (%)</span>
          <input
            type="number"
            min="0"
            max="100"
            step="0.01"
            value={recoveryRate}
            onChange={(e) => setRecoveryRate(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="12"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium">Average order value</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={averageOrderValue}
            onChange={(e) => setAverageOrderValue(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="950"
          />
        </label>
      </div>

      <div className="rounded-2xl bg-gray-50 p-6 space-y-3">
        <div>
          <p className="text-sm text-gray-500">Recovered orders</p>
          <p className="text-3xl font-semibold">{recoveredOrders !== null ? recoveredOrders.toFixed(2) : "—"}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Recovered revenue</p>
          <p className="text-3xl font-semibold">{recoveredRevenue !== null ? recoveredRevenue.toFixed(2) : "—"}</p>
        </div>
      </div>

      <p className="text-sm text-gray-600">
        Formula: <strong>Recovered Revenue = Abandoned Carts × Recovery Rate × Average Order Value</strong>
      </p>
    </div>
  );
}
