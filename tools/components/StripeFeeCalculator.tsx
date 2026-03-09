"use client";

import { useState } from "react";

export default function StripeFeeCalculator() {
  const [paymentAmount, setPaymentAmount] = useState("");
  const [feePercent, setFeePercent] = useState("2.9");
  const [fixedFee, setFixedFee] = useState("0.30");

  const paymentAmountNum = Number(paymentAmount);
  const feePercentNum = Number(feePercent);
  const fixedFeeNum = Number(fixedFee);

  let fee: string | null = null;
  let net: string | null = null;

  if (paymentAmount !== "" && paymentAmountNum >= 0) {
    const totalFee = (paymentAmountNum * feePercentNum) / 100 + fixedFeeNum;
    const netAmount = paymentAmountNum - totalFee;

    fee = totalFee.toFixed(2);
    net = netAmount.toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Payment Amount
        </label>
        <input
          type="number"
          value={paymentAmount}
          onChange={(e) => setPaymentAmount(e.target.value)}
          className="input-premium"
          placeholder="Enter payment amount"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Fee Percentage
          </label>
          <input
            type="number"
            value={feePercent}
            onChange={(e) => setFeePercent(e.target.value)}
            className="winput-premium"
            placeholder="2.9"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Fixed Fee
          </label>
          <input
            type="number"
            value={fixedFee}
            onChange={(e) => setFixedFee(e.target.value)}
            className="input-premium"
            placeholder="0.30"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="result-premium">
          <p className="text-sm text-gray-600">Stripe Fee</p>
          <p className="text-2xl font-semibold text-gray-900">{fee ?? "—"}</p>
        </div>

        <div className="result-premium">
          <p className="text-sm text-gray-600">Net Payout</p>
          <p className="text-2xl font-semibold text-gray-900">{net ?? "—"}</p>
        </div>
      </div>
    </div>
  );
}