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
    <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Units Sold
        </label>
        <input
          type="number"
          value={unitsSold}
          onChange={(e) => setUnitsSold(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
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
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
          placeholder="Enter price per unit"
        />
      </div>

      <div className="rounded-lg bg-gray-50 p-4">
        <p className="text-sm text-gray-600">Revenue</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}