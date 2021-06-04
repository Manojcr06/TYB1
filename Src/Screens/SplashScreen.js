import React, { Component } from "react";
import { View, ImageBackground, Image } from "react-native";
import Progress from "./Progress";
import { SafeAreaView, StyleSheet, Text, FlatList } from "react-native";

var logo = require("../assets/tyb1.png");

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.navigate("Login");
    }, 5000);
  }
  render() {
    return (
      <View style={{ height: "100%", width: "100%", backgroundColor: "#fff" }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image source={logo} style={{ height: 100, width: 100 }}></Image>
          <Progress />
        </View>
        <View style={styles.footer}>
          <Text style={{ fontSize: 19, color: "#CCCCCC" }}>
            The Yarn Bazaar
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "white",
    fontWeight: "normal",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
});