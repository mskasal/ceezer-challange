"use client";

import { createContext, type ReactNode, useContext, useRef } from "react";
import { type StoreApi, useStore } from "zustand";

import {
  type CartStore,
  createCartStore,
  initCartStore,
} from "@/stores/cart.store";

export const CartStoreContext = createContext<StoreApi<CartStore> | null>(
  null,
);

export interface CartStoreProviderProps {
  children: ReactNode;
}

export const CartStoreProvider = ({
  children,
}: CartStoreProviderProps) => {
  const storeRef = useRef<StoreApi<CartStore>>();
  if (!storeRef.current) {
    storeRef.current = createCartStore(initCartStore());
  }

  return (
    <CartStoreContext.Provider value={storeRef.current}>
      {children}
    </CartStoreContext.Provider>
  );
};

export const useCartStore = <T,>(
  selector: (store: CartStore) => T,
): T => {
  const counterStoreContext = useContext(CartStoreContext);

  if (!counterStoreContext) {
    throw new Error(`useCartStore must be use within CartStoreProvider`);
  }

  return useStore(counterStoreContext, selector);
};
