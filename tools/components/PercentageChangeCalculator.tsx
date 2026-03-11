"use client";

import { useState } from "react";

export default function PercentageChangeCalculator() {
  const [oldValue, setOldValue] = useState("");
  const [newValue, setNewValue] = useState("");

  const oldValueNum = Number(oldValue);
  const newValueNum = Number(newValue);

  let result: string | null = null;

  if (oldValue !== "" && newValue !== "" && oldValueNum !== 0) {
    result = `${(((newValueNum - oldValueNum) / oldValueNum) * 100).toFixed(2)}%`;
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Old Value
          </label>
          <input
            type="number"
            value={oldValue}
            onChange={(e) => setOldValue(e.target.value)}
            className="input-premium"
            placeholder="Enter old value"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            New Value
          </label>
          <input
            type="number"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            className="input-premium"
            placeholder="Enter new value"
          />
        </div>
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Percentage Change</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}