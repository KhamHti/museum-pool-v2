import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const DetailsScreen = ({navigation, route}) => {

    const places = route.params;
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#ffffff"}}  >
            <ImageBackground 
            style={{flex: 0.7}}
            source={places.image}>
                <View style={style.header}>
                    <Icon 
                    name="arrow-left" 
                    size={30} 
                    color={"#ffffff"}
                    onPress={navigation.goBack}
                    />
                    <Icon  
                    name="alien" 
                    size={28} 
                    color={"#ffffff"}
                    />
                </View>
                <View style={style.imgDetails}>
                    <Text 
                    style={{fontSize: 30,
                    color: "#ffffff",
                    width: "70%",
                    fontWeight: "bold",
                    marginBottom: 20,
                    }}>
                     {places.name}
                    </Text>
                    <View style={{flexDirection: "row"}}>
                        <Icon name='star' size={30} color={"#f5a623"} />
                        <Text 
                        style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#ffffff",
                            marginLeft: 5,
                        }} >5.0</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={style.detailsContainer} >
                <View style={style.forIcon}>
                    <Icon name="heart" size={30} color={"red"} />
                </View>
                <View style={{flexDirection: "row", marginTop: 10}} >
                    <Icon name="alien" size={28} color={"#04555c"} />
                    <Text 
                    style={{
                        marginLeft: 5, 
                        fontSize: 20, 
                        fontWeight: "bold",
                        color: "#04555c",
                        }}>
                         {places.location}
                    </Text>
                </View>
                <Text 
                  style={{
                    marginTop: 20, 
                    fontWeight: "bold", 
                    fontSize: 20}} >
                    About the Museum 
                </Text>
                <Text style={{marginTop: 20, lineHeight: 20}} > {places.details} </Text>
            </View>
            <View style={style.footer} >
                <View 
                style={{
                    flex: 1, 
                    flexDirection: "row",
                    justifyContent: "center", 
                    alignItems: "center"}} >
                    <Text 
                    style={{
                        fontWeight: "bold", 
                        fontSize: 18, 
                        color: "#ffffff",
                        }} >
                            $10
                        </Text>
                    <Text 
                    style={{
                        fontWeight: "bold", 
                        fontSize: 12, 
                        color: "#dddedd",
                        marginLeft: 3}} >
                            /PER DAY
                        </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    detailsContainer: {
        top: -30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: "#ffffff",
        flex: 0.3,
    },
    header: {
        marginTop: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    imgDetails: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%',
        position: "absolute",
        bottom: 30,
    },
    forIcon: {
        height: 60,
        width: 60,
        position: "absolute",
        top: -30,
        backgroundColor: "#ffffff",
        borderRadius: 30,
        right: 30,
        elevation: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        flexDirection: "row",
        backgroundColor: "#04555c",
        height: 70,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
});

export default DetailsScreen;