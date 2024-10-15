import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { hp } from "../../constants/Responsive";
import { Button, TextInput } from "react-native-paper";
import { themeColors } from "../../constants/Colors";
import { goToPage } from "../index";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { useRouter } from "expo-router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleRegister = async () => {
    if (!email || !password || !name) {
      console.log("Please enter details");
      return;
    }
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setLoading(false);
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        router.push("/dashboard/home");
      })
      .catch((error: any) => {
        console.log(error.message);
        Alert.alert("Sign Up Error", error.message);
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
        Create an account
      </Text>

      <TextInput
        label='Email'
        mode='outlined'
        value={email}
        style={{ height: 40, marginBottom: 10 }}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label='Full Name'
        mode='outlined'
        value={name}
        style={{ height: 40, marginBottom: 10 }}
        onChangeText={(text) => setName(text)}
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
        onPress={() => handleRegister()}
      >
        REGISTER
      </Button>
      <View style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 20 }}>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text>Already have an acccount?</Text>
          <TouchableOpacity onPress={() => goToPage("login")}>
            <Text style={{ color: themeColors.primary }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;
