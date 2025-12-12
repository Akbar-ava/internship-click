import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
};

export type CartItemType = Product & { qty: number };

type CartContextValue = {
  items: CartItemType[];
  addToCart: (p: Product) => void;
  removeFromCart: (id: number) => void;
  totalCount: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextValue | null>(null);

const LS_KEY = "cart_v1";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItemType[]>(() => {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? (JSON.parse(raw) as CartItemType[]) : [];
  });

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = (p: Product) => {
    setItems((prev) => {
      const found = prev.find((x) => x.id === p.id);
      if (found) return prev.map((x) => (x.id === p.id ? { ...x, qty: x.qty + 1 } : x));
      return [...prev, { ...p, qty: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setItems((prev) => prev.filter((x) => x.id !== id));
  };

  const totalCount = useMemo(() => items.reduce((s, x) => s + x.qty, 0), [items]);
  const totalPrice = useMemo(() => items.reduce((s, x) => s + x.qty * x.price, 0), [items]);

  const value = useMemo(
    () => ({ items, addToCart, removeFromCart, totalCount, totalPrice }),
    [items, totalCount, totalPrice]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};
