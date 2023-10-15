import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

const Map = () => {
  return (
    <View style={style.container} >
      <MapView style={style.mapview} />
    </View>
  )
}

export default Map;


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff"
  },
  mapview: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,

  }
})