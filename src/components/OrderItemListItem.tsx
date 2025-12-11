import { OrderItem } from "@/types";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { defaultPizzaImage } from "./ProductListItem";

type OrderItemProp = {
  orderItem: OrderItem;
};

const OrderItemListItem = ({ orderItem }: OrderItemProp) => {
  return (
    <View style={styles.container}>
      <View style={styles.imagenamepricesize}>
        <Image source={{uri: orderItem.product?.image || defaultPizzaImage}} style={styles.image} resizeMode="contain"/>
        <View style={styles.namepricesize}>
          <Text style={styles.name}>{orderItem.product?.name}</Text>
          <View style={styles.pricesize}>
            <Text style={styles.price}>${orderItem.product?.price.toFixed(2)}</Text>
            <Text style={styles.size}>{orderItem.size}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.quantity}>{orderItem.quantity}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  image: {
    width: 50,
    aspectRatio: 1,
  },
  namepricesize: {
    flex: 1,
    gap: 10,
  },
  imagenamepricesize: {
    flex: 1,
    flexDirection: "row",
    gap: 16,
  },
  name: {
    fontWeight: "bold",
    color: "black",
  },
  price: {
    color: "blue",
    fontWeight: "bold",
  },
  size: {
    color: "gray",
    fontWeight: "semibold",
  },
  pricesize: {
    flex: 1,
    flexDirection: "row",
    gap: 4,
  },
  quantity: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "black",
  },
});

export default OrderItemListItem;
