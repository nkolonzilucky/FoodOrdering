import { CartItem, PizzaSize, Product } from "@/types";
import { createContext, PropsWithChildren, useContext } from "react";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: PizzaSize) => void;
};

const CartContext = createContext({});

const CartProvider = ({ children }: PropsWithChildren) => {
  return (
    <CartContext.Provider value={{ items: [1, 2, 3], onAddItem: () => {} }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
