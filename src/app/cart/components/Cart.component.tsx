'use client'
import useCartStore, { CartItem } from "@/stores/cart.store";

import "./Cart.styles.css"

export default function Cart() {
  const items = useCartStore((state) => state.items);

  return (
    <main className="cart">
      {items.map((cartItem: CartItem) => (
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
  );
}
