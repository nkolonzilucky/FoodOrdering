import { Order } from "@/types";
import orders from "@assets/data/orders";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

dayjs.extend(relativeTime);

const OrderDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const order = orders.find((order) => order.id.toString() === id);
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `Order #${id}` }} />
      <View style={styles.detailsContainer}>
        <View style={styles.orderAndTime}>
          <Text style={styles.orderNumber}> Order #{id}</Text>
          <Text style={styles.duration}>
            {dayjs(order?.created_at).fromNow()}
          </Text>
        </View>
        <Text>{order?.status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
  orderAndTime: {
    flex: 1,
    flexDirection: "row",
    gap: 6,
  },
  orderNumber: {
    fontWeight: "bold",
    color: "black",
    fontSize: 16,
  },
  duration: {
    color: "gray",
    fontSize: 12,
  },
  status: {
    fontSize: 500,
    color: "black",
  },
});

export default Order;
