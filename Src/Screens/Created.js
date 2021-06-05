import React from 'react';
import { Component } from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
var logo = require("../assets/verified.png");

class Created extends Component{
    render(){
        return(
        <View style={{ height: "100%", width: "100%", backgroundColor: "#fff" }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image source={logo} style={{ height: 100, width: 100 }}></Image>
          <Text style={styles.title}>Your account has been created!</Text>
          <Text style={styles.text}>
         Thank you for choosing The Yarn Bazaar. You are in for a wholesome business experience ahead.

         </Text>
         </View>
         

        </View>
        );
    }
}

const styles= StyleSheet.create({
    text:{
        paddingLeft: 40,
        paddingTop:10,
        fontSize: 16
    },
    title:{

        fontSize: 25,
        paddingTop: 30
    }
    
});


export default Created;