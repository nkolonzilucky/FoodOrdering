import { useInsertOrderItems } from "@/api/order_items";
import { useInsertOrder } from "@/api/orders";
import { CartItem, PizzaSize, Tables } from "@/types";
import { randomUUID } from "expo-crypto";
import { useRouter } from "expo-router";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type CartType = {
  items: CartItem[];
  addItem: (product: Tables<"products">, size: PizzaSize) => void;
  updateQuantity: (itemId: CartItem["id"], amount: -1 | 1) => void;
  total: number;
  checkout: () => void;
};

const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  total: 0,
  checkout: () => {},
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const { mutate: insertOrder } = useInsertOrder();
  const { mutate: insertOrderItems } = useInsertOrderItems();

  const router = useRouter();

  const addItem = (product: Tables<"products">, size: PizzaSize) => {
    const existingItem = items.find(
      (item) => item.product.id === product.id && item.size === size
    );

    if (existingItem) {
      updateQuantity(existingItem.id, 1);
    } else {
      const newCartItem: CartItem = {
        id: randomUUID(),
        product,
        product_id: product.id,
        size,
        quantity: 1,
      };
      setItems([newCartItem, ...items]);
    }
  };

  const updateQuantity = (itemId: CartItem["id"], amount: -1 | 1) => {
    const updatedItems = items.map((item) =>
      item.id !== itemId ? item : { ...item, quantity: item.quantity + amount }
    );
    setItems(updatedItems.filter((item) => item.quantity > 0));
  };

  const total = items
    .map((item) => item.product.price * item.quantity)
    .reduce((sum, price) => sum + price, 0);

  const clearCart = () => {
    setItems([]);
  };
  const checkout = () => {
    insertOrder(
      { total },
      {
        onSuccess: saveOrderItems,
      }
    );
  };

  const saveOrderItems = (order: Tables<"orders">) => {
    const orderItems = items.map((cartItem) => ({
      order_id: order.id,
      product_id: cartItem.product_id,
      quantity: cartItem.quantity,
      size: cartItem.size,
    }));

    insertOrderItems(orderItems, {
      onSuccess: () => {
        clearCart();
        router.push(`/(user)/orders/${order.id}`);
      },
    });
  };

  return (
    <CartContext.Provider
      value={{ items, addItem, updateQuantity, total, checkout }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
