"use client";

import { useState } from "react";

export default function LandingPageConversionCalculator() {
  const [landingPageConversions, setLandingPageConversions] = useState("");
  const [landingPageVisitors, setLandingPageVisitors] = useState("");

  const landingPageConversionsNum = Number(landingPageConversions);
  const landingPageVisitorsNum = Number(landingPageVisitors);

  let conversionRate: string | null = null;

  if (landingPageConversions !== "" && landingPageVisitors !== "" && landingPageVisitorsNum > 0) {
    const result = (landingPageConversionsNum / landingPageVisitorsNum) * 100;
    conversionRate = `${result.toFixed(2)}%`;
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Landing Page Conversions</label>
        <input type="number" value={landingPageConversions} onChange={(e) => setLandingPageConversions(e.target.value)} className="input-premium" placeholder="Enter landing page conversions" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Landing Page Visitors</label>
        <input type="number" value={landingPageVisitors} onChange={(e) => setLandingPageVisitors(e.target.value)} className="input-premium" placeholder="Enter landing page visitors" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Landing Page Conversion Rate</p>
        <p className="text-2xl font-semibold text-gray-900">{conversionRate ?? "—"}</p>
      </div>
    </div>
  );
}
