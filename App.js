
import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { createAppContainer,createSwitchNavigator } from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import {Divider,AirbnbRating,Rating } from 'react-native-elements';
import ExpiryMedicine from './Another/ExpiryMedicine.js';
import {createDrawerNavigator} from 'react-navigation-drawer';
import LogIn from './Another/LogIn.js';
import MedicineHome from './Another/MedicineHome.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
import Notification from './Another/Notification.js';
import CustomDrawerMenu from './Another/CustomDrawerMenu.js';
import ProductDetail from './Another/ProductDetail.js';
import SignUp from './Another/SignUp.js';
import Cart from './Another/Cart.js';
import Start from './Another/Start.js';
import MyOrder from './Another/MyOrder.js';
import FillData from './Another/FillData.js';


const Otherone = createStackNavigator({
  MedicineHome:MedicineHome,

},{
  defaultNavigationOptions:({navigation})=>{
    return{

      headerLeft:(<Icon name='bars' style={{marginLeft:10}}  color={'black'} size={30} onPress ={() => navigation.openDrawer()}/>),
      headerRight:(<Icon name='braille' style={{marginRight:10,}}  color={'black'} size={40} onPress ={() => navigation.navigate('Orders')}/>)

    };


}
});




const Drawer = createDrawerNavigator({
  MedicineHome:Otherone,
Notification:Notification,
},
{
  contentComponent: CustomDrawerMenu,

},

);

const AppNavigator = createStackNavigator({
LogIn:{
  screen:LogIn
},
Drawerscreen:
{
  screen:Drawer,
  navigationOption:{
    header:null
  }
},
ExpiryMedicine:
{
  screen:ExpiryMedicine,
},
Signup:
{
  screen:SignUp,
},
Cart:
{
  screen:Cart,
},
fillData:
{
  screen:FillData,
},
Orders:
{
screen:MyOrder,


},
ProductDetail:
{
  screen:ProductDetail,
}},
{
initialRouteName:'LogIn',

});


const Switchnavigator = createSwitchNavigator({
First:{
  screen:AppNavigator
},
Second:
{
  screen:Drawer
},
 Start:
{
   screen:Start,

 }

},
{

initialRouteName:'Start'

});

const AppContainer = createAppContainer(Switchnavigator);

export default class App extends Component
{

  render()
  {
    return(
<AppContainer />

    );
  }
}
