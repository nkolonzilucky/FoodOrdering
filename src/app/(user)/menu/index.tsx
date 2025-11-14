import { ProductListItem } from "@/components/ProductListItem";
import products from "@assets/data/products";
import { FlatList } from "react-native";

export default function MenuScreen() {
  console.log("Hi from app/(user)/menu/index.tsx");
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
}
