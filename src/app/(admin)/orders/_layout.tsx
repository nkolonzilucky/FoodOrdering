import { Stack } from 'expo-router';
import React from 'react';

const OrdersStack = () => {
  return (
    <Stack>
      <Stack.Screen   name='index' options={{title: 'Orders'}}/>
    </Stack>
  );
}

export default OrdersStack;