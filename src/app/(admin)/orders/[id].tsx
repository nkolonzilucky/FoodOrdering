import OrderItemListItem from "@/components/OrderItemListItem";
import OrderListItem from "@/components/OrderListItem";
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

  console.log(order.order_items);
  return (
    <View style={styles.outerContainer}>
      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderItemListItem orderItem={item} />}
        contentContainerStyle={{ gap: 10, margin: 10, borderRadius: 20 }}
        ListHeaderComponent={() => <OrderListItem order={order} />}
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
