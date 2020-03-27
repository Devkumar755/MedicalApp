import React,{Component} from 'react';
import {View,Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ThreeMonths from './ThreeMonths.js';
import SixMonths from './SixMonths.js';
import NineMonths from './NineMonths.js';


const Tabs = createMaterialTopTabNavigator();
export default function TabManagerexpiry()
{
  return(
    <NavigationContainer>
    <Tabs.Navigator>
    <Tabs.Screen name='ThreeMonths' component={ThreeMonths}/>
    <Tabs.Screen name='SixMonths' component={SixMonths}/>
    <Tabs.Screen name='NineMonths' component={NineMonths}/>
    </Tabs.Navigator>
    </NavigationContainer>
  );
}
