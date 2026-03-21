"use client";

import { useState } from "react";

export default function EmailClickRateCalculator() {
  const [clicks, setClicks] = useState("");
  const [deliveredEmails, setDeliveredEmails] = useState("");

  const clicksNum = Number(clicks);
  const deliveredEmailsNum = Number(deliveredEmails);

  let clickRate: string | null = null;

  if (clicks !== "" && deliveredEmails !== "" && deliveredEmailsNum > 0) {
    const result = (clicksNum / deliveredEmailsNum) * 100;
    clickRate = `${result.toFixed(2)}%`;
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Email Clicks
        </label>
        <input
          type="number"
          value={clicks}
          onChange={(e) => setClicks(e.target.value)}
          className="input-premium"
          placeholder="Enter email clicks"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Delivered Emails
        </label>
        <input
          type="number"
          value={deliveredEmails}
          onChange={(e) => setDeliveredEmails(e.target.value)}
          className="input-premium"
          placeholder="Enter delivered emails"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Email Click Rate</p>
        <p className="text-2xl font-semibold text-gray-900">
          {clickRate ?? "—"}
        </p>
      </div>
    </div>
  );
}
