"use client";

import { useState } from "react";

export default function MinimumProfitablePriceCalculator() {
  const [costPerUnit, setCostPerUnit] = useState("");
  const [feesPerUnit, setFeesPerUnit] = useState("");
  const [desiredProfitPerUnit, setDesiredProfitPerUnit] = useState("");

  const costPerUnitNum = Number(costPerUnit);
  const feesPerUnitNum = Number(feesPerUnit);
  const desiredProfitPerUnitNum = Number(desiredProfitPerUnit);

  let minimumProfitablePrice: string | null = null;

  if (costPerUnit !== "" && feesPerUnit !== "" && desiredProfitPerUnit !== "") {
    const price = costPerUnitNum + feesPerUnitNum + desiredProfitPerUnitNum;
    minimumProfitablePrice = price.toFixed(2);
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
          Fees Per Unit
        </label>
        <input
          type="number"
          value={feesPerUnit}
          onChange={(e) => setFeesPerUnit(e.target.value)}
          className="input-premium"
          placeholder="Enter fees per unit"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Desired Profit Per Unit
        </label>
        <input
          type="number"
          value={desiredProfitPerUnit}
          onChange={(e) => setDesiredProfitPerUnit(e.target.value)}
          className="input-premium"
          placeholder="Enter desired profit per unit"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Minimum Profitable Price</p>
        <p className="text-2xl font-semibold text-gray-900">
          {minimumProfitablePrice ?? "—"}
        </p>
      </div>
    </div>
  );
}
