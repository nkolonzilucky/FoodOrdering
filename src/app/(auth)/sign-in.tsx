import Button from "@/components/Button";
import Colors from "@/constants/Colors";
import { supabase } from "@/lib/supabase";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loeading, setLoading] = useState(false);

  async function signInWithPassword() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) Alert.alert(error.message);
    setLoading(false);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="jon@gmail.com"
        style={styles.input}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder=""
        style={styles.input}
        secureTextEntry
      />

      <Button
        onPress={signInWithPassword}
        disabled={loeading}
        text={loeading ? "Signing in ..." : "Sign in"}
      />
      <Link href={"/sign-up"} style={styles.textButton}>
        Create an account
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  label: {
    color: "gray",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: "white",
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
  },
});

export default SignInScreen;
