import { CartContext } from "@/providers/CartProvider";
import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { Platform, Text, View } from "react-native";

const CartScreen = () => {
  const { items } = useContext(CartContext);
  return (
    <View>
      <Text>Cart Items length: {items.length}</Text>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
