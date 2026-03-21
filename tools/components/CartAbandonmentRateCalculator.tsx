"use client";

import { useState } from "react";

export default function CartAbandonmentRateCalculator() {
  const [completedOrders, setCompletedOrders] = useState("");
  const [shoppingCartsCreated, setShoppingCartsCreated] = useState("");

  const completedOrdersNum = Number(completedOrders);
  const shoppingCartsCreatedNum = Number(shoppingCartsCreated);

  let cartAbandonmentRate: string | null = null;

  if (
    completedOrders !== "" &&
    shoppingCartsCreated !== "" &&
    shoppingCartsCreatedNum > 0
  ) {
    const rate =
      ((shoppingCartsCreatedNum - completedOrdersNum) / shoppingCartsCreatedNum) * 100;
    cartAbandonmentRate = `${rate.toFixed(2)}%`;
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Completed Orders
        </label>
        <input
          type="number"
          value={completedOrders}
          onChange={(e) => setCompletedOrders(e.target.value)}
          className="input-premium"
          placeholder="Enter completed orders"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Shopping Carts Created
        </label>
        <input
          type="number"
          value={shoppingCartsCreated}
          onChange={(e) => setShoppingCartsCreated(e.target.value)}
          className="input-premium"
          placeholder="Enter shopping carts created"
        />
      </div>

      <div className="result-premium">
        <p className="text-sm text-gray-600">Cart Abandonment Rate</p>
        <p className="text-2xl font-semibold text-gray-900">
          {cartAbandonmentRate ?? "—"}
        </p>
      </div>
    </div>
  );
}
