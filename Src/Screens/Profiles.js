import React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../Components/Profile";
import Orders from "../Components/Orders";
import Requirements from "../Components/Requirements";
import Chat from "../Components/Chat";
import Explore from "../Components/Explore";

const Tab = createBottomTabNavigator();

 function Profiles({navigation}) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            position: "absolute",
            elevation: 0,
            backgroundColor: "white",
            borderRadius: 15,
            height: 90,
          },
        }}
      >
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("../assets/explore.png")}
                  resizeMode="contain"
                  style={{
                    width: 17,
                    height: 17,
                    tintColor: focused ? "blue" : "gray",
                  }}
                />
                <Text
                  style={{ color: focused ? "blue" : "gray", fontSize: 10 }}
                >
                  Explore
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Requirements"
          component={Requirements}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("../assets/requirements.png")}
                  resizeMode="contain"
                  style={{
                    width: 17,
                    height: 17,
                    tintColor: focused ? "blue" : "gray",
                  }}
                />
                <Text
                  style={{ color: focused ? "blue" : "gray", fontSize: 10 }}
                >
                 Requirements
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("../assets/chat.png")}
                  resizeMode="contain"
                  style={{
                    width: 40,
                    height: 40,
                    tintColor: focused ? "blue" : "gray",
                  }}
                />
                <Text
                  style={{ color: focused ? "blue" : "gray", fontSize: 10 }}
                >
                  Chat
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Orders"
          component={Orders}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("../assets/orders.png")}
                  resizeMode="contain"
                  style={{
                    width: 17,
                    height: 17,
                    tintColor: focused ? "blue" : "gray",
                  }}
                />
                <Text
                  style={{ color: focused ? "blue" : "gray", fontSize: 10 }}
                >
                    Orders
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("../assets/profiled.png")}
                  resizeMode="contain"
                  style={{
                    width: 17,
                    height: 17,
                    tintColor: focused ? "blue" : "gray",
                  }}
                />
                <Text
                  style={{ color: focused ? "blue" : "gray", fontSize: 10 }}
                >
                 Profile
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Profiles;