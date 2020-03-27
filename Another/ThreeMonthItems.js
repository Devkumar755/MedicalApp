import React,{Component} from 'react';
import {View,Text,Image,FlatList,StyleSheet,TouchableWithoutFeedback,TouchableOpacity,ScrollView,Button} from 'react-native';
import {Card} from 'react-native-shadow-cards';
//import FastImage from 'react-native-fast-image';
import { withNavigation } from 'react-navigation';

 class ThreeMonthItems extends Component{
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
       },
       {
         "id": "4",
         "mrp":'2.0',
         "quantity":'40',
          "mediciname":'Amoxycyline diooxide 250 mg from here',
         "price":'3.6',
         "images": require('../image/img5.jpg'),
       },
       {
         "id": "5",
         "mrp":'2.0',
         "quantity":'40',
          "mediciname":'Amoxycyline diooxide 250 mg from here',
         "price":'3.6',
         "images": require('../image/img312.png'),
       },
       {
         "id": "6",
         "mrp":'2.0',
         "quantity":'40',
          "mediciname":'Amoxycyline diooxide 250 mg from here',
         "price":'3.6',
         "images": require('../image/img4.png'),
       }
 ]
}
  }
  _renderItem = ({item}) => (

    <View>
    <TouchableOpacity

    onPress={() =>
    {
      this.props.navigation.navigate("ProductDetail")
    }}
  >
<Card style={styles.cardStyle}
    elevation={40}>
        
        <Text numberOfLines={3} style={styles.medicinenamestyle}>{item.mediciname} </Text>
        <Text style={{marginLeft:8}}>MRP
    <Text > $
    <Text>{item.mrp}</Text>
    <Text>        Quantity:
    <Text> {item.quantity}</Text>
    </Text>

    </Text>

        </Text>
        <Text style={{marginLeft:8,color:'#33e1f5',fontSize:14,}}>$
    <Text> {item.price}</Text>
        </Text>



  </Card>
    </TouchableOpacity>

      </View>
  );
  render()
  {

   return(

      <View>

      <FlatList
   data = {this.state.Details}
   renderItem={this._renderItem}
   numColumns={2}
   keyExtractor={(item, index) => item.id}
 />
  </View>
    );
  }

}

  export default withNavigation(ThreeMonthItems);
 const styles = StyleSheet.create({

 cardStyle:
 {
   height:230,
 width:190,
 margin:7

 },
 imagestyle:
 {
   height:120,
   width:120,
   marginTop:8,
   marginLeft:35
 },
 medicinenamestyle:
 {
   fontWeight:'bold',
   fontSize:15,
   margin:8,
 }


 });
