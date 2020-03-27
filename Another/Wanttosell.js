import React,{Component} from 'react';
import {View,Text, Image, StyleSheet,TouchableOpacity} from 'react-native';
export default class WanttoSell extends Component
{
  render()
  {
    return(
      <View style={{backgroundColor:'#ffffff',flex:1}}>
    <Image  source={require("../image/lock.png")} style={styles.imagestle}/>
    <Text style={styles.fillstyle}>Fill Information of Medicine</Text>
    <TouchableOpacity

style={styles.toucablstyle}
onPress={() =>
{
  this.props.navigation.navigate("fillData")
}}

>

<Text style={{color:'white',fontSize:16,marginTop:15}}>Fill</Text>


</TouchableOpacity>
    </View>
    );
  }
}
const styles = StyleSheet.create({
imagestle:
{
  height:150,
  width:150,
  marginLeft:110,
  marginTop:50,
  
},
  toucablstyle:
  {
    height:50,
    width:180,
   borderRadius:8,
   alignItems:'center',
   marginLeft:105,
   marginTop:20,
    backgroundColor:'#42cceb',
  
  },
  fillstyle:
  {
    fontSize:23,
    fontWeight:'bold',
    textAlign:'center',
  }

});