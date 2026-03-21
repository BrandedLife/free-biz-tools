"use client";

import { useState } from "react";

export default function DealSizeCalculator() {
  const [units, setUnits] = useState("");
  const [pricePerUnit, setPricePerUnit] = useState("");

  const unitsNum = Number(units);
  const pricePerUnitNum = Number(pricePerUnit);

  let dealSize: string | null = null;

  if (units !== "" && pricePerUnit !== "") {
    const total = unitsNum * pricePerUnitNum;
    dealSize = total.toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Units
        </label>
        <input
          type="number"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
          className="input-premium"
          placeholder="Enter units"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Price Per Unit
        </label>
        <input
          type="number"
          value={pricePerUnit}
          onChange={(e) => setPricePerUnit(e.target.value)}
          className="input-premium"
          placeholder="Enter price per unit"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Deal Size</p>
        <p className="text-2xl font-semibold text-gray-900">
          {dealSize ?? "—"}
        </p>
      </div>
    </div>
  );
}
