import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

const SignOut = ({navigation}) => {
  return (
    <View style={style.container} >
      <Button 
      onPress={() => navigation.navigate("SignIn")}
      title="SignOut"
      />
    </View>
  )
}

export default SignOut;

const style = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
})