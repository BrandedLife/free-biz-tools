"use client";

import { useState } from "react";

export default function RevenueForecastCalculator() {
  const [currentRevenue, setCurrentRevenue] = useState("");
  const [monthlyGrowthRate, setMonthlyGrowthRate] = useState("");
  const [forecastMonths, setForecastMonths] = useState("");

  const revenue = Number(currentRevenue);
  const growth = Number(monthlyGrowthRate);
  const months = Number(forecastMonths);

  const valid = currentRevenue !== "" && monthlyGrowthRate !== "" && forecastMonths !== "" && revenue >= 0 && months >= 1;

  const forecastRevenue = valid ? revenue * Math.pow(1 + growth / 100, months) : null;
  const revenueIncrease = valid ? forecastRevenue! - revenue : null;

  return (
    <div className="rounded-2xl border p-6 bg-white shadow-sm space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Revenue Forecast Calculator</h2>
        <p className="text-sm text-gray-600 mt-2">
          Forecast future revenue using your current revenue and expected monthly growth rate.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <label className="space-y-2">
          <span className="text-sm font-medium">Current monthly revenue</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={currentRevenue}
            onChange={(e) => setCurrentRevenue(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="100000"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium">Monthly growth rate (%)</span>
          <input
            type="number"
            step="0.01"
            value={monthlyGrowthRate}
            onChange={(e) => setMonthlyGrowthRate(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="8"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium">Forecast period (months)</span>
          <input
            type="number"
            min="1"
            step="1"
            value={forecastMonths}
            onChange={(e) => setForecastMonths(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="12"
          />
        </label>
      </div>

      <div className="rounded-2xl bg-gray-50 p-6 space-y-3">
        <div>
          <p className="text-sm text-gray-500">Forecast revenue</p>
          <p className="text-3xl font-semibold">{forecastRevenue !== null ? forecastRevenue.toFixed(2) : "—"}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Revenue increase</p>
          <p className="text-3xl font-semibold">{revenueIncrease !== null ? revenueIncrease.toFixed(2) : "—"}</p>
        </div>
      </div>

      <p className="text-sm text-gray-600">
        Formula: <strong>Forecast Revenue = Current Revenue × (1 + Growth Rate)^Months</strong>
      </p>
    </div>
  );
}
