"use client";

import { useState } from "react";

export default function KeystonePricingCalculator() {
  const [costPerUnit, setCostPerUnit] = useState("");

  const costPerUnitNum = Number(costPerUnit);

  let keystonePrice: string | null = null;

  if (costPerUnit !== "") {
    keystonePrice = (costPerUnitNum * 2).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Cost Per Unit
        </label>
        <input
          type="number"
          value={costPerUnit}
          onChange={(e) => setCostPerUnit(e.target.value)}
          className="input-premium"
          placeholder="Enter cost per unit"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Keystone Price</p>
        <p className="text-2xl font-semibold text-gray-900">
          {keystonePrice ?? "—"}
        </p>
      </div>
    </div>
  );
}
