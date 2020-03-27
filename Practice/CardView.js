
import React,{Component} from 'react';
import {View,Text,StyleSheet,Button,Image,ScrollView} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-material-dropdown';

export default class CardView extends Component{
// constructor(props)
// {
//   super(props)
//   this.state={
//
//   }
// }

  render()
  {
    let data : [{
     value: 'Banana',
   }, {
     value: 'Mango',
   }, {
     value: 'Pear',
   }]
    return(
  <Card style={styles.carddesign}>
  <View style={{flexDirection:'row'}}>
  <Image source={require('../image/img4.jpg')} style={styles.imagestyle}/>
  <View style={styles.middlcontainer}>
  <Text numberOfLines={3} style={{marginLeft:10,fontSize:16}}>Carboshydrate carbosnmonooxide 500mg ,Potassium nitrate</Text>
<View style={{flexDirection:'row'}}>
<Text style={{marginLeft:10,color:'#42cceb'}}>$</Text>
<Text  style={{color:'#42cceb'}}>10.11</Text>
<Text style={{marginLeft:30}}>MRP $</Text>
<Text>12.11</Text>
</View>


  </View>
  <View style={styles.iconstyle}>
  <Icon name='trash' style={{marginLeft:10}}  color={'black'} size={35}/>
  </View>
  </View>

  </Card>

    );
  }
}
const styles= StyleSheet.create({
  carddesign:
  {
    width:'92%',
    marginLeft:18,
    marginRight:18,
    marginTop:8,
    marginBottom:5,
    height:120
  },
imagestyle:
{
  height:50,
  width:50,
  marginLeft:12,
  marginTop:12,
},
middlcontainer:
{
  flexDirection:'column',
  marginTop:12,
  width:250,
},
iconstyle:
{
marginTop:12,
marginLeft:10,
}



})
