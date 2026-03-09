"use client";

import { useState } from "react";

export default function ProductPriceCalculator() {
  const [cost, setCost] = useState("");
  const [markupPercent, setMarkupPercent] = useState("");
  const [vatPercent, setVatPercent] = useState("15");
  const [feePercent, setFeePercent] = useState("0");

  const costNum = Number(cost);
  const markupPercentNum = Number(markupPercent);
  const vatPercentNum = Number(vatPercent);
  const feePercentNum = Number(feePercent);

  let sellingPriceExVat: string | null = null;
  let vatAmount: string | null = null;
  let sellingPriceIncVat: string | null = null;

  if (cost !== "" && markupPercent !== "" && costNum >= 0) {
    const priceBeforeFees = costNum * (1 + markupPercentNum / 100);
    const feeAdjustment = priceBeforeFees * (feePercentNum / 100);
    const exVat = priceBeforeFees + feeAdjustment;
    const vat = exVat * (vatPercentNum / 100);
    const incVat = exVat + vat;

    sellingPriceExVat = exVat.toFixed(2);
    vatAmount = vat.toFixed(2);
    sellingPriceIncVat = incVat.toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Product Cost
        </label>
        <input
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          className="input-premium"
          placeholder="Enter product cost"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Markup %
          </label>
          <input
            type="number"
            value={markupPercent}
            onChange={(e) => setMarkupPercent(e.target.value)}
            className="input-premium"
            placeholder="Enter markup %"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            VAT %
          </label>
          <input
            type="number"
            value={vatPercent}
            onChange={(e) => setVatPercent(e.target.value)}
            className="input-premium"
            placeholder="15"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Fee %
          </label>
          <input
            type="number"
            value={feePercent}
            onChange={(e) => setFeePercent(e.target.value)}
            className="input-premium"
            placeholder="0"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="result-premium">
          <p className="text-sm text-gray-600">Price Ex VAT</p>
          <p className="text-2xl font-semibold text-gray-900">
            {sellingPriceExVat ?? "—"}
          </p>
        </div>

        <div className="result-premium">
          <p className="text-sm text-gray-600">VAT Amount</p>
          <p className="text-2xl font-semibold text-gray-900">{vatAmount ?? "—"}</p>
        </div>

        <div className="result-premium">
          <p className="text-sm text-gray-600">Price Inc VAT</p>
          <p className="text-2xl font-semibold text-gray-900">
            {sellingPriceIncVat ?? "—"}
          </p>
        </div>
      </div>
    </div>
  );
}