"use client";

import { useState } from "react";

export default function DesiredMarginPriceCalculator() {
  const [costPerUnit, setCostPerUnit] = useState("");
  const [desiredMargin, setDesiredMargin] = useState("");

  const costPerUnitNum = Number(costPerUnit);
  const desiredMarginNum = Number(desiredMargin);

  let desiredMarginPrice: string | null = null;

  if (costPerUnit !== "" && desiredMargin !== "" && desiredMarginNum < 100) {
    const price = costPerUnitNum / (1 - desiredMarginNum / 100);
    desiredMarginPrice = price.toFixed(2);
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

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Desired Margin (%)
        </label>
        <input
          type="number"
          value={desiredMargin}
          onChange={(e) => setDesiredMargin(e.target.value)}
          className="input-premium"
          placeholder="Enter desired margin"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Required Selling Price</p>
        <p className="text-2xl font-semibold text-gray-900">
          {desiredMarginPrice ?? "—"}
        </p>
      </div>
    </div>
  );
}
