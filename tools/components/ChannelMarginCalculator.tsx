"use client";

import { useState } from "react";

export default function ChannelMarginCalculator() {
  const [sellingPrice, setSellingPrice] = useState("");
  const [costPerUnit, setCostPerUnit] = useState("");
  const [channelFees, setChannelFees] = useState("");

  const sellingPriceNum = Number(sellingPrice);
  const costPerUnitNum = Number(costPerUnit);
  const channelFeesNum = Number(channelFees);

  let channelMargin: string | null = null;

  if (sellingPrice !== "" && costPerUnit !== "" && channelFees !== "" && sellingPriceNum > 0) {
    const margin = ((sellingPriceNum - costPerUnitNum - channelFeesNum) / sellingPriceNum) * 100;
    channelMargin = `${margin.toFixed(2)}%`;
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Selling Price
        </label>
        <input
          type="number"
          value={sellingPrice}
          onChange={(e) => setSellingPrice(e.target.value)}
          className="input-premium"
          placeholder="Enter selling price"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Cost Per Unit
        </label>
        <input
          type="number"
          value={costPerUnit}
          onChange={(e) => setCostPerUnit(e.target.value)}
          className="input-premium"
          placeholder="Enter cost per unit"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Channel Fees Per Unit
        </label>
        <input
          type="number"
          value={channelFees}
          onChange={(e) => setChannelFees(e.target.value)}
          className="input-premium"
          placeholder="Enter channel fees per unit"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Channel Margin</p>
        <p className="text-2xl font-semibold text-gray-900">
          {channelMargin ?? "—"}
        </p>
      </div>
    </div>
  );
}
