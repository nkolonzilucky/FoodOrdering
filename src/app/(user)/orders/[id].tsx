import OrderItemListItem from "@/components/OrderItemListItem";
import orders from "@assets/data/orders";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

dayjs.extend(relativeTime);

const OrderDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const order = orders.find((o) => o.id.toString() === id);
  if (!order) return <Text>Order not found</Text>;

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.orderStatus}>
          <Text style={styles.order}>Order# {order.id}</Text>
          <Text style={styles.timestamp}>{dayjs().to(order.created_at)}</Text>
        </View>
        <Text style={styles.status}>{order.status}</Text>
      </View>
      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderItemListItem orderItem={item} />}
        contentContainerStyle={{ gap: 10, margin: 10, borderRadius: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    gap: 10,
  },
  innerContainer: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 10,
    margin: 10,
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

export default OrderDetailsScreen;
