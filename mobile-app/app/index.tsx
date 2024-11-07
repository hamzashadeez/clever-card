import React from "react";
import { Image, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import { hp, wp } from "../constants/Responsive";
import { themeColors } from "../constants/Colors";
import { router } from "expo-router";

export const goToPage = (pageName: any) => {
  router.push(pageName);
};

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: hp("25"),
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/images/logo.png")}
        style={{ width: wp("52.7"), objectFit: "contain", marginBottom: 10 }}
      />
      <Text
        style={{
          color: themeColors.primary,
          fontWeight: "bold",
          fontSize: 24,
          marginVertical: 5,
        }}
      >
        Clever Card
      </Text>
      <Text style={{ textAlign: "center", fontSize: 16 }}>
        Journey into knowledge,{"\n"}one card at a time!
      </Text>
      <View
        style={{
          flex: 1,
          width: "100%",
          padding: 30,
          justifyContent: "flex-end",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <AppButton onPress={() => goToPage("register")} label={"Sign Up"} />
        <AppButton
          onPress={() => goToPage("login")}
          label={"Already have an account?"}
        />
      </View>
    </View>
  );
}
