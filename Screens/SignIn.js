import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import  Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Signin = ({navigation}) => {

  return (
   <View style={{flex: 1, backgroundColor: "#fff"}}>
      <View style={{flex: 0.5,justifyContent: 'center', alignItems: 'center'}}>
        <Icon name='bank' size={150} style={{color: "#DDBEAA",}} />
      </View>
      <View style={{flex: 0.5,justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Home")}  
        >
        <View style={style.goocontainer} >
            <Icon name='google' size={35} style={{color: "#BBC6C8"}} />
            <Text style={style.textContainer} >Sign in with Google</Text>  
        </View>
        </TouchableOpacity>
        <TouchableOpacity 
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Home")}  
        >
        <View style={style.faceContainer} >
            <Icon name='facebook' size={35} style={{color: "#ffffff"}} />
            <Text style={style.textContainer} >Sign in with Facebook</Text>  
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signin;

const style = StyleSheet.create({
    goocontainer: {
        backgroundColor: "#E5E3E4",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        borderRadius: 8,
    },
    faceContainer: {
        backgroundColor: "#1877F2",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        borderRadius: 8,
    },
    textContainer: {
        fontSize: 16,
        margin: 20,
        fontWeight: 'bold',
    },
});