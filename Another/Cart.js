import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import CartComponent from './CartComponent.js';
import {Card} from 'react-native-shadow-cards';
export default class Cart extends Component
{
  render()
  {
    return(
<View>
<ScrollView>
<CartComponent />
<Card style={cartstyle.cardstyel}>
<View style={{flexDirection:'row'}}>
<View style={{flexDirection:'column'}}>
<Text style={cartstyle.firstwotext}>MRP Total</Text>
<Text style={cartstyle.firstwotext}>Price Discount</Text>
<Text style={cartstyle.totaltextstyle}>Total Amount</Text>
</View >
<View style={{flexDirection:'column'}}>
<Text style={cartstyle.leftfirsttwo} >$
<Text>15.11</Text>
 </Text>
 <Text style={cartstyle.leftfirsttwo}>-$
 <Text>12.11</Text>
  </Text>
  <Text style={cartstyle.lefttotal}>$
  <Text>03.00</Text>
   </Text>
</View>
</View>
</Card>
<Card style={cartstyle.lastcars}>
<View style={{flexDirection:'row'}}>
<View style={{flexDirection:'column'}}>
<Text style={{fontSize:17}}>Total Amount</Text>
<Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>$
<Text > 20.38</Text>
</Text>
</View>
<TouchableOpacity
 style={cartstyle.touchablename}>
 <Text style={{color:'white',fontWeight:'bold',textAlign:'center',marginTop:8,fontSize:19}}>Proceed</Text>
</TouchableOpacity>
</View>
</Card>
</ScrollView>
</View>


    );
  }
}
 const cartstyle= StyleSheet.create({
cardstyel:
{
  width:'93%',
  marginLeft:16,
  marginRight:16,
  marginTop:8,
  marginBottom:10,
  padding:5,

},
firstwotext:
{
  fontSize:16,
  marginLeft:8,
  marginTop:5,
  color:'#a3a8a5'
},
totaltextstyle:
{
  fontSize:16,
  marginLeft:8,
  marginTop:5,
  fontWeight:'bold',
  color:'black',
},
leftfirsttwo:
{
  fontSize:16,
  marginRight:8,
  marginLeft:200,
  marginTop:5,
  textAlign:'right',
  color:'#a3a8a5',

},
lefttotal:
{
  fontSize:16,
  marginLeft:200,
  marginRight:8,
  marginTop:5,
  fontWeight:'bold',
  color:'black',
},
lastcars:
{
  width:'100%',
  fontWeight:'bold',
  padding:10,
},
touchablename:
{
  backgroundColor:'#42cceb',
  height:45,
  width:200,
  borderRadius:8,
  marginLeft:70,
  marginTop:5,
}

 });
