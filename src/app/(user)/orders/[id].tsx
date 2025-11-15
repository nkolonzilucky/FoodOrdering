import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const Order = () => {
    const { id } = useLocalSearchParams();
    console.log('Order #', id)
  return (
    <View>
      <Text>Order</Text>
    </View>
  )
}

export default Order