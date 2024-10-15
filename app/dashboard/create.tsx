import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { hp } from '../../constants/Responsive'
import { FAB } from 'react-native-paper'
import { themeColors } from '../../constants/Colors'


const NoCollectionYet = () =>{
  return(
    <View style={{alignItems: 'center', justifyContent: 'center', marginTop: hp("10")}}>
      <Text style={{fontWeight: "600", fontSize: 20}}>Start creating flashcards</Text>
      <Text style={{textAlign: 'center'}}>Let's get started! Create your first folder{"\n "}and start adding flashcards.</Text>
      <Image alt='' source={require("../../assets/images/empty-flash.png")} style={{marginTop: 10, objectFit: 'contain'}} />
      </View>
  )
}

const Create = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingTop: 50, paddingHorizontal: 30}}>
      <NoCollectionYet />
      <FAB
    icon="plus"
    style={styles.fab}
    color='white'
    size='small'
    onPress={() => console.log('Pressed')}
  />
    </View>
  )
}

export default Create


const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: themeColors.primary
  },
})