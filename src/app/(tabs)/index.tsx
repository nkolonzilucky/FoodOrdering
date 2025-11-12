import { ProductListItem } from "@/components/ProductListItem";
import products from "@assets/data/products";
import { FlatList } from "react-native";

export default function MenuScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
    />
  );
}
