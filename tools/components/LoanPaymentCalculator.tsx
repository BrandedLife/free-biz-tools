"use client";

import { useState } from "react";

export default function LoanPaymentCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [annualInterestRate, setAnnualInterestRate] = useState("");
  const [loanTermYears, setLoanTermYears] = useState("");

  const principal = Number(loanAmount);
  const annualRate = Number(annualInterestRate);
  const years = Number(loanTermYears);

  let monthlyPayment: string | null = null;

  if (
    loanAmount !== "" &&
    annualInterestRate !== "" &&
    loanTermYears !== "" &&
    principal > 0 &&
    annualRate >= 0 &&
    years > 0
  ) {
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = years * 12;

    if (monthlyRate === 0) {
      monthlyPayment = (principal / numberOfPayments).toFixed(2);
    } else {
      const payment =
        (principal *
          monthlyRate *
          Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

      monthlyPayment = payment.toFixed(2);
    }
  }

  return (
    <div className="space-y-5">
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

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            value={annualInterestRate}
            onChange={(e) => setAnnualInterestRate(e.target.value)}
            className="input-premium"
            placeholder="Enter annual rate"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Loan Term (Years)
          </label>
          <input
            type="number"
            value={loanTermYears}
            onChange={(e) => setLoanTermYears(e.target.value)}
            className="input-premium"
            placeholder="Enter years"
          />
        </div>
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Estimated Monthly Payment</p>
        <p className="text-2xl font-semibold text-gray-900">
          {monthlyPayment ?? "—"}
        </p>
      </div>
    </div>
  );
}