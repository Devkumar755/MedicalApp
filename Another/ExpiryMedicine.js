import React,{Component} from 'react';
import {View,Text} from 'react-native';
import TabManagerexpiry from './TabManagerexpiry.js';
import ActionBarImage from './ActionBarImage.js';




export default class ExpiryMedicine extends Component
{
  static navigationOptions = {

   title: 'Alibaba Biocore',

   headerRight: <ActionBarImage />,



   headerStyle: {
     backgroundColor: '66e0ff',

   },

   headerTintColor: 'black',

 };

  render()
  {

    return(
<>
<Text style={{fontSize:20,margin:8}}>ExpiryMedicine</Text>
<TabManagerexpiry />
</>
    );
  }
}
