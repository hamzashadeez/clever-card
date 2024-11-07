import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { themeColors } from "../constants/Colors";
import { hp, wp } from "../constants/Responsive";

const AppButton = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}
      style={{
        backgroundColor: themeColors.primary,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: hp("6"),
        borderRadius: hp("3"),
      }}
    >
      <Text style={{ color: "white" }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
