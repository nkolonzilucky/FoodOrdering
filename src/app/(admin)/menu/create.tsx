import Button from "@/components/Button";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const CreateProductScreen = () => {
  const onCreate = () => {
    console.log("Creating product");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>create</Text>
      <TextInput placeholder="Name" style={styles.input} />
      <Text style={styles.label}>price ($)</Text>
      <TextInput
        placeholder="9.99"
        style={styles.input}
        keyboardType="numeric"
      />
      <Button onPress={onCreate} text="Create" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    gap: 10,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  label: {
    color: "gray",
    fontSize: 16,
  },
});

export default CreateProductScreen;
