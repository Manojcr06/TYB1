import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AppContainer from "./Src/Screens/AppContainer";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={style.container}>
        <AppContainer />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;