import React,{Component} from 'react';
import {View,Text,FlatList,StyleSheet} from 'react-native';
import {Card} from 'react-native-shadow-cards';
//import { withNavigation } from 'react-navigation';


 class PurChasedItem extends Component{
     static navigationOptions=
     {
             title:'My Orders',
     }
constructor(props)
{
  super(props)
this.state =
{
  Details: [
       {
         "id": "1",
      "date":"25 Mar 2020",
      "brand":"Alibaba biocore",
     "description":'Amoxycyline diooxide 250 mg from hereAmoxycyline diooxide 250 mg from hereAmoxycyline diooxide 250 mg from here',
         "price":'3.6',
         
       },
       {
        "id": "2",
        "date":"25 Mar 2020",
        "brand":"Alibaba biocore",
       "description":'Amoxycyline diooxide 250 mg from hereAmoxycyline diooxide 250 mg from hereAmoxycyline diooxide 250 mg from here',
           "price":'3.6',
       },
       {
        "id": "3",
        "date":"25 Mar 2020",
        "brand":"Alibaba biocore",
       "description":'Amoxycyline diooxide 250 mg from hereAmoxycyline diooxide 250 mg from hereAmoxycyline diooxide 250 mg from here',
           "price":'3.6',
       },
       {
        "id": "4",
        "date":"25 Mar 2020",
        "brand":"Alibaba biocore",
       "description":'Amoxycyline diooxide 250 mg from hereAmoxycyline diooxide 250 mg from hereAmoxycyline diooxide 250 mg from here',
           "price":'3.6',
       },
       {
        "id": "5",
      "date":"25 Mar 2020",
      "brand":"Alibaba biocore",
     "description":'Amoxycyline diooxide 250 mg from hereAmoxycyline diooxide 250 mg from hereAmoxycyline diooxide 250 mg from here',
         "price":'3.6',
       },
       {
        "id": "6",
        "date":"25 Mar 2020",
        "brand":"Alibaba biocore",
       "description":'Amoxycyline diooxide 250 mg from hereAmoxycyline diooxide 250 mg from hereAmoxycyline diooxide 250 mg from here',
           "price":'3.6',
       }
 ]
}
  }
  _renderItem = ({item}) => (


    <Card style={styles.carddesign}>
    <View style={{flexDirection:'column'}}>
    <View style={{flexDirection:'row'}}>
  <Text style={styles.brandstyle}>{item.brand}</Text>
    <Text style={styles.pricestyle}>$
  <Text>{item.price}</Text>
    </Text>
    </View>
  <Text style={styles.descriptionstyle}>{item.description}</Text>
  <Text style={styles.datestyle}>{item.date}</Text>
    </View>
    
      </Card>

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

  export default PurChasedItem;
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
