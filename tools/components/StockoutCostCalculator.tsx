"use client";

import { useState } from "react";

export default function StockoutCostCalculator() {
  const [lostSalesUnits, setLostSalesUnits] = useState("");
  const [profitPerUnit, setProfitPerUnit] = useState("");

  const lostSalesUnitsNum = Number(lostSalesUnits);
  const profitPerUnitNum = Number(profitPerUnit);

  let stockoutCost: string | null = null;

  if (lostSalesUnits !== "" && profitPerUnit !== "") {
    stockoutCost = (lostSalesUnitsNum * profitPerUnitNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Lost Sales Units</label>
        <input type="number" value={lostSalesUnits} onChange={(e) => setLostSalesUnits(e.target.value)} className="input-premium" placeholder="Enter lost sales units" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Profit Per Unit</label>
        <input type="number" value={profitPerUnit} onChange={(e) => setProfitPerUnit(e.target.value)} className="input-premium" placeholder="Enter profit per unit" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Estimated Stockout Cost</p>
        <p className="text-2xl font-semibold text-gray-900">{stockoutCost ?? "—"}</p>
      </div>
    </div>
  );
}
