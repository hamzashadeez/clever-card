import { View, TextInput, TouchableOpacity } from "react-native";
import { wp } from "../constants/Responsive";
import { themeColors } from "../constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";



const SearchComponent = ()=>{
    return (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'center' }}>
        <TextInput
          placeholder='Search...'
          style={{
            width: wp("60"),
            elevation: 2,
            height: 40,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: '#fefefe',
            paddingHorizontal: 15
          }}
        />
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            backgroundColor: themeColors.primary,
            alignItems: "center",
            justifyContent: "center",
            borderTopEndRadius: 10,
            borderBottomEndRadius: 10,
            elevation: 2,
          }}
        >
          <FontAwesome name='search' size={20} color='white' />
        </TouchableOpacity>
      </View>
    )
}

export default SearchComponent;