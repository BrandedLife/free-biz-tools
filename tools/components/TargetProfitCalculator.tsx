"use client";

import { useState } from "react";

export default function TargetProfitCalculator() {
  const [fixedCosts, setFixedCosts] = useState("");
  const [targetProfit, setTargetProfit] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [variableCost, setVariableCost] = useState("");

  const fixedCostsNum = Number(fixedCosts);
  const targetProfitNum = Number(targetProfit);
  const sellingPriceNum = Number(sellingPrice);
  const variableCostNum = Number(variableCost);

  let units: string | null = null;

  if (
    fixedCosts !== "" &&
    targetProfit !== "" &&
    sellingPrice !== "" &&
    variableCost !== "" &&
    sellingPriceNum > variableCostNum
  ) {
    units = Math.ceil(
      (fixedCostsNum + targetProfitNum) / (sellingPriceNum - variableCostNum)
    ).toString();
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
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

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Target Profit
          </label>
          <input
            type="number"
            value={targetProfit}
            onChange={(e) => setTargetProfit(e.target.value)}
            className="input-premium"
            placeholder="Enter target profit"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Selling Price
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
            Variable Cost
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
        <p className="text-sm text-gray-600">Units Needed</p>
        <p className="text-2xl font-semibold text-gray-900">{units ?? "—"}</p>
      </div>
    </div>
  );
}