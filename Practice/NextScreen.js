import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FirstTab from './FirstTab.js';
import SecondTab from './SecondTab.js';

const Tab = createMaterialTopTabNavigator();
export default class NextToScreen extends Component
{

  render()
  {
    return(

      <Tab.Navigator>
<Tab.Screen name="FirstTab" component={FirstTab}/>
<Tab.Screen name="SecondTab" component={SecondTab}/>

      </Tab.Navigator>


  



    );
  }
}
