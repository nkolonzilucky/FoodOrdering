import { Order } from "@/types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

dayjs.extend(relativeTime);

type OrderListItemProps = {
  order: Order;
};

const OrderListItem = ({ order }: OrderListItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.orderStatus}>
        <Text style={styles.order}>Order# {order.id}</Text>
        <Text style={styles.timestamp}>{dayjs().to(order.created_at)}</Text>
      </View>
      <Text style={styles.status}>{order.status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
  },
  orderStatus: {
    flex: 1,
    gap: 6,
  },
  order: {
    fontWeight: "bold",
    color: "black",
  },
  timestamp: {
    color: "gray",
  },
  status: {
    fontWeight: "600",
  },
});
export default OrderListItem;
