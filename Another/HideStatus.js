import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class HideStatus extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar hidden />
      <Image source={require('../image/splashscreen.jpg')} style={{ height:'100%', width:'100%'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
});
