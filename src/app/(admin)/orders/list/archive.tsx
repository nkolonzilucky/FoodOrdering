import OrderListItem from '@/components/OrderListItem'
import orders from '@assets/data/orders'
import React from 'react'
import { FlatList, View } from 'react-native'

const OrdersTab = () => {
  return (
    <View>
      <FlatList data={orders} renderItem={({item}) => <OrderListItem order={item}/>} contentContainerStyle={{ margin:10}}  />
    </View>
  )
}

export default OrdersTab