"use client";

// Cart Context — shared state for RFQ cart across the app
// Used by Navbar (badge + dialog) and /chemicals page (add to cart)

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { type MockChemical } from "@/lib/mock-data";

export interface CartItem {
  chemical: MockChemical;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (chemical: MockChemical) => void;
  removeItem: (chemicalId: string) => void;
  clearCart: () => void;
  itemCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItem = useCallback((chemical: MockChemical) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.chemical.id === chemical.id);
      if (existing) {
        return prev.map((item) =>
          item.chemical.id === chemical.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { chemical, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((chemicalId: string) => {
    setItems((prev) => prev.filter((item) => item.chemical.id !== chemicalId));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearCart,
        itemCount,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
