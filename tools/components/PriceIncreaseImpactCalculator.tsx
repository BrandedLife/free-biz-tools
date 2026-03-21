"use client";

import { useState } from "react";

export default function PriceIncreaseImpactCalculator() {
  const [currentPrice, setCurrentPrice] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [monthlyUnitsSold, setMonthlyUnitsSold] = useState("");

  const currentPriceNum = Number(currentPrice);
  const newPriceNum = Number(newPrice);
  const monthlyUnitsSoldNum = Number(monthlyUnitsSold);

  let additionalRevenue: string | null = null;

  if (currentPrice !== "" && newPrice !== "" && monthlyUnitsSold !== "") {
    const revenue = (newPriceNum - currentPriceNum) * monthlyUnitsSoldNum;
    additionalRevenue = revenue.toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Current Price
        </label>
        <input
          type="number"
          value={currentPrice}
          onChange={(e) => setCurrentPrice(e.target.value)}
          className="input-premium"
          placeholder="Enter current price"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          New Price
        </label>
        <input
          type="number"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          className="input-premium"
          placeholder="Enter new price"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Monthly Units Sold
        </label>
        <input
          type="number"
          value={monthlyUnitsSold}
          onChange={(e) => setMonthlyUnitsSold(e.target.value)}
          className="input-premium"
          placeholder="Enter monthly units sold"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Additional Monthly Revenue</p>
        <p className="text-2xl font-semibold text-gray-900">
          {additionalRevenue ?? "—"}
        </p>
      </div>
    </div>
  );
}
