"use client";

import { useState } from "react";

export default function NetProfitCalculator() {
  const [revenue, setRevenue] = useState("");
  const [expenses, setExpenses] = useState("");

  const revenueNum = Number(revenue);
  const expensesNum = Number(expenses);

  let result: string | null = null;

  if (revenue !== "" && expenses !== "") {
    result = (revenueNum - expensesNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Revenue
        </label>
        <input
          type="number"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
          className="input-premium"
          placeholder="Enter revenue"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Total Expenses
        </label>
        <input
          type="number"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
          className="input-premium"
          placeholder="Enter expenses"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Net Profit</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}