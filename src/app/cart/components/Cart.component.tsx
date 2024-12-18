"use client";

import { CartItem } from "@/stores/cart.store";
import { useCartStore } from "@/providers/cart-store.provider";

import CartListItem from "./CartListItem.component";

import "./Cart.styles.css";

export default function Cart() {
  const { items } = useCartStore((state) => state);

  if (!items.length) {
    return <i>Such empty.</i>;
  }

  return (
    <main className="cart">
      {items.map((cartItem: CartItem) => (
        <CartListItem key={`c-i-${cartItem.project.id}`} item={cartItem} />
      ))}
    </main>
  );
}
