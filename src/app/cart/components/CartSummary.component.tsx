'use client'
import useCartStore from "@/stores/cart.store";

export default function CartSummary() {
  const cart = useCartStore((state) => state);

  return (
    <aside className="cart-summary">
      <div className="cart-summary--header">
        <h2>Cart summary</h2>
        <small>Item count</small>
      </div>
      <div className="cart-summary--price">
        <ul className="calculation" role="list">
          <li>
            <b>Projects cost:</b>
            <span>{cart.cartPrice}</span>
          </li>
          <li>
            <b>VAT %{cart.vat * 100}</b>
            <span>{cart.vatPrice}</span>
          </li>
        </ul>
        <div className="total">
          <h4>{cart.totalCartPrice}</h4>
        </div>
      </div>
      <div className="cart-checkout">
        <button>Checkout</button>
      </div>
    </aside>
  );
}
