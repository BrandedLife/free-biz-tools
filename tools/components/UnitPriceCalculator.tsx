"use client";

import { useState } from "react";

export default function UnitPriceCalculator() {
  const [totalPrice, setTotalPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const totalPriceNum = Number(totalPrice);
  const quantityNum = Number(quantity);

  let result: string | null = null;

  if (totalPrice !== "" && quantity !== "" && quantityNum > 0) {
    result = (totalPriceNum / quantityNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Total Price
        </label>
        <input
          type="number"
          value={totalPrice}
          onChange={(e) => setTotalPrice(e.target.value)}
          className="input-premium"
          placeholder="Enter total price"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Quantity
        </label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="input-premium"
          placeholder="Enter quantity"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Unit Price</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}