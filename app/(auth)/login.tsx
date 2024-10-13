import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { hp } from "../../constants/Responsive";
import { Button, TextInput } from "react-native-paper";
import { themeColors } from "../../constants/Colors";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      console.log("Please enter details");
      return;
    }
    setLoading(true);
    try {
    } catch (error) {
      console.log(error);
    }
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
      <View style={{flex: 1, justifyContent: "flex-end", paddingBottom: 20}}>
        <View style={{flexDirection: 'row', gap: 5}}>
            <Text>Are you new here?</Text>
            <TouchableOpacity>
                <Text style={{color: themeColors.primary}}>Sign Up</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
