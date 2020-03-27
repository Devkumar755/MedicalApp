import * as React from 'react';
import { Text,Button, View,TouchableOpacity,Image,StyleSheet,TextInput } from 'react-native';
import Toptabmanager from './Toptabmanager.js';
import { Header,Divider,AirbnbRating,Rating } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

class MedicineHome extends React.Component {



  render()
  {
    const{navigation} = this.props;
    return (
      <>

      <View style={{height:70,flexDirection:'column' ,backgroundColor:'white'}}>

      <View  style={styless.Textinput}>

      <Image source={require('../image/searchicon.png')} style={{height:30,width:30,marginTop:11}}/>
      <TextInput style={{padding:8 ,fontSize:20}}
      placeholder='Search...' />
      </View>


     </View>
      <View style={{ flex: 1}}>

<Toptabmanager />


      </View>
      </>
    );
  }
}
export default withNavigation(MedicineHome);
const styless= StyleSheet.create({
iconstyle:{
height:40,
width:40,
marginLeft:10,
marginTop:7,

},
logotext:
{
  color:'blue',
  fontSize:25,
  marginLeft:22,
  marginTop:16,
  fontWeight:'bold'
},
Textinput:
{
  borderWidth:1,
  borderColor:'black',
//  height:45,
  width:360,
  flex:1,
  flexDirection:'row',
  marginLeft:19,
 borderRadius:9,
 marginTop:8,
 marginBottom:8,
 paddingLeft:10,

}


});
