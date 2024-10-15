import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { hp } from "../../constants/Responsive";
import { Button, TextInput } from "react-native-paper";
import { themeColors } from "../../constants/Colors";
import { goToPage } from "../index";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useRouter } from "expo-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      console.log("Please enter details");
      return;
    }
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setLoading(false);
        router.push("/dashboard/home");
      })
      .catch((error: any) => {
        console.log(error.message);
        Alert.alert("Login Error", error.message);
        setLoading(false);
      });
  };


  
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: hp("7"),
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 20 }}>
        Welcome Back
      </Text>

      <TextInput
        label='Email'
        mode='outlined'
        value={email}
        style={{ height: 40, marginBottom: 10 }}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label='password'
        mode='outlined'
        style={{ height: 40, marginBottom: 20 }}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Button
        style={{ height: 40 }}
        textColor='white'
        loading={loading}
        mode='contained'
        onPress={() => handleLogin()}
      >
        LOGIN
      </Button>
      <View style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 20 }}>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text>Are you new here?</Text>
          <TouchableOpacity onPress={() => goToPage("register")}>
            <Text style={{ color: themeColors.primary }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
