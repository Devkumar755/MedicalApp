


import React, { Component } from 'react';

import { StyleSheet, Alert, View, Button, Picker } from 'react-native';

export default class App extends Component {

  constructor(){

    super();

    this.state={

      PickerValueHolder : ''

    }
  }

  GetSelectedPickerItem=()=>{

    Alert.alert(this.state.PickerValueHolder);
  }

 render() {
   return (
     <View style={styles.MainContainer}>


      <Picker
        selectedValue={this.state.PickerValueHolder}

        onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolder: itemValue})} >

        <Picker.Item label="React Native" value="React Native" />
        <Picker.Item label="Java" value="Java" />
        <Picker.Item label="Html" value="Html" />
        <Picker.Item label="Php" value="Php" />
        <Picker.Item label="C++" value="C++" />
        <Picker.Item label="JavaScript" value="JavaScript" />

      </Picker>

</View>




   );
 }
}

const styles = StyleSheet.create({

 MainContainer: {

   width:150,
   height:40,
   borderWidth:2,
   borderColor:'black',
   borderRadius:5,
   justifyContent: 'center',
   margin: 20

 }

});
