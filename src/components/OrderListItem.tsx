import { Order } from "@/types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useRouter, useSegments } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

dayjs.extend(relativeTime);

type OrderProps = {
  order: Order;
};

const OrderListItem = ({ order }: OrderProps) => {
  const segments = useSegments();
  const router = useRouter();
  let pathToOrder = "";
  if (segments[0] === "(user)") {
    pathToOrder = `./src/app/(user)/orders/${order.id}`;
    console.log(pathToOrder);
  } else if (segments[0] === "(admin)") {
    pathToOrder = `./src/app/(admin)/orders/${order.id}`;
    console.log(pathToOrder);
  }
  return (
    <Pressable
      style={styles.container}
      onPress={() => router.push(`/(user)/orders/${order.id}`)}
    >
      <View style={styles.OrderNumberAndDurationContainer}>
        <Text style={styles.orderNumber}> Order #{order.id}</Text>
        <Text style={styles.duration}>{dayjs(order.created_at).fromNow()}</Text>
      </View>
      <Text style={styles.status}>{order.status}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  OrderNumberAndDurationContainer: {
    flex: 1,
    gap: 6,
  },
  orderNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  duration: {
    color: "gray",
    fontSize: 16,
  },
  status: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
  },
});
export default OrderListItem;
