"use client";

import { useState } from "react";

export default function ShippingProfitCalculator() {
  const [shippingCharged, setShippingCharged] = useState("");
  const [shippingCost, setShippingCost] = useState("");

  const shippingChargedNum = Number(shippingCharged);
  const shippingCostNum = Number(shippingCost);

  let result: string | null = null;

  if (shippingCharged !== "" && shippingCost !== "") {
    result = (shippingChargedNum - shippingCostNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Shipping Charged to Customer
        </label>
        <input
          type="number"
          value={shippingCharged}
          onChange={(e) => setShippingCharged(e.target.value)}
          className="input-premium"
          placeholder="Enter shipping charged"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Actual Shipping Cost
        </label>
        <input
          type="number"
          value={shippingCost}
          onChange={(e) => setShippingCost(e.target.value)}
          className="input-premium"
          placeholder="Enter shipping cost"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Shipping Profit / Loss</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}