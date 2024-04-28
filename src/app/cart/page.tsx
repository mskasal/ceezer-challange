"use client";
import useCartStore from "@/stores/cart.store";
import "./page.css";

export default function Cart() {
  const cart = useCartStore((state) => state);

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
          <main className="cart">
            {cart.items.map((cartItem) => (
              <div className="cart-item" key={`c-k-${cartItem.project.id}`}>
                <div className="cart-item__header">
                  <img
                    src={cartItem.project.image}
                    alt={cartItem.project.name}
                  />
                </div>
                <div className="cart-item__details">
                  <h3 className="cart-item__title">{cartItem.project.name}</h3>
                  <ul className="cart-item__price" role="list">
                    <li className="piece-price">
                      {cartItem.project.price_per_ton}
                    </li>
                    <li className="weight">
                      <img src="/weight.svg" alt="Weight (tons)" width="15" />
                      <span>{cartItem.amount}</span>
                      <input
                        type="range"
                        max="100"
                        step="1"
                        hidden
                      />
                    </li>
                  </ul>
                </div>
                <div className="cart-item__actions">
                  <button className="edit btn-icon">
                    <img src="/edit.svg" alt="Edit cart" />
                  </button>
                  <button className="remove btn-icon">
                    <img src="/bin.svg" alt="Remove item" />
                  </button>
                </div>
                <div className="total-price">{cartItem.totalPrice}</div>
              </div>
            ))}
          </main>
          <aside>
            <div className="cart-summary">
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
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
