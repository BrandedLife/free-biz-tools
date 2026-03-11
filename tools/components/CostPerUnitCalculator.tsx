"use client";

import { useState } from "react";

export default function CostPerUnitCalculator() {
  const [totalCost, setTotalCost] = useState("");
  const [units, setUnits] = useState("");

  const totalCostNum = Number(totalCost);
  const unitsNum = Number(units);

  let result: string | null = null;

  if (totalCost !== "" && units !== "" && unitsNum > 0) {
    result = (totalCostNum / unitsNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Total Cost
        </label>
        <input
          type="number"
          value={totalCost}
          onChange={(e) => setTotalCost(e.target.value)}
          className="input-premium"
          placeholder="Enter total cost"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Total Units
        </label>
        <input
          type="number"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
          className="input-premium"
          placeholder="Enter total units"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Cost Per Unit</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}