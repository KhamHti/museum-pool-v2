import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Map from './map';
import NearbyList from './nearbyList';


const Tab = createMaterialTopTabNavigator();

const MuseumPool = () => {
  return (
      <Tab.Navigator 
            screenOptions={{
            tabBarStyle: { backgroundColor: '#C0EEE4' },
      }}>
            <Tab.Screen name="NEARBYLIST" component={NearbyList} />
            <Tab.Screen name="Map" component={Map} />
      </Tab.Navigator>
  )
}

export default MuseumPool