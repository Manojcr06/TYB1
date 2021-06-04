import React, { Component } from "react";
import { SafeAreaView, View } from "react-native";

class DrawerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      details: [],
      indicator_visible: false,
    };
  }

  render() {
    return <View style={{ backgroundColor: "black" }}></View>;
  }
}

export default DrawerPage;