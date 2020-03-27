import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import ActionBarImage from './ActionBarImage.js';
  import ImageSlider from './ImageSlider.js';
  import {Card} from 'react-native-shadow-cards';
  import Icon from 'react-native-vector-icons/FontAwesome';
export default class ProductDetail extends Component
{
  static navigationOptions = {

   title: 'Product Detail',

   headerRight: <ActionBarImage />,



   headerStyle: {
     backgroundColor: '66e0ff',

   },

   headerTintColor: 'black',

 };
  render()
  {
    return(
      <View style={{flex:1,height:'100%'}}>
      <ScrollView>
      <Text numberOfLines={2} style={productstyle.detailmedicinename}>Potasiumm bicarbonate,Calcium sulfate,300mg Calcume bicarbonate</Text>
      <Text style={{marginLeft:8,marginBottom:8}}>By Alibaba Biocore</Text>
      <ImageSlider />
      <Card  style={{margin:8,height:110,width:'95%'}}>
      <View style={{flex:1,flexDirection:'row'}}>
      <View style={{flex:1,flexDirection:'column'}}>
      <View style={{flexDirection:'row',height:50}}>
<Text style={{color:'black',fontSize:18,margin:8,}}>Quantity</Text>
      <TextInput
      style={{borderWidth:1,borderColor:'black',height:32,width:63,marginLeft:10,marginTop:8}}/>

      </View>
      <View>
      <TouchableOpacity

      style={productstyle.toucablstyle}
      onPress={() =>
      {
        this.props.navigation.navigate("LogIn")
      }}

      >

      <Text style={{color:'white',fontSize:16,marginTop:8,textAlign:'center'}}>Submit Query</Text>


      </TouchableOpacity>
      </View>
      </View>
      <View style={{flex:1,flexDirection:'column'}}>
      <Text style={{textAlign:'right',color:'#42cceb',marginRight:12,marginTop:6,fontSize:15}}>$
<Text >10.12</Text>
      </Text>
      <Text style={{textAlign:'right',color:'black',marginRight:12,marginBottom:2,fontSize:15}}>MRP $
<Text >10.12</Text>
      </Text>

      <TouchableOpacity

      style={productstyle.addcartbutton}
      onPress={() =>
      {
        this.props.navigation.navigate("LogIn")
      }}

      >

      <Text style={{color:'white',fontSize:16,marginTop:8,textAlign:'center'}}>Submit Quary</Text>


      </TouchableOpacity>
      <View>

      </View>
      </View>
      </View>
      </Card>
      <Card style={{margin:8,height:110,width:'95%'}}>
      <Text style={{fontSize:20,color:'black',margin:8}} > Details</Text>
      <View style={{flexDirection:'row'}}>
      <View style={{flexDirection:'row'}}>
      <View style={productstyle.circle}>
      <Icon name='exclamation-triangle' style={{marginLeft:13,marginTop:10}}  color={'black'} size={20} />
      </View>
      <View style={{flexDirection:'column'}}>
      <Text style={{fontSize:18,color:'#42cceb',marginLeft:18,marginTop:5}}>Expiry</Text>
      <Text style={{fontSize:18,marginLeft:18,}}>March 16</Text>
      </View>
      </View>
      <View style={{flexDirection:'row',marginLeft:40}}>
      <View style={productstyle.circle}>
      <Icon name='bullseye' style={{marginLeft:13,marginTop:10}}  color={'black'} size={25} />
      </View>
      <View style={{flexDirection:'column'}}>
      <Text style={{fontSize:18,color:'#42cceb',marginLeft:18,marginTop:5}}>Batch Number</Text>
      <Text style={{fontSize:18,marginLeft:18,}}>01234567890</Text>
      </View>
      </View>
      </View>


      </Card >
      <Card  style={{margin:8,width:'95%'}}>
      <Text style={{fontSize:20,color:'black',margin:8}}>Description</Text>
      <Text style={{margin:8,fontSize:15}}>All the medicine is made of different of chemical composition with the mixture of organic and non-organic compound .Sometime these medicine is very useful for the us while sometime
      they made very false effect on our health</Text>
      </Card>
</ScrollView>
      </View>
    );
  }
}
const productstyle= StyleSheet.create({
  detailmedicinename:
  {
    fontSize:19,
    color:'black',
    margin:8,

  },
  toucablstyle:
  {
    height:40,
    width:160,
    backgroundColor:'#42cceb',
    marginLeft:16,
    marginTop:8,
    borderRadius:8,
  },
  addcartbutton:
  {
    height:40,
    width:160,
    backgroundColor:'#42cceb',
    marginLeft:25,
    marginTop:8,
    borderRadius:8,
  },
  circle:
  {
    height:45,
    width:45,
    borderRadius:45/2,
    marginLeft:10,
    marginTop:8,
    backgroundColor:'#a5a8a6'
  }





});
