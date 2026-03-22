"use client";

import { useState } from "react";

export default function InventoryCarryingCostCalculator() {
  const [averageInventoryValue, setAverageInventoryValue] = useState("");
  const [carryingCostPercentage, setCarryingCostPercentage] = useState("");

  const averageInventoryValueNum = Number(averageInventoryValue);
  const carryingCostPercentageNum = Number(carryingCostPercentage);

  let carryingCost: string | null = null;

  if (averageInventoryValue !== "" && carryingCostPercentage !== "") {
    const result = averageInventoryValueNum * (carryingCostPercentageNum / 100);
    carryingCost = result.toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Average Inventory Value</label>
        <input type="number" value={averageInventoryValue} onChange={(e) => setAverageInventoryValue(e.target.value)} className="input-premium" placeholder="Enter average inventory value" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Carrying Cost Percentage</label>
        <input type="number" value={carryingCostPercentage} onChange={(e) => setCarryingCostPercentage(e.target.value)} className="input-premium" placeholder="Enter carrying cost percentage" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Inventory Carrying Cost</p>
        <p className="text-2xl font-semibold text-gray-900">{carryingCost ?? "—"}</p>
      </div>
    </div>
  );
}
