"use client";

import { useState } from "react";

export default function BreakEvenUnitsCalculator() {
  const [fixedCosts, setFixedCosts] = useState("");
  const [pricePerUnit, setPricePerUnit] = useState("");
  const [variableCostPerUnit, setVariableCostPerUnit] = useState("");

  const fixedCostsNum = Number(fixedCosts);
  const pricePerUnitNum = Number(pricePerUnit);
  const variableCostPerUnitNum = Number(variableCostPerUnit);

  let breakEvenUnits: string | null = null;

  if (
    fixedCosts !== "" &&
    pricePerUnit !== "" &&
    variableCostPerUnit !== "" &&
    pricePerUnitNum > variableCostPerUnitNum
  ) {
    const units = fixedCostsNum / (pricePerUnitNum - variableCostPerUnitNum);
    breakEvenUnits = Math.ceil(units).toString();
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

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Selling Price Per Unit
        </label>
        <input
          type="number"
          value={pricePerUnit}
          onChange={(e) => setPricePerUnit(e.target.value)}
          className="input-premium"
          placeholder="Enter selling price per unit"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Variable Cost Per Unit
        </label>
        <input
          type="number"
          value={variableCostPerUnit}
          onChange={(e) => setVariableCostPerUnit(e.target.value)}
          className="input-premium"
          placeholder="Enter variable cost per unit"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Break-Even Units</p>
        <p className="text-2xl font-semibold text-gray-900">
          {breakEvenUnits ?? "—"}
        </p>
      </div>
    </div>
  );
}
