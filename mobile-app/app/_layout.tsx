import React, { useEffect, useState } from "react";
import { Slot, useRouter } from "expo-router";
import { PaperProvider, MD2LightTheme } from "react-native-paper";
import { themeColors } from "../constants/Colors";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { RecoilRoot, useRecoilState } from 'recoil'
import { userData } from "../recoil/userData";

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter()

  const theme = {
    ...MD2LightTheme,
    custom: 'property',
    colors: {
      ...MD2LightTheme.colors,
      primary: themeColors.primary,
    },
  };


  useEffect(() => {
    const unsubscribeAuthStateChanged = onAuthStateChanged(
      auth,
      (authenticatedUser) => {
        // authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        authenticatedUser && router.push("/dashboard/home")
        setIsLoading(false);
      }
    );
    return unsubscribeAuthStateChanged;
  }, []);


  return (
    <RecoilRoot>
      <PaperProvider theme={theme}>
        <Slot />
      </PaperProvider>
    </RecoilRoot>
  );
}
