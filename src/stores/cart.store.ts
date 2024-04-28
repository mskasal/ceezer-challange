import { create } from "zustand";

import { persist } from "zustand/middleware";
import { Project } from "./projects.store";

export interface CartItem {
  project: Project;
  amount: number;
  totalPrice: number;
}

type CartState = {
  items: CartItem[];
  cartPrice: number;
};

type CartActions = {
  removeItem: (id: number) => void;
  addItem: (project: Project, amount: number) => void;
  editItem: (id: number, amount: number) => void;
};

const useCartStore = create<CartState & CartActions>()(persist((set) => ({
  items: [],
  cartPrice: 0,
  addItem(project: Project, amount: number) {
    const totalPrice = amount * project.price_per_ton;
    const newCartItem = {
      project,
      totalPrice,
      amount,
    };

    set((state) => {
      const existingItem = state.items.find((item) =>
        item.project.id === project.id
      );
      if (existingItem) {
        return state;
      }
      return {
        items: [...state.items, newCartItem],
        cartPrice: state.cartPrice + totalPrice,
      };
    });
  },
  removeItem(id: number) {
    set((state) => {
      const cartItem = state.items.find((item) => item.project.id === id);

      if (cartItem === undefined) {
        console.log("Can't fint the item. Your logic is wrong");
        return state;
      }

      return {
        items: [...state.items.filter((item) => item.project.id !== id)],
        cartPrice: state.cartPrice - cartItem.totalPrice,
      };
    });
  },
  editItem(id: number, amount: number) {
    set((state) => {
      const cartItem = state.items.find((item: CartItem) =>
        item.project.id === id
      );

      if (cartItem === undefined) {
        console.log("Can't fint the item. Your logic is wrong");
        return state;
      }
      const totalPrice = amount * cartItem.project.price_per_ton;

      const newCartItem = {
        ...cartItem,
        amount,
        totalPrice,
      };

      return {
        items: [
          ...state.items.filter((item) => item.project.id !== id),
          newCartItem,
        ],
        cartPrice: state.cartPrice + totalPrice - cartItem.totalPrice,
      };
    });
  },
}), { name: "cart-store", skipHydration: false }));

export default useCartStore;
