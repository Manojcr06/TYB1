import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({
  btnwidth,
  btnheight,
  bgcolor,
  btnborder,
  bordercolor,
  onPress,
  children,
}) => {
  return (
    <View style={{ width: "100%" }}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.btn_container,
          {
            width: btnwidth || "80%",
            height: btnheight || 50,
            backgroundColor: bgcolor || "orange",
            borderWidth: btnborder,
            borderColor: bordercolor,
          },
        ]}
      >
        <Text style={styles.normal_text}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn_container: {
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
  },
  normal_text: {
    color: "#fff",
    fontSize: 19,
    fontWeight:"bold"
  },
});
export default Button;