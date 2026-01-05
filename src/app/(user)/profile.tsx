import Button from "@/components/Button";
import { supabase } from "@/lib/supabase";
import React from "react";
import { View } from "react-native";

const ProfileScreen = () => {
  return (
    <View>
      <Button
        text="Sign out"
        onPress={() => {
          supabase.auth.signOut();
        }}
      />
    </View>
  );
};

export default ProfileScreen;
