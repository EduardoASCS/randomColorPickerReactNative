import React from 'react';
import {View, SafeAreaView, Button } from 'react-native';


const button = (props) => {
    return (
    <Button 
        title='Change Color' 
        onPress={props.onPress}
        color={props.color}
        />
    )
};


export default button