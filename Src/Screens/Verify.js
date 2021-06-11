import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';

import Inputs from './Inputs';

import Button from "../Common/Button";
import { Component } from 'react';


class Verify extends Component {
    render(){
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.container}>
                
                <Text style={styles.textTitle}>Enter your account information</Text>
                <Text style={styles.textBody}>Enter your basic profile info so that we can create an account for you, you will have to complete your profile to carry out any actions.</Text>
                <View style={{marginTop: 20}} />
                <Inputs name="Your Name" />
                <Inputs name="Your Company"  pass={true} />
                
            </View>
            <Button
          onPress={() => this.props.navigation.navigate("Selected")}
        >{`Next ->`}</Button>
        </ScrollView>      
    );
}
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 400,
        height: 250,
        marginVertical: 10
    },
    textTitle: {
        marginTop: "50%",
        fontFamily: 'Foundation',
        fontSize: 25,
        marginVertical: 10,
    },
    textBody: {
        color:'grey',
        paddingLeft: 40,
        fontFamily: 'Foundation',
        fontSize: 16,
        paddingBottom: 10,
    }
});

export default Verify;