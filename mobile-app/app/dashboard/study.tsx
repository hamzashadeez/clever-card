import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import { themeColors } from "../../constants/Colors";
import { hp, wp } from "../../constants/Responsive";
import SearchComponent from "../../components/SearchComponent";




const StartStudy = () => {
  return (
    <View style={{ }}>
     <SearchComponent />
    </View>
  );
};

const Study = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 30,
        paddingTop: 50,
      }}
    >
      <StartStudy />
      <View style={{ marginTop: hp("10"), alignItems: "center", justifyContent: 'center'}}>
        <Text style={{fontWeight: "bold", fontSize: 24}}>Start studying</Text>
        <Text style={{fontSize: 16, textAlign: 'center', marginVertical: 10}}>Create flashcard collections to{"\n"}start studying!</Text>
        <Image style={{marginTop: 20}} source={require("../../assets/images/start-study.png")} />
      </View>
    </View>
  );
};

export default Study;
