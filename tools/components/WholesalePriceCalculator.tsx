"use client";

import { useState } from "react";

export default function WholesalePriceCalculator() {
  const [costPerUnit, setCostPerUnit] = useState("");
  const [markupPercentage, setMarkupPercentage] = useState("");

  const costPerUnitNum = Number(costPerUnit);
  const markupPercentageNum = Number(markupPercentage);

  let wholesalePrice: string | null = null;

  if (costPerUnit !== "" && markupPercentage !== "") {
    const price = costPerUnitNum * (1 + markupPercentageNum / 100);
    wholesalePrice = price.toFixed(2);
  }

  return (
    <div className="space-y-5">
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

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Markup Percentage
        </label>
        <input
          type="number"
          value={markupPercentage}
          onChange={(e) => setMarkupPercentage(e.target.value)}
          className="input-premium"
          placeholder="Enter markup percentage"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Wholesale Price</p>
        <p className="text-2xl font-semibold text-gray-900">
          {wholesalePrice ?? "—"}
        </p>
      </div>
    </div>
  );
}
