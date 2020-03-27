import React,{Component} from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Wanttobuy from './Wanttobuy.js';
import WanttoSell from './Wanttosell.js';

  const Tabs = createMaterialTopTabNavigator();
export default function Toptabmanager()
{

    return(
  <NavigationContainer>
      <Tabs.Navigator
      tabBarOptions={{

        activeTintColor:'blue',

        inactiveTintColor:'black'
      }}
      >
        <Tabs.Screen name="Want to buy" component={Wanttobuy} />
        <Tabs.Screen name="Want to Sell" component={WanttoSell} />
      </Tabs.Navigator>
      </NavigationContainer>

  );


}
