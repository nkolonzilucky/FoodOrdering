import { useAdminOrderList } from "@/api/orders";
import OrderListItem from "@/components/OrderListItem";
import React from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

const OrdersTab = () => {
  const {
    data: orders,
    isLoading,
    error,
  } = useAdminOrderList({ archived: false });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch orders</Text>;
  }

  return (
    <View>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
        contentContainerStyle={{ margin: 10 }}
      />
    </View>
  );
};

export default OrdersTab;
