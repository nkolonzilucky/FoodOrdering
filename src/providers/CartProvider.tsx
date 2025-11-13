import { CartItem, PizzaSize, Product } from "@/types";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: PizzaSize) => void;
};

const CartContext = createContext<CartType>({});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const addItem = (product: Product, size: PizzaSize) => {};

  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
