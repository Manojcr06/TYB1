import React, {useState, useEffect, useRef} from 'react';
import {Button, View, Text,StyleSheet, KeyboardAvoidingView} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


const InputOTPScreen = props => {
    let textInput = useRef(null)
    let clockCall = null
    const lengthInput = 4;
    const defaultCountdown = 15;
    const [intervalVal, setIntervalVal ] = useState("")
    const [countdown, setCountdown]= useState(defaultCountdown)
    const [enableResend , setEnableResend]= useState(false)
    useEffect(() => {
            clockCall = setInterval(() => {
                decrementClock();
            }, 1000)
            return () => {
                clearInterval(clockCall)
            }
    })

    const decrementClock = () => {
        if(countdown === 0){
            setEnableResend(true)
            setCountdown(0)
            clearInterval(clockCall)
        }else {
            setCountdown(countdown -1)
        }
        
    }

const onChangeText = (val) => {
    setIntervalVal(val)
    if (val.length === lengthInput) {
        props.navigation.navigate('')
    }

}

const onResendOTP =() => {
    if(enableResend){
        setCountdown(defaultCountdown)
        setEnableResend(false)
        clearInterval(clockCall)
        clockCall = setInterval(() => {
            decrementClock(0)
        }, 1000)
    }
}

const onChangeNumber =() => {
setIntervalVal("")
    
}

useEffect(() => {
    textInput.focus()
},[])

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
            keyboardVerticalOffset={50}
            behavior={'padding'}
            style={styles.containerAvoidingView}
            >

            <Text style={styles.textTitle}>Please Wait. {'\n'}We will auto verify the OTP sent to +91 7892760904</Text>
            <Text style={{fontSize : 14, paddingLeft: 40, paddingBottom : 15, color : '#616161',marginBottom: 29,paddingVertical: 0}}>Your number will only be used to send you an sms with a verification code</Text>
            <View>

                <TextInput
                ref={(input) => textInput = input}
                onChangeText={onChangeText}
                style={{width:0, height:0}}
                value={intervalVal}
                maxLength={lengthInput}
                returnKeyType="done"
                keyboardType="numeric"

                />
                <View style={styles.containerInput}>
                {
                    Array(lengthInput).fill().map((data, index) => (
                        <View 
                        key={index}
                        style={[
                            styles.cellView,
                            {
                                borderBottomColor : index === intervalVal.length ? 'black':'grey'
                            }
                            ]}
                        >
                    <Text 
                    style={styles.cellText}
                    onPress={() => textInput.focus()}
                    
                    >{intervalVal && intervalVal.length > 0 ? intervalVal[index] : ""}</Text>
                </View>
                    )) }
                

                </View>
            </View>
           
            
            
            <TouchableOpacity onPress ={onResendOTP}>
                <View style={styles.btnResend}>
                <Text style ={[
                    styles.textResend,
                    {
                        color : enableResend ? 'grey' : 'black'
                    }
                    ]}>Auto verifying your OTP in ({countdown})</Text>

                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[
                styles.continue,{
                    backgroundColor : textInput? 'orange' : 'orange'
                }
                ]} onPress={() => props.navigation.navigate('Verify')} >
                <Text style={styles.context}>
                    Continue  -&gt;
                </Text>
            </TouchableOpacity>
            
            </KeyboardAvoidingView>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex :1,
        
    },
    containerAvoidingView: {
        flex :1,
        alignItems : 'center',
        padding : 1
    },
    textTitle:{
        marginTop : 100,
        marginBottom : 50,
        fontSize : 22,
        paddingLeft : 40,
        paddingBottom : 0
    },
    containerInput:{
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center'
    },
    cellView:{
        paddingVertical: 0,
        width : 40,
        margin : 18,
        justifyContent: 'center',
        alignItems : 'center',
        borderBottomWidth : 0.5
    },
    cellText:{
        textAlign: 'center',
        fontSize : 18
    },
   
    
    btnResend:{
        width : 300,
        height : 60,
        borderRadius: 9,
        alignItems: 'center',
        justifyContent:'center',
        paddingBottom : 40,
        paddingLeft : 0,
        paddingRight : 50
    },
    textResend:{
        alignItems:'center',
        fontSize: 16,
        color : '#616161'
        
    },
    
    context : {
        fontSize : 20,
        color : 'white',
    },

    continue : {
        height : 50,
        width : 260,
        justifyContent : "center",
        alignItems : "center",
    
        borderRadius : 6,
    }
});

export default InputOTPScreen;