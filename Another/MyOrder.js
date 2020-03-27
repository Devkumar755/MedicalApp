import React,{ Component} from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PurChased from './PurChased.js';
import Sold from './Sold.js';

const Tabs = createMaterialTopTabNavigator();
 function Container()
{

  return(
    <NavigationContainer>
    <Tabs.Navigator>
    <Tabs.Screen name='PurChased' component={PurChased}/>
    <Tabs.Screen name='Sold' component={Sold}/>
   
    </Tabs.Navigator>
    </NavigationContainer>
  );
}
 export default class MyOrder extends Component 
 {
  static navigationOptions = {

    title: 'My Orders',
 
    
 
  };
   render()
   {
     return(
      

<Container />
      
    
     );
   }
 }