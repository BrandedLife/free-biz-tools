"use client";

import { useState } from "react";

export default function PriceElasticityCalculator() {
  const [oldPrice, setOldPrice] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [oldQuantity, setOldQuantity] = useState("");
  const [newQuantity, setNewQuantity] = useState("");

  const oldPriceNum = Number(oldPrice);
  const newPriceNum = Number(newPrice);
  const oldQuantityNum = Number(oldQuantity);
  const newQuantityNum = Number(newQuantity);

  let result: string | null = null;

  if (
    oldPrice !== "" &&
    newPrice !== "" &&
    oldQuantity !== "" &&
    newQuantity !== "" &&
    oldPriceNum !== 0 &&
    oldQuantityNum !== 0
  ) {
    const pctQty = (newQuantityNum - oldQuantityNum) / oldQuantityNum;
    const pctPrice = (newPriceNum - oldPriceNum) / oldPriceNum;

    if (pctPrice !== 0) {
      result = (pctQty / pctPrice).toFixed(2);
    }
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Old Price
          </label>
          <input
            type="number"
            value={oldPrice}
            onChange={(e) => setOldPrice(e.target.value)}
            className="input-premium"
            placeholder="Enter old price"
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
            Old Quantity
          </label>
          <input
            type="number"
            value={oldQuantity}
            onChange={(e) => setOldQuantity(e.target.value)}
            className="input-premium"
            placeholder="Enter old quantity"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            New Quantity
          </label>
          <input
            type="number"
            value={newQuantity}
            onChange={(e) => setNewQuantity(e.target.value)}
            className="input-premium"
            placeholder="Enter new quantity"
          />
        </div>
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Price Elasticity</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}