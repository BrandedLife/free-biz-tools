"use client";

import { useState } from "react";

export default function LtvCalculator() {
  const [avgPurchaseValue, setAvgPurchaseValue] = useState("");
  const [purchaseFrequency, setPurchaseFrequency] = useState("");
  const [lifespan, setLifespan] = useState("");

  const avgPurchaseValueNum = Number(avgPurchaseValue);
  const purchaseFrequencyNum = Number(purchaseFrequency);
  const lifespanNum = Number(lifespan);

  let result: string | null = null;

  if (
    avgPurchaseValue !== "" &&
    purchaseFrequency !== "" &&
    lifespan !== ""
  ) {
    result = (
      avgPurchaseValueNum *
      purchaseFrequencyNum *
      lifespanNum
    ).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Average Purchase Value
          </label>
          <input
            type="number"
            value={avgPurchaseValue}
            onChange={(e) => setAvgPurchaseValue(e.target.value)}
            className="input-premium"
            placeholder="Enter value"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Purchase Frequency
          </label>
          <input
            type="number"
            value={purchaseFrequency}
            onChange={(e) => setPurchaseFrequency(e.target.value)}
            className="input-premium"
            placeholder="Enter frequency"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Customer Lifespan
          </label>
          <input
            type="number"
            value={lifespan}
            onChange={(e) => setLifespan(e.target.value)}
            className="input-premium"
            placeholder="Enter lifespan"
          />
        </div>
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Lifetime Value</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}