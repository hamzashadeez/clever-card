import React from "react";
import { Stack } from "expo-router";
import { PaperProvider, MD2LightTheme } from "react-native-paper";
import { themeColors } from "../constants/Colors";

export default function RootLayout() {
  const theme = {
    ...MD2LightTheme,
    custom: 'property',
    colors: {
      ...MD2LightTheme.colors,
      primary: themeColors.primary,
    },
  };

  return (
    <PaperProvider theme={theme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='index' />
      </Stack>
    </PaperProvider>
  );
}
