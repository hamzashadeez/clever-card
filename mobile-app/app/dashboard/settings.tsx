import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useRouter } from "expo-router";

const Settings = () => {
  const router = useRouter();

  const logOut = async () => {
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error: any) => console.log("Error logging out: ", error));
  };
  return (
    <View style={{ flex: 1, paddingTop: 50, paddingHorizontal: 30 }}>
      <Text>Settings</Text>
      <Button
        style={{ height: 40 }}
        textColor='white'
        // loading={loading}
        mode='contained'
        onPress={() => logOut()}
      >
        LOG OUT
      </Button>
    </View>
  );
};

export default Settings;
