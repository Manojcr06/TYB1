import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Account = props => {
    return (
        <TouchableOpacity style={[styles.container, {backgroundColor: 'white'}]}>
            <Icon style={styles.accIcon} name={props.icon} />
            <Text style={styles.textTitle}>{props.title}</Text>
        </TouchableOpacity>
    );  
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 135,
        height: 37,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 6,
        borderWidth: 0.2,
        borderColor :"#616161",
        
        
    },
    accIcon: {
        color: 'black',
        fontSize: 15,
        marginVertical: 10,
        marginHorizontal: 8,

    },
    textTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
        color : "#616161",
        
    }
});

export default Account;