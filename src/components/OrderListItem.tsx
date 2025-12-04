import { Order } from "@/types";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type OrderListItemProps = {
  order: Order;
};

const OrderListItem = ({ order }: OrderListItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.orderStatus}>
        <Text style={styles.order}>Order# {order.id}</Text>
        <Text style={styles.timestamp}>{order.created_at}</Text>
      </View>
      <Text>{order.status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 10,
        marginBottom: 10,
    },
    orderStatus: {
        flex: 1,
        gap:6
    },
    order: {
        fontWeight: 'bold',
        color: 'black'
    },
    timestamp: {
        color: 'gray'
    }
})
export default OrderListItem;
