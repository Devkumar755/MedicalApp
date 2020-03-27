import React,{Component} from 'react';
import {View,Text,Image,FlatList,StyleSheet,TouchableWithoutFeedback,TouchableOpacity,ScrollView,Button} from 'react-native';
import FastImage from 'react-native-fast-image';
import { withNavigation } from 'react-navigation';

class LocalImageflatlist extends Component{
constructor(props)
{
  super(props)
this.state =
{
  Details: [
       {
         "type": "1",
         "images": require('../image/imag1.png'),
       },
       {
         "type": "2",
         "images": require('../image/img4.png'),
       },
       {
         "type": "3",
        "images": require('../image/img4.jpg'),
       },
       {
         "type": "4",
         "images": require('../image/img5.jpg'),
       },
       {
         "type": "5",
         "images": require('../image/img312.png'),
       },
       {
         "type": "6",
         "images": require('../image/img4.png'),
       },
       {
         "type": "7",
        "images": require('../image/img5.jpg'),
       }
 ]
}
  }
  _renderItem = ({item}) => (

    <View>
    <TouchableOpacity style={styles.imagestyle}
    onPress={() =>{
   this.props.navigation.navigate("ExpiryMedicine")
   }}
    >
    <Image  source={item.images} style ={styles.imagestyle} />
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
   numColumns ={3}
   keyExtractor={(item, index) => item.type}
 />
  </View>
    );
  }

}
 export default withNavigation(LocalImageflatlist);

const styles = StyleSheet.create({
imagestyle:
{
  width:122,
  height:115,
  margin:5,
}


});
