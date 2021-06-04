// import React, { useState, useRef, useEffect } from "react";
// import {
//   Button,
//   View,
//   Text,
//   StyleSheet,
//   KeyboardAvoidingView,
//   ImageBackground,
// } from "react-native";
// import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
// import { Component } from "react";
// // import navigation from "react-navigation";
// var bg = require("../Assets/white1.jpg");
// const SignUp = (props) => {
//   let textInput = useRef(null);
//   const [phoneNumber, setPhoneNumber] = useState();
//   const [focusInput, setFocusInput] = useState(true);

//   const onChangePhone = (number) => {
//     setPhoneNumber(number);
//   };

//   const onPressContinue = () => {
//     if (phoneNumber) {
//       navigation.navigate("InputOTPScreen");
//     }
//   };

//   const onChangeFocus = () => {
//     setFocusInput(true);
//   };

//   const onChangeBlur = () => {
//     setFocusInput(false);
//   };

//   useEffect(() => {
//     textInput.focus();
//   }, []);
//   return (
//     <ImageBackground source={bg} style={{ height: "100%", width: "100%" }}>
//       <View style={styles.container}>
//         <KeyboardAvoidingView
//           keyboardVerticalOffset={50}
//           behavior={"padding"}
//           style={styles.containerAvoidingView}
//         >
//           <Text style={styles.textTitle}>
//             {" Enter Phone Number for Verification"}
//           </Text>
//           <Text
//             style={{
//               fontSize: 15,
//               paddingLeft: 18,
//               paddingBottom: -10,
//               color: "#616161",
//               fontStyle: "normal",
//             }}
//           >
//             {
//               "Your number will be used to send you an sms with a verification code"
//             }
//           </Text>
//           <View
//             style={[
//               styles.containerInput,
//               {
//                 borderBottomColor: focusInput ? "#616161" : "white",
//               },
//             ]}
//           >
//             <View style={styles.openDialogView}>
//               <Text style={{ fontSize: 20 }}>{"+91 "}</Text>
//             </View>

//             <TextInput
//               ref={(input) => (textInput = input)}
//               style={styles.phoneInputStyle}
//               placeholder="Phone Number"
//               keyboardType="numeric"
//               value={phoneNumber}
//               onChangeText={onChangePhone}
//               secureTextEntry={false}
//               onFocus={onChangeFocus}
//               onBlur={onChangeBlur}
//               autoFocus={focusInput}
//             />
//           </View>

//           <View style={styles.viewBottom}>
//             <TouchableOpacity
//               onPress={() => props.navigation.navigate("InputOTPScreen")}
//             >
//               <View
//                 style={[
//                   styles.btnContinue,
//                   {
//                     backgroundColor: phoneNumber ? "#F99F23" : "#E1E1E1",
//                   },
//                 ]}
//               >
//                 <Text style={styles.textContinue}>Continue -&gt;</Text>
//               </View>
//             </TouchableOpacity>

//             <Text style={{ paddingTop: 30, fontSize: 14 }}>
//               By continuing you are indicating that you agree to {"\n"} the
//               Terms and Privacy Policy.
//             </Text>
//           </View>
//         </KeyboardAvoidingView>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   containerAvoidingView: {
//     flex: 1,
//     alignItems: "center",
//     padding: 40,
//   },
//   textTitle: {
//     marginBottom: 20,
//     marginTop: 60,
//     fontSize: 19,
//     paddingTop: 25,
//     paddingBottom: 0,
//   },
//   containerInput: {
//     flexDirection: "row",
//     paddingHorizontal: 16,
//     marginTop: 100,
//     borderRadius: 10,
//     backgroundColor: "white",
//     alignItems: "center",
//     borderBottomWidth: 0,
//     fontSize: 19,
//   },
//   openDialogView: {
//     flexDirection: "row",
//     alignItems: "flex-start",
//     justifyContent: "center",
//     paddingLeft: 10,
//   },
//   phoneInputStyle: {
//     marginLeft: 30,
//     flex: 1,
//     height: 60,
//     fontSize: 19,
//   },
//   viewBottom: {
//     flex: 1,
//     justifyContent: "center",
//     marginBottom: 250,
//     alignItems: "center",
//   },
//   btnContinue: {
//     width: 348,
//     height: 47,
//     borderRadius: 5,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   textContinue: {
//     color: "#ffffff",
//     alignItems: "center",
//     fontSize: 20,
//   },
// });

// export default SignUp;

import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
var bg = require("../assets/white1.jpg");
class SignUp extends Component {
  state = { focusValue: false };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ focusValue: true });
    }, 3000);
  };
  render() {
    const { focusValue } = this.state;
    return (
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        style={styles.containerAvoidingView}
      >
        <Text style={styles.textTitle}>
          {" Enter Phone Number for Verification"}
        </Text>
        <Text
          style={{
            fontSize: 15,
            paddingLeft: 18,
            // paddingBottom: -10,
            color: "#616161",
            fontStyle: "normal",
          }}
        >
          {
            "Your number will be used to send you an sms with a verification code"
          }
        </Text>
        <View
          style={[
            styles.containerInput,
            {
              borderBottomColor:
                // focusInput ?
                "#616161",
              // :                    "white",
            },
          ]}
        >
          <View style={styles.openDialogView}>
            <Text style={{ fontSize: 20 }}>{"+91 "}</Text>
          </View>

          <TextInput
            style={styles.phoneInputStyle}
            placeholder="Phone Number"
            keyboardType="numeric"
            autoFocus={true}
          />
        </View>

        <View style={styles.viewBottom}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("InputOTPScreen")}
          >
            <View
              style={[
                styles.btnContinue,
                {
                  backgroundColor:
                    // phoneNumber
                    // ? "#F99F23" :
                    "#E1E1E1",
                },
              ]}
            >
              <Text style={styles.textContinue}>Continue -&gt;</Text>
            </View>
          </TouchableOpacity>

          <Text style={{ paddingTop: 30, fontSize: 14 }}>
            By continuing you are indicating that you agree to {"\n"} the Terms
            and Privacy Policy.
          </Text>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  textTitle: {
    marginBottom: 20,
    marginTop: 60,
    fontSize: 19,
    paddingTop: 25,
    paddingBottom: 0,
  },
  containerInput: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: 100,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    borderBottomWidth: 0,
    fontSize: 19,
  },
  openDialogView: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
  },
  phoneInputStyle: {
    marginLeft: 30,

    height: 60,
    fontSize: 19,
  },
  viewBottom: {
    justifyContent: "center",
    marginBottom: 250,
    alignItems: "center",
  },
  btnContinue: {
    width: 348,
    height: 47,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  textContinue: {
    color: "#ffffff",
    alignItems: "center",
    fontSize: 20,
  },
});

export default SignUp;