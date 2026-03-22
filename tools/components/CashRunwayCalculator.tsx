"use client";

import { useState } from "react";

export default function CashRunwayCalculator() {
  const [cashBalance, setCashBalance] = useState("");
  const [monthlyBurn, setMonthlyBurn] = useState("");

  const cashBalanceNum = Number(cashBalance);
  const monthlyBurnNum = Number(monthlyBurn);

  let result: string | null = null;

  if (cashBalance !== "" && monthlyBurn !== "" && monthlyBurnNum > 0) {
    result = (cashBalanceNum / monthlyBurnNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Cash Balance
        </label>
        <input
          type="number"
          value={cashBalance}
          onChange={(e) => setCashBalance(e.target.value)}
          className="input-premium"
          placeholder="Enter cash"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Monthly Burn
        </label>
        <input
          type="number"
          value={monthlyBurn}
          onChange={(e) => setMonthlyBurn(e.target.value)}
          className="input-premium"
          placeholder="Enter burn"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Runway</p>
        <p className="text-2xl font-semibold text-gray-900">
          {result ?? "—"}
        </p>
      </div>
    </div>
  );
}