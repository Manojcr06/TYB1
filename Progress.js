import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View, Animated} from 'react-native';  

  
export default class Progress extends Component {  
  state={  
    progressStatus: 0,  
}  
anim = new Animated.Value(0);  
componentDidMount(){  
    this.onAnimate();
    }  
    onAnimate = () =>{  
        this.anim.addListener(({value})=> {  
            this.setState({progressStatus: parseInt(value,10)});  
        });  
        Animated.timing(this.anim,{  
             toValue: 100,  
             duration: 50000,  
        }).start();  
    }  
  render() {  
    return (  
      <View style={styles.container}>  
            <Animated.View  
                style={[  
                    styles.inner,{width: this.state.progressStatus +"%"},  
                ]}  
            />  
              
      </View>  
    );  
  }  
}  
const styles = StyleSheet.create({  
    container: {  
    width: "70%",  
    height: 5,  
      
    backgroundColor : "#F9D63C",
    borderColor: "#FFB800",  
    
    borderWidth: 1,  
      
    marginTop: 70,  
    justifyContent: "center",  
  },  
  inner:{  
    
    width: "100%",  
    height: 5,  
    borderRadius: 13,  
    backgroundColor:"#F99F23",  
  },  
  label:{  
     
    color: "black",  
    position: "absolute",  
    zIndex: 1,  
    alignSelf: "center",  
  }
  
});  

