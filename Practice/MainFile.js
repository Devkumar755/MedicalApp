import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import   {createSwitchNavigator} from 'react-navigation';
import DrawerContent from './DrawerContent.js';
import NextScreen from './NextScreen.js';
import NextToScreen from './NextToScreen.js';
import DrawerOne from './DrawerOne.js';
import NewOne from './NewOne.js';
import {View,Text} from 'react-native';
import React,{Component} from 'react';

 function MystackNavigator()
 {
    const Stacks = createStackNavigator();
   return(

<Stacks.Navigator initialRouteName="NextScreen">
<Stacks.Screen name="NextScreen" component={NextScreen}/>
<Stacks.Screen name="NextToScreen" component={NextToScreen}/>
</Stacks.Navigator>

 );
 }


 function DrawerNavgiatorr()
 {
   const Drawer = createDrawerNavigator();

  return(
    <Drawer.Navigator>
    <Drawer.Screen name="DrawerContent" component={DrawerContent}/>
    <Drawer.Screen name="DrawerOne" component={DrawerOne}/>
    </Drawer.Navigator>
);
 }

 class  MainFile extends Component
 {


   render()
   {
const Switch = createSwitchNavigator();
     return(

      <NavigationContainer>
       <Switch.Navigator>
       <Switch.Screen name="DrawerNavgiatorr" component={DrawerNavgiatorr}/>
       <Switch.Screen name="MystackNavigator" component={MystackNavigator}/>
       </Switch.Navigator>
       </NavigationContainer>
     );
   }



 }
 export default MainFile;
