import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';


const Submit = props => {
    return (
        <TouchableOpacity style={[styles.container, {backgroundColor: props.color}]}>
            <Text style={[styles.submitText]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        borderColor: 'black',
        borderRadius: 100,
        marginVertical: 10,
        borderWidth: 2,
    },
    submitText: {
        fontSize: 20,
        fontWeight: 'normal',
        color: 'black',
        alignSelf: 'center',
        marginVertical: 10
    }
});

export default Submit;