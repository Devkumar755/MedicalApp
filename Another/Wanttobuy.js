import React,{Component} from 'react';
import {View,Text,Platform,StyleSheet,ScrollView,Button} from 'react-native';
import ImageSlider from './ImageSlider.js';
//import ImageFlatelist from './ImageFlatelist.js';
import LocalImageflatlist from './LocalImageflatlist.js';




 export default class Wanttobuy extends Component{


render()
{
return(
  <ScrollView>
<>
    <ImageSlider />

    <Text style={styless.textStyle}> Select Brands:</Text>
    <LocalImageflatlist />



</>
</ScrollView>

      );
    }
}
const styless = StyleSheet.create({

textStyle:
{
  fontSize:20,
  color:'black',
  padding:5,
  margin:8,
}


})
