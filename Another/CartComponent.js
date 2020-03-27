import React,{Component} from 'react';
import {View,Text,StyleSheet,Button,Image,ScrollView,FlatList,Picker} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-material-dropdown';
//import FastImage from 'react-native-fast-image';
//import { withNavigation } from 'react-navigation';

 class CartComponent extends Component{
constructor(props)
{
  super(props)
this.state =
{
  Details: [
       {
         "id": "1",
         "mrp":'2.0',
         "quantity":'40',
         "mediciname":'Amoxycyline diooxide 250 mg from here',
         "price":'3.6',
         "images": require('../image/imag1.png'),
       },
       {
         "id": "2",
         "mrp":'2.0',
         "quantity":'40',
          "mediciname":'Amoxycyline diooxide 250 mg from here',
         "price":'3.6',
         "images": require('../image/img4.png'),
       },
       {
         "id": "3",
         "mrp":'2.0',
         "quantity":'40',
          "mediciname":'Amoxycyline diooxide 250 mg from here',
         "price":'3.6',
        "images": require('../image/img4.jpg'),
       }
 ]
}
  }
  _renderItem = ({item}) => (

    <View>

  <Card style={styles.carddesign}>
  <View style={{flexDirection:'row'}}>
  <Image  source={item.images} style={styles.imagestyle}/>
  <View style={styles.middlcontainer}>
  <Text numberOfLines={3} style={{marginLeft:10,fontSize:16}}>{item.mediciname}</Text>
<View style={{flexDirection:'row'}}>
<Text style={{marginLeft:10,color:'#42cceb'}}>$</Text>
<Text  style={{color:'#42cceb'}}>{item.price}</Text>
<Text style={{marginLeft:30}}>MRP $</Text>
<Text>{item.mrp}</Text>
</View>
<View style={styles.MainContainer}>


 <Picker
   selectedValue={this.state.PickerValueHolder}

   onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolder: itemValue})} >

   <Picker.Item label="Quantity" value="Quantity" />
   <Picker.Item label="10" value="10" />
   <Picker.Item label="20" value="20" />
   <Picker.Item label="30" value="30" />
   <Picker.Item label="40" value="40" />
   <Picker.Item label="50t" value="50" />

 </Picker>

</View>

  </View>
  <View style={styles.iconstyle}>
  <Icon name='trash' style={{marginLeft:10}}  color={'black'} size={35}/>
  </View>
  </View>

  </Card>

      </View>
  );
  render()
  {

   return(

      <View>

      <FlatList
   data = {this.state.Details}
   renderItem={this._renderItem}

   keyExtractor={(item, index) => item.id}
 />
  </View>
    );
  }

}

  export default CartComponent;
  const styles= StyleSheet.create({
    carddesign:
    {
      width:'93%',
      marginLeft:16,
      marginRight:16,
      marginTop:8,
      marginBottom:5,
      padding:5,
      height:145
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
  },
  MainContainer: {

    width:150,
    height:40,
    borderWidth:2,
    borderColor:'black',
    borderRadius:5,
    justifyContent: 'center',
  marginTop:10,
  marginLeft:10

  }

  })
