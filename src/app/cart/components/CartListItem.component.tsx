import { ChangeEvent, useState } from "react";

import useCartStore, { CartItem } from "@/stores/cart.store";
import localeCurrency from "@/utils/localeCurrency";

type CartListItemPorps = {
  item: CartItem;
};

export default function CartListItem({ item }: CartListItemPorps) {
  const { removeItem, editItem } = useCartStore((state) => state);
  const [isEditActive, setIsEditActive] = useState<boolean>(false);
  const [newWeight, setNewWeight] = useState(item.amount);

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewWeight(parseInt(event.target.value));
  };

  const handleEditItem = () => {
    if (newWeight !== 0) {
      editItem(item.project.id, newWeight);
      setIsEditActive(false);
    }
  };

  return (
    <div className="cart-item">
      <div className="cart-item__header">
        <img
          src={item.project.image}
          alt={item.project.name}
        />
      </div>
      <div className="cart-item__details">
        <h3 className="cart-item__title">{item.project.name}</h3>
        <ul className="cart-item__price" role="list">
          <li className="piece-price">
            {localeCurrency(item.project.price_per_ton)}
          </li>
          <li className="weight">
            {isEditActive
              ? (
                <div className="amount-select">
                  <span>max. {item.project.offered_volume_in_tons}</span>

                  <span>{newWeight} tons</span>
                  <input
                    type="range"
                    min={0}
                    value={newWeight}
                    onChange={handleSliderChange}
                    max={item.project.offered_volume_in_tons}
                    step="1"
                  />
                </div>
              )
              : (
                <>
                  <img src="/weight.svg" alt="Weight (tons)" width="15" />
                  <span>{item.amount}</span>
                </>
              )}
          </li>
        </ul>
      </div>
      <div className="cart-item__actions">
        {isEditActive
          ? (
            <button
              className="submit btn-icon"
              onClick={() => handleEditItem()}
            >
              <img src="/check.svg" alt="Accept cart" />
            </button>
          )
          : (
            <button
              className="edit btn-icon"
              onClick={() => setIsEditActive(true)}
            >
              <img src="/edit.svg" alt="Edit cart" />
            </button>
          )}
        <button
          className="remove btn-icon"
          onClick={() => removeItem(item.project.id)}
        >
          <img src="/bin.svg" alt="Remove item" />
        </button>
      </div>
      <div className="total-price">
        {localeCurrency(item.totalPrice)}
      </div>
    </div>
  );
}
