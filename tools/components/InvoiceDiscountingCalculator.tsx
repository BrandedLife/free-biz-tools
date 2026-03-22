"use client";

import { useState } from "react";

export default function InvoiceDiscountingCalculator() {
  const [invoiceValue, setInvoiceValue] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");

  const invoiceValueNum = Number(invoiceValue);
  const discountPercentageNum = Number(discountPercentage);

  let discountAmount: string | null = null;
  let cashReceived: string | null = null;

  if (invoiceValue !== "" && discountPercentage !== "") {
    const amount = invoiceValueNum * (discountPercentageNum / 100);
    discountAmount = amount.toFixed(2);
    cashReceived = (invoiceValueNum - amount).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Invoice Value</label>
        <input type="number" value={invoiceValue} onChange={(e) => setInvoiceValue(e.target.value)} className="input-premium" placeholder="Enter invoice value" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Discount Percentage</label>
        <input type="number" value={discountPercentage} onChange={(e) => setDiscountPercentage(e.target.value)} className="input-premium" placeholder="Enter discount percentage" />
      </div>
      <div className="result-premium">
        <p className="text-sm text-gray-600">Discount Amount</p>
        <p className="text-2xl font-semibold text-gray-900">{discountAmount ?? "—"}</p>
      </div>
      <div className="result-premium">
        <p className="text-sm text-gray-600">Cash Received</p>
        <p className="text-2xl font-semibold text-gray-900">{cashReceived ?? "—"}</p>
      </div>
    </div>
  );
}
