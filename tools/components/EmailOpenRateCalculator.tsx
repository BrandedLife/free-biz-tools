"use client";

import { useState } from "react";

export default function EmailOpenRateCalculator() {
  const [opens, setOpens] = useState("");
  const [deliveredEmails, setDeliveredEmails] = useState("");

  const opensNum = Number(opens);
  const deliveredEmailsNum = Number(deliveredEmails);

  let openRate: string | null = null;

  if (opens !== "" && deliveredEmails !== "" && deliveredEmailsNum > 0) {
    const result = (opensNum / deliveredEmailsNum) * 100;
    openRate = `${result.toFixed(2)}%`;
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Opens
        </label>
        <input
          type="number"
          value={opens}
          onChange={(e) => setOpens(e.target.value)}
          className="input-premium"
          placeholder="Enter opens"
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
        <p className="text-sm text-gray-600">Email Open Rate</p>
        <p className="text-2xl font-semibold text-gray-900">
          {openRate ?? "—"}
        </p>
      </div>
    </div>
  );
}
