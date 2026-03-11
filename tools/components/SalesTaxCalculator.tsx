"use client";

import { useState } from "react";

export default function SalesTaxCalculator() {
  const [amount, setAmount] = useState("");
  const [taxRate, setTaxRate] = useState("");

  const amountNum = Number(amount);
  const taxRateNum = Number(taxRate);

  let taxAmount: string | null = null;
  let total: string | null = null;

  if (amount !== "" && taxRate !== "") {
    const tax = (amountNum * taxRateNum) / 100;
    taxAmount = tax.toFixed(2);
    total = (amountNum + tax).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input-premium"
            placeholder="Enter amount"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Sales Tax Rate %
          </label>
          <input
            type="number"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
            className="input-premium"
            placeholder="Enter tax rate"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="result-premium">
          <p className="text-sm text-gray-600">Sales Tax</p>
          <p className="text-2xl font-semibold text-gray-900">{taxAmount ?? "—"}</p>
        </div>

        <div className="result-premium">
          <p className="text-sm text-gray-600">Total Including Tax</p>
          <p className="text-2xl font-semibold text-gray-900">{total ?? "—"}</p>
        </div>
      </div>
    </div>
  );
}