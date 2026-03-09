"use client";

import { useState } from "react";

export default function RevenueCalculator() {
  const [unitsSold, setUnitsSold] = useState("");
  const [pricePerUnit, setPricePerUnit] = useState("");

  const unitsSoldNum = Number(unitsSold);
  const pricePerUnitNum = Number(pricePerUnit);

  let result: string | null = null;

  if (unitsSold !== "" && pricePerUnit !== "") {
    const revenue = unitsSoldNum * pricePerUnitNum;
    result = revenue.toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Units Sold
        </label>
        <input
          type="number"
          value={unitsSold}
          onChange={(e) => setUnitsSold(e.target.value)}
          className="input-premium"
          placeholder="Enter units sold"
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
        <p className="text-sm text-gray-600">Revenue</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}