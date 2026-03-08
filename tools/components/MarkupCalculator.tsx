"use client";

import { useState } from "react";

export default function MarkupCalculator() {
  const [cost, setCost] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");

  const costNum = Number(cost);
  const sellingPriceNum = Number(sellingPrice);

  let result: string | null = null;

  if (cost !== "" && sellingPrice !== "" && costNum > 0) {
    const markup = ((sellingPriceNum - costNum) / costNum) * 100;
    result = `${markup.toFixed(2)}%`;
  }

  return (
    <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Cost
        </label>
        <input
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
          placeholder="Enter cost"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Selling Price
        </label>
        <input
          type="number"
          value={sellingPrice}
          onChange={(e) => setSellingPrice(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
          placeholder="Enter selling price"
        />
      </div>

      <div className="rounded-lg bg-gray-50 p-4">
        <p className="text-sm text-gray-600">Markup</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}