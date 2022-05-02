import React, { useState} from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';
import Button from './src/Button';
import randomColor from './src/randomColor';


const App = () => {
  const [color, setColor] = useState('rgb(230, 156, 18)');
  const [fontColor, setFontColor] = useState('black');

  function handleClick() {
    const newColor = randomColor()
    const change = `rgb(${newColor.join(', ')})`;

    setColor(change);
    if (newColor.reduce((a, b) => a + b) < 127 * 3 ) {
      setFontColor('white');
    } else {
      setFontColor('black');
    }
  }

  return(
    <SafeAreaView style={ {
        flex: 1, 
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center'
      } }>

      <Text style={ {
        fontSize: 18,
        padding: 20,
        color: fontColor
        } }>
        Refecence Color: {color}
      </Text>

      <Button onPress={handleClick} color={fontColor} />
      
    </SafeAreaView>
  )
};

export default App;
