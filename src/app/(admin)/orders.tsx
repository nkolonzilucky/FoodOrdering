import { FlatList, StyleSheet } from 'react-native';

import OrderListItem from '@/components/OrderListItem';
import orders from '@assets/data/orders';

export default function OrdersScreen() {
  console.log("Hi from app/(user)/two.tsx");
  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrderListItem order={item} />}
      contentContainerStyle={{ margin: 10 }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
