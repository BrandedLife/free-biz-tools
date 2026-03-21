"use client";

import { useState } from "react";

export default function UnsubscribeRateCalculator() {
  const [unsubscribes, setUnsubscribes] = useState("");
  const [deliveredEmails, setDeliveredEmails] = useState("");

  const unsubscribesNum = Number(unsubscribes);
  const deliveredEmailsNum = Number(deliveredEmails);

  let unsubscribeRate: string | null = null;

  if (unsubscribes !== "" && deliveredEmails !== "" && deliveredEmailsNum > 0) {
    const result = (unsubscribesNum / deliveredEmailsNum) * 100;
    unsubscribeRate = `${result.toFixed(2)}%`;
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Unsubscribes
        </label>
        <input
          type="number"
          value={unsubscribes}
          onChange={(e) => setUnsubscribes(e.target.value)}
          className="input-premium"
          placeholder="Enter unsubscribes"
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
        <p className="text-sm text-gray-600">Unsubscribe Rate</p>
        <p className="text-2xl font-semibold text-gray-900">
          {unsubscribeRate ?? "—"}
        </p>
      </div>
    </div>
  );
}
