import Button from "@/components/Button";
import { Link, Stack } from "expo-router";
import React from "react";
import { View } from "react-native";

const index = () => {
  console.log("Hi from app/index.tsx");
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
      <Stack.Screen options={{ headerShown: false }} />
      <Link href={"/(user)"} asChild>
        <Button text="User" />
      </Link>
      <Link href={"/(admin)"} asChild>
        <Button text="Admin" />
      </Link>
      <Link href={"/(auth)/sign-in"} asChild>
        <Button text="Sign In" />
      </Link>
    </View>
  );
};

export default index;
