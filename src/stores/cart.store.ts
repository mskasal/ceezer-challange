import { create } from "zustand";

import { Project } from "./projects.store";

export interface CartItem {
  project: Project;
  amount: number;
  totalPrice: number;
}

type CartState = {
  items: CartItem[];
  cartPrice: number;
  vat: number;
  vatPrice: number;
  totalCartPrice: number;
};

type CartActions = {
  removeItem: (id: number) => void;
  addItem: (project: Project, amount: number) => void;
  editItem: (id: number, amount: number) => void;
};

const useCartStore = create<CartState & CartActions>((set) => ({
  items: [],
  cartPrice: 0,
  vat: 0.12,
  vatPrice: 0,
  totalCartPrice: 0,
  addItem(project: Project, amount: number) {
    const totalPrice = amount * project.price_per_ton;

    const newCartItem = {
      project,
      totalPrice,
      amount,
    };
    set((state) => ({
      items: [...state.items, newCartItem],
      cartPrice: state.cartPrice + totalPrice,
      totalCartPrice: ((state.cartPrice + totalPrice) * state.vat) +
        state.cartPrice,
      vatPrice: (state.cartPrice + totalPrice) * state.vat,
    }));
  },
  removeItem(id: number) {
    set((state) => {
      const cartItem = state.items.find((item) => item.project.id === id);
      if (cartItem === undefined) {
        console.error("Can't fint the item. Your logic is wrong");
        return state;
      }

      return {
        items: [...state.items.filter((item) => item.project.id !== id)],
        cartPrice: state.cartPrice - cartItem.totalPrice,
        totalCartPrice: ((state.cartPrice - cartItem.totalPrice) * state.vat) +
          state.cartPrice,
        vatPrice: (state.cartPrice - cartItem.totalPrice) * state.vat,
      };
    });
  },
  editItem(id: number, amount: number) {
    set((state) => {
      const cartItem = state.items.find((item: CartItem) =>
        item.project.id === id
      );
      if (cartItem === undefined) {
        console.error("Can't fint the item. Your logic is wrong");
        return state;
      }
      const totalPrice = amount * cartItem.project.price_per_ton;

      const newCartItem = {
        ...cartItem,
        amount,
        totalPrice,
      };

      return {
        items: [...state.items, newCartItem],
        cartPrice: state.cartPrice + totalPrice,
        totalCartPrice: ((state.cartPrice + totalPrice) * state.vat) +
          state.cartPrice,
        vatPrice: (state.cartPrice + totalPrice) * state.vat,
      };
    });
  },
}));

export default useCartStore;
