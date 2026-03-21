"use client";

import { useState } from "react";

export default function SubscriptionPriceCalculator() {
  const [monthlyCosts, setMonthlyCosts] = useState("");
  const [targetMargin, setTargetMargin] = useState("");

  const monthlyCostsNum = Number(monthlyCosts);
  const targetMarginNum = Number(targetMargin);

  let subscriptionPrice: string | null = null;

  if (monthlyCosts !== "" && targetMargin !== "" && targetMarginNum < 100) {
    const price = monthlyCostsNum / (1 - targetMarginNum / 100);
    subscriptionPrice = price.toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Monthly Cost Per Customer
        </label>
        <input
          type="number"
          value={monthlyCosts}
          onChange={(e) => setMonthlyCosts(e.target.value)}
          className="input-premium"
          placeholder="Enter monthly cost per customer"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Target Margin (%)
        </label>
        <input
          type="number"
          value={targetMargin}
          onChange={(e) => setTargetMargin(e.target.value)}
          className="input-premium"
          placeholder="Enter target margin"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Suggested Subscription Price</p>
        <p className="text-2xl font-semibold text-gray-900">
          {subscriptionPrice ?? "—"}
        </p>
      </div>
    </div>
  );
}
