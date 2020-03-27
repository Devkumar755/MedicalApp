import {View,Text,StyleSheet,Button,Image,ScrollView} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import React,{Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class CardView extends Component{


  render()
  {

    return(
  <Card style={styles.carddesign}>
<View style={{flexDirection:'column'}}>
<View style={{flexDirection:'row'}}>
<Text style={styles.brandstyle}>Alibaba bicore</Text>
<Text style={styles.pricestyle}>$
  <Text>1000.0</Text>
</Text>
</View>
<Text style={styles.descriptionstyle}>Amoxycyline diooxide 250 mg from hereAmoxycyline diooxide 250 mg from hereAmoxycyline diooxide 250 mg from here</Text>
<Text style={styles.datestyle}>26 March 2020</Text>
</View>

  </Card>

    );
  }
}
const styles= StyleSheet.create({
  carddesign:
  {
    width:"95%",
    marginLeft:10,
    marginRight:10,
    marginTop:8,
    marginBottom:5,
    height:120
  },
brandstyle:
{
  fontSize:18,
  marginLeft:10,
  marginTop:5,
  fontWeight:'bold'
},
pricestyle:
{
  fontSize:18,
  marginRight:8,
  marginLeft:180,
  marginTop:5,
  fontWeight:'bold'
},
descriptionstyle:
{
  fontSize:15,
 marginLeft:10,
 marginRight:10,
  
},
datestyle:
{
  fontSize:18,
  marginLeft:10,
  marginTop:5
}




})