"use client";

import { useState } from "react";

export default function ResellerDiscountCalculator() {
  const [retailPrice, setRetailPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");

  const retailPriceNum = Number(retailPrice);
  const discountPercentageNum = Number(discountPercentage);

  let resellerPrice: string | null = null;

  if (retailPrice !== "" && discountPercentage !== "") {
    const price = retailPriceNum * (1 - discountPercentageNum / 100);
    resellerPrice = price.toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Retail Price
        </label>
        <input
          type="number"
          value={retailPrice}
          onChange={(e) => setRetailPrice(e.target.value)}
          className="input-premium"
          placeholder="Enter retail price"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Reseller Discount (%)
        </label>
        <input
          type="number"
          value={discountPercentage}
          onChange={(e) => setDiscountPercentage(e.target.value)}
          className="input-premium"
          placeholder="Enter reseller discount"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Reseller Price</p>
        <p className="text-2xl font-semibold text-gray-900">
          {resellerPrice ?? "—"}
        </p>
      </div>
    </div>
  );
}
