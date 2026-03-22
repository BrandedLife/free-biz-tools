"use client";

import { useState } from "react";

export default function DaysSalesInInventoryCalculator() {
  const [averageInventory, setAverageInventory] = useState("");
  const [costOfGoodsSold, setCostOfGoodsSold] = useState("");

  const averageInventoryNum = Number(averageInventory);
  const costOfGoodsSoldNum = Number(costOfGoodsSold);

  let dsI: string | null = null;

  if (averageInventory !== "" && costOfGoodsSold !== "" && costOfGoodsSoldNum > 0) {
    const result = (averageInventoryNum / costOfGoodsSoldNum) * 365;
    dsI = result.toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Average Inventory</label>
        <input type="number" value={averageInventory} onChange={(e) => setAverageInventory(e.target.value)} className="input-premium" placeholder="Enter average inventory" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Cost of Goods Sold</label>
        <input type="number" value={costOfGoodsSold} onChange={(e) => setCostOfGoodsSold(e.target.value)} className="input-premium" placeholder="Enter cost of goods sold" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Days Sales in Inventory</p>
        <p className="text-2xl font-semibold text-gray-900">{dsI ?? "—"}</p>
      </div>
    </div>
  );
}
