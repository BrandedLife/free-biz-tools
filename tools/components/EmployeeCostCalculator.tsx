"use client";

import { useState } from "react";

export default function EmployeeCostCalculator() {
  const [salary, setSalary] = useState("");
  const [benefits, setBenefits] = useState("");
  const [payrollTaxes, setPayrollTaxes] = useState("");

  const salaryNum = Number(salary);
  const benefitsNum = Number(benefits);
  const payrollTaxesNum = Number(payrollTaxes);

  let result: string | null = null;

  if (salary !== "" || benefits !== "" || payrollTaxes !== "") {
    result = (salaryNum + benefitsNum + payrollTaxesNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Base Salary
          </label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="input-premium"
            placeholder="Enter salary"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Benefits
          </label>
          <input
            type="number"
            value={benefits}
            onChange={(e) => setBenefits(e.target.value)}
            className="input-premium"
            placeholder="Enter benefits"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Payroll Taxes
          </label>
          <input
            type="number"
            value={payrollTaxes}
            onChange={(e) => setPayrollTaxes(e.target.value)}
            className="input-premium"
            placeholder="Enter payroll taxes"
          />
        </div>
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Total Employee Cost</p>
        <p className="text-2xl font-semibold text-gray-900">{result ?? "—"}</p>
      </div>
    </div>
  );
}