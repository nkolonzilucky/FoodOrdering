import { Order } from "@/types";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type OrderProps = {
    order: Order,
}

const OrderListItem = ({order}: OrderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.OrderNumberAndDurationContainer}>
        <Text style={styles.orderNumber}> Order #{order.id}</Text>
        <Text style={styles.duration}>{order.created_at} hours ago</Text>
      </View>
      <Text style={styles.status}>{order.status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  OrderNumberAndDurationContainer: {
    flex: 1,
    gap: 10,
  },
  orderNumber: {
    fontSize: 20,
    fontWeight: "black",
    color: "black",
  },
  duration: {
    color: "gray",
    fontSize: 16,
  },
  status: {
    color: "black",
  },
});
export default OrderListItem;
