import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Text,
  Button,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconComponentProvider, TextInput } from "@react-native-material/core";
import places from "../consts/places";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import InformationPage from "./InformationPage";
import DetailsScreen from "./DetailsScreen";

const NearbyList = ({ navigation }) => {
  // const Tab = createMaterialTopTabNavigator();
  // function InfoTab({navigation}) {
  //     <Tab.Navigator>
  //       <Tab.Screen name='InformationPage' component={InformationPage} />
  //       <Tab.Screen name='DetailsScreen' component={DetailsScreen} />
  //     </Tab.Navigator>
  // }

  const Card = ({ places }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("DetailsScreen", places)}
      >
        <View style={{ backgroundColor: "#C0EEE4" }}>
          <Text style={style.textContainer}>{places.name}</Text>
          <ImageBackground style={style.cardImage} source={places.image}>
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              {places.name}
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Icon name="map-marker" size={20} color={"#fff"} />
                <Text
                  style={{ color: "#fff", fontWeight: "bold", marginLeft: 5 }}
                >
                  {" "}
                  {places.location}{" "}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Icon name="star" size={20} color={"#fff"} />
                <Text
                  style={{ color: "#fff", fontWeight: "bold", marginLeft: 5 }}
                >
                  5.0
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <TextInput
        variant="outlined"
        style={{ margin: 9 }}
        leading={(props) => <Icon name="magnify" {...props} />}
        placeholder="Search museum..."
      />
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 20 }}
        vertical
        data={places}
        renderItem={({ item }) => <Card places={item} />}
      />
    </View>
  );
};

export default NearbyList;

const style = StyleSheet.create({
  cardImage: {
    height: 250,
    width: "100%",
    overflow: "hidden",
    borderRadius: 10,
    resizeMode: "cover",
  },
  textContainer: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
