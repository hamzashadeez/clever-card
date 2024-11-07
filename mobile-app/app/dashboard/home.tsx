import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { themeColors } from "../../constants/Colors";
import { auth } from "../../firebase";
import { Link, useRouter } from "expo-router";
import { hp, wp } from "../../constants/Responsive";

const NoFlashCardYet = () => {
  const router = useRouter();
  console.log(auth.currentUser)
  const [name, setName] = useState("")

  useEffect(()=>{
    setName(auth.currentUser?.displayName);
  },[])

  
  return (
    <View
      style={{
        backgroundColor: themeColors.primary,
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 30,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
        Hey, {name}
      </Text>
      <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
        Welcome to Clever Card – your learning companion!
      </Text>
      <View
        style={{
          backgroundColor: "white",
          paddingHorizontal: 30,
          paddingVertical: 40,
          marginTop: hp("5"),
          height: hp("50"),
          borderRadius: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Create flashcards
        </Text>
        <Text>Build your own study materials with custom flashcards</Text>
        <Image
          source={require("../../assets/images/desk.png")}
          style={{ width: "100%", objectFit: "contain", marginTop: 10 }}
        />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 15,
            
          }}
        >
          <TouchableOpacity onPress={()=>router.push("/newCard")}
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 45,
              borderRadius: 22.5,
              backgroundColor: themeColors.secondary,
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 17, color: "white" }}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  // const [user, setUser]: any = useRecoilState(userData);
  const router = useRouter();



  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <NoFlashCardYet />

      {/* <Text>{user?.email}</Text> */}
    
    </View>
  );
};

export default HomeScreen;
