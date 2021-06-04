import React from "react";
import { SafeAreaView } from "react-native";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";

import Account from "../Common/Account";
import Button from "../Common/Button";
const { height } = Dimensions.get("window");
var bg = require("../assets/prod.png");
var logo = require("../assets/tyb1.png");

const Login = (props) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <ImageBackground
        source={bg}
        style={{
          height: height / 1.2,
          width: "100%",
          borderBottomColor: "whitesmoke",

          alignItems: "center",
          justifyContent: "flex-end",
        }}
      ></ImageBackground>
      <View
        style={{
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          height: "20%",
          width: "100%",
          // backgroundColor: "green",
        }}
      >
        <View style={{ flexDirection: "row", marginVertical: 1 }}>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Image source={logo} style={{ height: 60, width: 60 }}></Image>
          </View>
          <Text style={styles.textBody1}>
            {`Explore new ways to trade yarn\n with The Yarn Bazaar`}
          </Text>
        </View>

        <Button
          onPress={() => props.navigation.navigate("SignUp")}
        >{`Continue With Phone Number ->`}</Button>

        <View style={{ flexDirection: "row" }}>
          <Account color="white" icon="google" title="Google" />
          <Account color="white" icon="facebook" title="Facebook" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textBody: {
    fontSize: 17,
    fontWeight: "normal",
    alignSelf: "center",
    color: "white",
  },
  textBody1: {
    flexDirection: "row",
    justifyContent: "center",

    fontSize: 17,

    fontWeight: "normal",
    alignSelf: "center",
    color: "#616161",
  },
});

export default Login;