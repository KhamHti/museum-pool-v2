import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MuseumPool from "./MuseumPool";
import Setting from "./Setting";
import SignOut from "./SignOut";
import CustomSideMenu from "./customSideMenu";

const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomSideMenu {...props} />}>
      <Drawer.Screen name="MuseumPool" component={MuseumPool} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="SignOut" component={SignOut} />
    </Drawer.Navigator>
  );
};

export default Home;
