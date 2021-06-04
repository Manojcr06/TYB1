import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// import all screens from screens pages
import SplashScreen from "./SplashScreen";
import Login from "./Login";
import SignUp from "./SignUp";
import InputOTPScreen from "./InputOTPScreen";
import Verify from "./Verify";
const Stack = createStackNavigator();

function AppContainer({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false} initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
            name="InputOTPScreen"
            component={InputOTPScreen}
            options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="Verify"
          component={Verify}
          options={{gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;