"use client";

import { useState } from "react";

export default function PickingPackingCostCalculator() {
  const [ordersPickedPacked, setOrdersPickedPacked] = useState("");
  const [pickPackCostPerOrder, setPickPackCostPerOrder] = useState("");

  const ordersPickedPackedNum = Number(ordersPickedPacked);
  const pickPackCostPerOrderNum = Number(pickPackCostPerOrder);

  let pickingPackingCost: string | null = null;

  if (ordersPickedPacked !== "" && pickPackCostPerOrder !== "") {
    pickingPackingCost = (ordersPickedPackedNum * pickPackCostPerOrderNum).toFixed(2);
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Orders Picked and Packed</label>
        <input type="number" value={ordersPickedPacked} onChange={(e) => setOrdersPickedPacked(e.target.value)} className="input-premium" placeholder="Enter orders picked and packed" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Pick and Pack Cost Per Order</label>
        <input type="number" value={pickPackCostPerOrder} onChange={(e) => setPickPackCostPerOrder(e.target.value)} className="input-premium" placeholder="Enter pick and pack cost per order" />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Picking and Packing Cost</p>
        <p className="text-2xl font-semibold text-gray-900">{pickingPackingCost ?? "—"}</p>
      </div>
    </div>
  );
}
