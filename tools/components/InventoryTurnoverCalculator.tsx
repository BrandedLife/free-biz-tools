"use client";

import { useState } from "react";

export default function InventoryTurnoverCalculator() {
  const [cogs, setCogs] = useState("");
  const [avgInventory, setAvgInventory] = useState("");

  const cogsNum = Number(cogs);
  const avgInventoryNum = Number(avgInventory);

  let result: string | null = null;

  if (cogs !== "" && avgInventory !== "" && avgInventoryNum > 0) {
    result = (cogsNum / avgInventoryNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Cost of Goods Sold
        </label>
        <input
          type="number"
          value={cogs}
          onChange={(e) => setCogs(e.target.value)}
          className="input-premium"
          placeholder="Enter COGS"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Average Inventory
        </label>
        <input
          type="number"
          value={avgInventory}
          onChange={(e) => setAvgInventory(e.target.value)}
          className="input-premium"
          placeholder="Enter average inventory"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Inventory Turnover</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}