"use client";

import { useState } from "react";

export default function InventoryToSalesRatioCalculator() {
  const [inventoryValue, setInventoryValue] = useState("");
  const [netSales, setNetSales] = useState("");

  const inventory = Number(inventoryValue);
  const sales = Number(netSales);
  const valid = inventoryValue !== "" && netSales !== "" && inventory >= 0 && sales > 0;

  const ratio = valid ? inventory / sales : null;

  return (
    <div className="rounded-2xl border p-6 bg-white shadow-sm space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Inventory to Sales Ratio Calculator</h2>
        <p className="text-sm text-gray-600 mt-2">
          Compare inventory levels to sales so you can spot overstocking or understocking faster.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium">Inventory value</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={inventoryValue}
            onChange={(e) => setInventoryValue(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="300000"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium">Net sales</span>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={netSales}
            onChange={(e) => setNetSales(e.target.value)}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="150000"
          />
        </label>
      </div>

      <div className="rounded-2xl bg-gray-50 p-6">
        <p className="text-sm text-gray-500">Inventory to sales ratio</p>
        <p className="text-3xl font-semibold">{ratio !== null ? ratio.toFixed(2) : "—"}</p>
      </div>

      <p className="text-sm text-gray-600">
        Formula: <strong>Inventory to Sales Ratio = Inventory Value ÷ Net Sales</strong>
      </p>
    </div>
  );
}
