import Cart from "./components/Cart.component";
import CartSummary from "./components/CartSummary.component";

import "./page.css";

export default function CartPage() {
  return (
    <div className="page">
      <div className="page__header">
        <nav className="page__navigation container">
          <div className="logo">
            <a href="/">
              <img src="/logo.svg" />
            </a>
          </div>
        </nav>
      </div>

      <div className="page__body container">
        <div className="page__body--header">
          <h1>Cart</h1>
          <p>Cart description</p>
        </div>
        <div className="layout">
          <Cart />
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
