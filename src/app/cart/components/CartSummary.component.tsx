"use client";

import useCartStore from "@/stores/cart.store";

import localeCurrency from "@/utils/localeCurrency";

import "./CartSummary.styles.css";

export default function CartSummary() {
  const cart = useCartStore((state) => state);

  return (
    <aside className="cart-summary">
      <div className="cart-s-wrapper">
        <div className="cart-summary__header">
          <h2>Cart summary</h2>
        </div>
        <div className="cart-summary__price">
          <div className="total">
            <h4>{localeCurrency(cart.cartPrice)}</h4>
          </div>
        </div>
        <div className="cart-checkout">
          <button>Checkout</button>
        </div>
      </div>
    </aside>
  );
}
