"use client";

import { useState } from "react";

export default function WarehouseSpaceCalculator() {
  const [unitsToStore, setUnitsToStore] = useState("");
  const [spacePerUnit, setSpacePerUnit] = useState("");

  const unitsToStoreNum = Number(unitsToStore);
  const spacePerUnitNum = Number(spacePerUnit);

  let warehouseSpace: string | null = null;

  if (unitsToStore !== "" && spacePerUnit !== "") {
    warehouseSpace = (unitsToStoreNum * spacePerUnitNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Units to Store</label>
        <input type="number" value={unitsToStore} onChange={(e) => setUnitsToStore(e.target.value)} className="input-premium" placeholder="Enter units to store" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Space Per Unit</label>
        <input type="number" value={spacePerUnit} onChange={(e) => setSpacePerUnit(e.target.value)} className="input-premium" placeholder="Enter space per unit" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Required Warehouse Space</p>
        <p className="text-2xl font-semibold text-gray-900">{warehouseSpace ?? "—"}</p>
      </div>
    </div>
  );
}
