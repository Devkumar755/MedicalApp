import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';
export default class FirstTab extends Component
{
  render()
  {
    return(
      <View>
      <Text>This is FirstTab</Text>

      <Button title='go to other'
      onPress ={() => this.props.navigation.navigate("NexToScreen")}/>
      </View>
    );
  }
}
