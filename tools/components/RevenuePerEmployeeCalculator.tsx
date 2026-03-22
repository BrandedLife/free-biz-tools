"use client";

import { useState } from "react";

export default function RevenuePerEmployeeCalculator() {
  const [revenue, setRevenue] = useState("");
  const [employees, setEmployees] = useState("");

  const revenueNum = Number(revenue);
  const employeesNum = Number(employees);

  let result: string | null = null;

  if (revenue !== "" && employees !== "" && employeesNum > 0) {
    result = (revenueNum / employeesNum).toFixed(2);
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
          Employees
        </label>
        <input
          type="number"
          value={employees}
          onChange={(e) => setEmployees(e.target.value)}
          className="input-premium"
          placeholder="Enter employees"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Revenue per Employee</p>
        <p className="text-2xl font-semibold text-gray-900">
          {result ?? "—"}
        </p>
      </div>
    </div>
  );
}