"use client";

import { useState } from "react";

export default function VatCalculator() {
  const [amount, setAmount] = useState("");
  const [vatRate, setVatRate] = useState("15");

  const amountNum = Number(amount);
  const vatRateNum = Number(vatRate);

  let vatAmount: string | null = null;
  let totalIncludingVat: string | null = null;
  let amountExcludingVat: string | null = null;

  if (amount !== "" && amountNum >= 0) {
    const vat = (amountNum * vatRateNum) / 100;
    const total = amountNum + vat;
    const excluding = amountNum / (1 + vatRateNum / 100);

    vatAmount = vat.toFixed(2);
    totalIncludingVat = total.toFixed(2);
    amountExcludingVat = excluding.toFixed(2);
  }

  return (
    <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Base Amount
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
          placeholder="Enter amount"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          VAT Rate (%)
        </label>
        <input
          type="number"
          value={vatRate}
          onChange={(e) => setVatRate(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
          placeholder="15"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg bg-gray-50 p-4">
          <p className="text-sm text-gray-600">VAT Amount</p>
          <p className="text-2xl font-semibold text-gray-900">{vatAmount ?? "—"}</p>
        </div>

        <div className="rounded-lg bg-gray-50 p-4">
          <p className="text-sm text-gray-600">Including VAT</p>
          <p className="text-2xl font-semibold text-gray-900">
            {totalIncludingVat ?? "—"}
          </p>
        </div>

        <div className="rounded-lg bg-gray-50 p-4">
          <p className="text-sm text-gray-600">Excluding VAT</p>
          <p className="text-2xl font-semibold text-gray-900">
            {amountExcludingVat ?? "—"}
          </p>
        </div>
      </div>
    </div>
  );
}