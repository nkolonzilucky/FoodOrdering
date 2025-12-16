import { Stack } from 'expo-router';
import React from 'react';

const OrdersStack = () => {
  return (
    <Stack>
      <Stack.Screen name="list" options={{ headerShown: false }} />
      <Stack.Screen name="[id]" options={{ title: "Orders Details" }} />
    </Stack>
  );
}

export default OrdersStack;