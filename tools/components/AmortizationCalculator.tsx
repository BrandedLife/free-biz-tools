"use client";

import { useState } from "react";

export default function AmortizationCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [annualRate, setAnnualRate] = useState("");
  const [years, setYears] = useState("");

  const loanAmountNum = Number(loanAmount);
  const monthlyRate = Number(annualRate) / 100 / 12;
  const months = Number(years) * 12;

  let monthlyPayment: string | null = null;
  let totalPaid: string | null = null;

  if (loanAmount !== "" && annualRate !== "" && years !== "" && months > 0) {
    let payment = 0;

    if (monthlyRate === 0) {
      payment = loanAmountNum / months;
    } else {
      payment =
        (loanAmountNum *
          monthlyRate *
          Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
    }

    monthlyPayment = payment.toFixed(2);
    totalPaid = (payment * months).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Loan Amount
          </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="input-premium"
            placeholder="Enter loan amount"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Annual Rate %
          </label>
          <input
            type="number"
            value={annualRate}
            onChange={(e) => setAnnualRate(e.target.value)}
            className="input-premium"
            placeholder="Enter rate"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Years
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="input-premium"
            placeholder="Enter years"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="result-premium">
          <p className="text-sm text-gray-600">Monthly Payment</p>
          <p className="text-2xl font-semibold text-gray-900">
            {monthlyPayment ?? "—"}
          </p>
        </div>

        <div className="result-premium">
          <p className="text-sm text-gray-600">Total Paid</p>
          <p className="text-2xl font-semibold text-gray-900">{totalPaid ?? "—"}</p>
        </div>
      </div>
    </div>
  );
}