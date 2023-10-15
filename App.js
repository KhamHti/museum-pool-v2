import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './Screens/SignIn';
import Home from './Screens/Home';
import DetailsScreen from './Screens/DetailsScreen';
const Stack = createNativeStackNavigator();



export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='SignIn' component={SignIn} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}


