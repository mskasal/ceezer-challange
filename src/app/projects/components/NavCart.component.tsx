"use client";

import { useCartStore } from "@/providers/cart-store.provider";
import localeCurrency from "@/utils/localeCurrency";

export default function NavCart() {
  const { items, cartPrice } = useCartStore((state) => state);
  return (
    <div className="nav-cart">
      <a href="/cart">
        <b>Cart total</b>
        <small>
          <b>{localeCurrency(cartPrice)}</b>
          &#x2022;
          <span>
            {items.length} items
          </span>
        </small>
      </a>
    </div>
  );
}
