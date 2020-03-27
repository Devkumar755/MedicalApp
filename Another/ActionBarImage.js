import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View, Text, Image,TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

 class ActionBarImage extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
      <Icon name='search' style={{marginLeft:10}}  color={'#1f2121'} size={25} />
      <TouchableOpacity   onPress={()=>
      {
        this.props.navigation.navigate('Cart')
      }}>
    <Icon name='cart-plus' style={{marginLeft:10,marginRight:15}}  color={'#1f2121'} size={25} />

</TouchableOpacity>
      </View>
    );
  }
}
export default withNavigation(ActionBarImage);
