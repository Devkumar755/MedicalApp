import * as React from 'react';
import { View, Text } from 'react-native';
import NextToScreen from './NextToScreen.js';
import NextScreen from './NextScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

function Feed() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator  initialRouteName='NextScreen'>
    <Stack.Screen name="NextScreen" component={NextScreen}/>
    <Stack.Screen name="NexToScreen" component={NextToScreen}/>
    </Stack.Navigator>
  );
}

function Article() {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}
/*
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}
*/

const Drawer = createDrawerNavigator();



function MyDrawer() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

export default function DrawerContent() {
  return (

    <NavigationContainer>
      <MyDrawer />
      </NavigationContainer>

  );
}
/*drawerContent={props => CustomDrawerContent(props)}*/
