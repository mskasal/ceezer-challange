"use client";

import useCartStore from "@/stores/cart.store";

export default function NavCart() {
  const { items, totalCartPrice } = useCartStore((state) => state);
  return (
    <div className="nav-cart">
      <a href="/cart">
        <b>Cart total</b>
        <small>
          <b>{totalCartPrice}</b>
          {items.length} items
        </small>
      </a>
    </div>
  );
}
