"use client";

import { useState } from "react";

export default function NpvCalculator() {
  const [cashFlowYear1, setCashFlowYear1] = useState("");
  const [cashFlowYear2, setCashFlowYear2] = useState("");
  const [cashFlowYear3, setCashFlowYear3] = useState("");
  const [discountRate, setDiscountRate] = useState("");
  const [initialInvestment, setInitialInvestment] = useState("");

  const cashFlowYear1Num = Number(cashFlowYear1);
  const cashFlowYear2Num = Number(cashFlowYear2);
  const cashFlowYear3Num = Number(cashFlowYear3);
  const discountRateNum = Number(discountRate) / 100;
  const initialInvestmentNum = Number(initialInvestment);

  let npv: string | null = null;

  if (
    cashFlowYear1 !== "" &&
    cashFlowYear2 !== "" &&
    cashFlowYear3 !== "" &&
    discountRate !== "" &&
    initialInvestment !== ""
  ) {
    const result =
      cashFlowYear1Num / Math.pow(1 + discountRateNum, 1) +
      cashFlowYear2Num / Math.pow(1 + discountRateNum, 2) +
      cashFlowYear3Num / Math.pow(1 + discountRateNum, 3) -
      initialInvestmentNum;

    npv = result.toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Cash Flow Year 1</label>
        <input type="number" value={cashFlowYear1} onChange={(e) => setCashFlowYear1(e.target.value)} className="input-premium" placeholder="Enter year 1 cash flow" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Cash Flow Year 2</label>
        <input type="number" value={cashFlowYear2} onChange={(e) => setCashFlowYear2(e.target.value)} className="input-premium" placeholder="Enter year 2 cash flow" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Cash Flow Year 3</label>
        <input type="number" value={cashFlowYear3} onChange={(e) => setCashFlowYear3(e.target.value)} className="input-premium" placeholder="Enter year 3 cash flow" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Discount Rate (%)</label>
        <input type="number" value={discountRate} onChange={(e) => setDiscountRate(e.target.value)} className="input-premium" placeholder="Enter discount rate" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Initial Investment</label>
        <input type="number" value={initialInvestment} onChange={(e) => setInitialInvestment(e.target.value)} className="input-premium" placeholder="Enter initial investment" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">NPV</p>
        <p className="text-2xl font-semibold text-gray-900">{npv ?? "—"}</p>
      </div>
    </div>
  );
}
