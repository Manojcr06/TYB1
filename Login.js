import React from 'react';
import {View, StyleSheet, Text, ImageBackground,Image, ScrollView,} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';
import Account from './Account';

var bg = require('./prod.png');
var logo=require('./tyb1.png');

const Login = props => {
    return (
        
        <ScrollView style={{backgroundColor: 'white'}}>
        <ImageBackground
               source={bg}
               style={{height:'84%', width:'100%',borderBottomColor : 'whitesmoke'}}>
            <View style={styles.container}>
            <View style={{flexDirection: 'row', marginVertical: 1}}>
            <View
                style={{flex : 1,flexDirection : 'column',justifyContent:'center',paddingLeft : 60}}>

                    <Image source={logo} 
                    style={{height:60, width:60}}>
                    

                    </Image> 
                    </View>
                    <Text style={styles.textBody1}>
                      {'\n'}        Explore new ways to trade
                      {'\n'}        yarn with The Yarn Bazaar  
                      {'\n'}         
                      </Text>
                    
                    </View>
                    
               
                
                
                
                <TouchableOpacity style={{  height : 45, width : 310,marginVertical: 10,
                justifyContent : "center", alignItems : "center",backgroundColor :"orange", borderRadius : 10, borderWidth : 0}}  onPress={() => props.navigation.navigate('SignUp')}>
                <Text style={styles.textBody}> Continue With Phone Number  -&gt; </Text>
                </TouchableOpacity>

                
                <View style={{flexDirection: 'row'}}>
                
                    <Account color="white" icon="google" title="Google" />
                    <Account color="white" icon="facebook" title="Facebook" />
                </View>
                
            </View>
            </ImageBackground> 
        </ScrollView>     
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop : 500,
        
        alignItems: 'center',
        
        justifyContent: 'flex-end',
        bottom : 0,
    },
    textBody: {
        fontFamily: 'sans-serif',
        fontSize: 17,
        fontWeight: 'normal',
        alignSelf: 'center',
        color : "white"
    },
    textBody1 :{
        flexDirection : 'row',
        justifyContent : 'center',
        fontFamily: '',
        fontSize: 17,
        flexGrow : 0,
        fontWeight: 'normal',
        alignSelf: 'center',
        color : "#616161",
        paddingRight : 80        

    }
});

export default Login;