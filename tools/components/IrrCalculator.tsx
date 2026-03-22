"use client";

import { useState } from "react";

export default function IrrCalculator() {
  const [cashFlowYear1, setCashFlowYear1] = useState("");
  const [cashFlowYear2, setCashFlowYear2] = useState("");
  const [cashFlowYear3, setCashFlowYear3] = useState("");
  const [initialInvestment, setInitialInvestment] = useState("");

  const cashFlowYear1Num = Number(cashFlowYear1);
  const cashFlowYear2Num = Number(cashFlowYear2);
  const cashFlowYear3Num = Number(cashFlowYear3);
  const initialInvestmentNum = Number(initialInvestment);

  let approximateIrr: string | null = null;

  if (
    cashFlowYear1 !== "" &&
    cashFlowYear2 !== "" &&
    cashFlowYear3 !== "" &&
    initialInvestment !== "" &&
    initialInvestmentNum > 0
  ) {
    const totalReturn = cashFlowYear1Num + cashFlowYear2Num + cashFlowYear3Num;
    const ratio = totalReturn / initialInvestmentNum;
    const irr = (Math.pow(ratio, 1 / 3) - 1) * 100;
    approximateIrr = `${irr.toFixed(2)}%`;
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
        <label className="mb-1 block text-sm font-medium text-gray-700">Initial Investment</label>
        <input type="number" value={initialInvestment} onChange={(e) => setInitialInvestment(e.target.value)} className="input-premium" placeholder="Enter initial investment" />
      </div>
      <div className="result-premium">
        <p className="text-sm text-gray-600">Approximate IRR</p>
        <p className="text-2xl font-semibold text-gray-900">{approximateIrr ?? "—"}</p>
      </div>
    </div>
  );
}
