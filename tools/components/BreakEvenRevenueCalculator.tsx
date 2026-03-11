"use client";

import { useState } from "react";

export default function BreakEvenRevenueCalculator() {
  const [fixedCosts, setFixedCosts] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [variableCost, setVariableCost] = useState("");

  const fixedCostsNum = Number(fixedCosts);
  const sellingPriceNum = Number(sellingPrice);
  const variableCostNum = Number(variableCost);

  let result: string | null = null;

  if (
    fixedCosts !== "" &&
    sellingPrice !== "" &&
    variableCost !== "" &&
    sellingPriceNum > 0 &&
    sellingPriceNum > variableCostNum
  ) {
    const contributionMarginRatio =
      (sellingPriceNum - variableCostNum) / sellingPriceNum;
    result = (fixedCostsNum / contributionMarginRatio).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Fixed Costs
        </label>
        <input
          type="number"
          value={fixedCosts}
          onChange={(e) => setFixedCosts(e.target.value)}
          className="input-premium"
          placeholder="Enter fixed costs"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Selling Price Per Unit
          </label>
          <input
            type="number"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
            className="input-premium"
            placeholder="Enter selling price"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Variable Cost Per Unit
          </label>
          <input
            type="number"
            value={variableCost}
            onChange={(e) => setVariableCost(e.target.value)}
            className="input-premium"
            placeholder="Enter variable cost"
          />
        </div>
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Break-Even Revenue</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}