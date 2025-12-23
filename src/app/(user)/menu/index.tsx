import { ProductListItem } from "@/components/ProductListItem";
import { supabase } from "@/lib/supabase";
import products from "@assets/data/products";
import { useEffect } from "react";
import { FlatList } from "react-native";

export default function MenuScreen() {
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");
      console.log("fetchProduct", data);
    };
    fetchProducts();
  }, []);
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
