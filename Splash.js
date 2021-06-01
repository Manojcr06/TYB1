import React,{Component} from 'react';
import {View,ImageBackground,Image} from 'react-native';
import Progress from './Progress';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    FlatList,
} from 'react-native';


var bg = require('./white1.jpg');
var logo=require('./tyb1.png');

export default class Splash extends Component
{

    constructor(props)
    {
        super(props);
        setTimeout(()=>
        {
                this.props.navigation.navigate("Login");
        },50000);
    }
    render()
    {
        return(
               <ImageBackground
               source={bg}
               style={{height:'100%', width:'100%'}}>
                <View
                style={{flex:1,justifyContent:'center',alignItems:'center'}}>

                    <Image source={logo} 
                    style={{height:100, width:100}}>
                    

                    </Image>
                    <Progress/>
                </View>
                <View style={styles.footer}>
                    <Text style={{fontSize: 19, color: '#CCCCCC', fontFamily : ''}}> The Yarn Bazaar</Text>
                </View>
                

               </ImageBackground>
               
            
        );
    }
}

const styles = StyleSheet.create({
    footer:{
        backgroundColor:'white',
        fontWeight : 'normal',
        justifyContent: 'center',
        alignItems : 'center',
        height : 100,
    }
})