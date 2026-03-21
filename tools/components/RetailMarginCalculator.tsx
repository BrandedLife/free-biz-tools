"use client";

import { useState } from "react";

export default function RetailMarginCalculator() {
  const [sellingPrice, setSellingPrice] = useState("");
  const [costPerUnit, setCostPerUnit] = useState("");

  const sellingPriceNum = Number(sellingPrice);
  const costPerUnitNum = Number(costPerUnit);

  let retailMargin: string | null = null;

  if (sellingPrice !== "" && costPerUnit !== "" && sellingPriceNum > 0) {
    const margin = ((sellingPriceNum - costPerUnitNum) / sellingPriceNum) * 100;
    retailMargin = `${margin.toFixed(2)}%`;
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Retail Selling Price
        </label>
        <input
          type="number"
          value={sellingPrice}
          onChange={(e) => setSellingPrice(e.target.value)}
          className="input-premium"
          placeholder="Enter retail selling price"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Cost Per Unit
        </label>
        <input
          type="number"
          value={costPerUnit}
          onChange={(e) => setCostPerUnit(e.target.value)}
          className="input-premium"
          placeholder="Enter cost per unit"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Retail Margin</p>
        <p className="text-2xl font-semibold text-gray-900">
          {retailMargin ?? "—"}
        </p>
      </div>
    </div>
  );
}
