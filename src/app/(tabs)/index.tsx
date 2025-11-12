import Colors from "@/constants/Colors";
import { Image, StyleSheet, Text, View } from "react-native";
import products from "../../../assets/data/products";

const product = products[0];

const ProductListItem = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default function TabOneScreen() {
  return (
    <View>
      <ProductListItem />
      <ProductListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    aspectRatio: 1, //Height will be auto calculated based on the width, 1 means squre. 2/1 means height is half the width
  },
});
