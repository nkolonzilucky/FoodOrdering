import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CreateProductScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CreateProductScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
});

export default CreateProductScreen;
