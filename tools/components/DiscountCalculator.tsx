"use client";

import { useState } from "react";

export default function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercent, setDiscountPercent] = useState("");

  const originalPriceNum = Number(originalPrice);
  const discountPercentNum = Number(discountPercent);

  let discountAmount: string | null = null;
  let finalPrice: string | null = null;

  if (
    originalPrice !== "" &&
    discountPercent !== "" &&
    originalPriceNum >= 0 &&
    discountPercentNum >= 0
  ) {
    const discount = (originalPriceNum * discountPercentNum) / 100;
    const final = originalPriceNum - discount;

    discountAmount = discount.toFixed(2);
    finalPrice = final.toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Original Price
        </label>
        <input
          type="number"
          value={originalPrice}
          onChange={(e) => setOriginalPrice(e.target.value)}
          className="input-premium"
          placeholder="Enter original price"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Discount Percentage
        </label>
        <input
          type="number"
          value={discountPercent}
          onChange={(e) => setDiscountPercent(e.target.value)}
          className="input-premium"
          placeholder="Enter discount %"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="result-premium">
          <p className="text-sm text-gray-600">Discount Amount</p>
          <p className="text-2xl font-semibold text-gray-900">
            {discountAmount ?? "—"}
          </p>
        </div>

        <div className="result-premium">
          <p className="text-sm text-gray-600">Final Price</p>
          <p className="text-2xl font-semibold text-gray-900">
            {finalPrice ?? "—"}
          </p>
        </div>
      </div>
    </div>
  );
}