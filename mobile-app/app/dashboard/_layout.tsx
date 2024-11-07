import { Stack, Tabs, useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../firebase";
import { useRecoilState } from "recoil";
import { userData } from "../../recoil/userData";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { themeColors } from "../../constants/Colors";

export default function Layout() {
  const router = useRouter();
  const [_, setUser]: any = useRecoilState(userData);

  useEffect(() => {
    const unsubscribeAuthStateChanged = onAuthStateChanged(
      auth,
      (authenticatedUser) => {
        !authenticatedUser && router.push("/");
        // authenticatedUser ? setUser(authenticatedUser) : setUser(null);
      }
    );
    return unsubscribeAuthStateChanged;
  }, []);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: themeColors.primary,
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarLabelStyle: { marginBottom: 5, marginTop: -6 },
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name='home' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='create'
        options={{
          title: "Create",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name='pencil' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='study'
        options={{
          title: "Study",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name='book' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name='cog' color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
