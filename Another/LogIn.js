import React, { Component } from 'react';
import { TextInput } from 'react-native-paper';
import { ScrollView,Alert,View,TouchableOpacity,Image, Text,StyleSheet,Button,Platform ,  StatusBar, } from 'react-native';
import  LinearGradient from 'react-native-linear-gradient';
import GoogleCustomFile from './GooglesinginButton.js';
import FacebookLogin from './FacebookLogin.js';


 export default class LogIn extends Component {
   constructor(props)
   {
     super(props);
     this.state =
     {
       email:'',
       password:'',
      hidePassword: true,


     }

   }
   managePasswordVisibility = () =>
   {
     this.setState({ hidePassword: !this.state.hidePassword });
   }
   onpressbutton = ()=>
   {
     const {name,password} = this.state;
   Alert.alert("Hi! " +name+"  is"+password)


   }



  render() {
    return (

      <View style={styles.maincontainer}>
       <StatusBar hidden={true} translucent={true} backgroundColor='green' />
        <ScrollView >
        <Image source={require('../image/logo7.jpg')}
       style={styles.logoimagestyle} />


      <TextInput style={styles.emailinputstyle}



 label=' Enter Email'
 //value={this.state.name}
 onChangeText={name => this.setState({ name })}
/>


<View style={styles.passwordinputstyle}>
<View style={{flexDirection:'row'}}>
<TextInput
 underlineColor="transparent" secureTextEntry = { this.state.hidePassword }
style={{backgroundColor:'white',width:'90%',}}
label=' Enter Password'
//value={this.state.name}
onChangeText={password => this.setState({ password })}
/>
<TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
  <Image source = { ( this.state.hidePassword ) ? require('../assets/hideicon.png') : require('../assets/showicon.png') } style = { {height:35,width:35 ,marginTop:15,marginRight:8} } />
</TouchableOpacity>

</View>
<View style={{backgroundColor:'#b3b4b5',height:1,width:'100%'}}></View>
</View>
<Text style={styles.forgottext}

> Forgot Password?</Text>
<TouchableOpacity

style={styles.toucablstyle}
onPress={() =>
{
  this.props.navigation.navigate("Second")
}}

>

<Text style={{color:'white',fontSize:16,marginTop:15}}>Submit</Text>


</TouchableOpacity>
<GoogleCustomFile />
<FacebookLogin />
<View style={{flex:1,flexDirection:'row',marginLeft:90,fontSize:15,fontWeight:'bold',marginTop:110}}>
<Text style={{color:'black',marginTop:3}} >
Don't have an Account?

</Text>
<TouchableOpacity
onPress={() =>{
  this.props.navigation.navigate("Signup")
}}>
<Text style={{color:'#42cceb',marginLeft:8,fontSize:18}}>Sign Up</Text>
</TouchableOpacity>
</View>

</ScrollView>
</View>

      );
  }
}
const styles=StyleSheet.create({
maincontainer:
{
  flex:1,
  height:'100%',
  backgroundColor:'white',

},
logoimagestyle:
{
height:110,
width:130,
marginLeft:130,
marginTop:40,
},
emailinputstyle:
{
  marginLeft:15,
  marginRight:15,
  marginBottom:10,
  marginTop:80,

  backgroundColor:'white'
},
passwordinputstyle:
{
  marginLeft:15,
  marginRight:15,
  marginBottom:5,
flexDirection:'column',

  backgroundColor:'white'
},
forgottext:
{

  fontSize:15,
textAlign: 'right',
marginRight:15

},
toucablstyle:
{
  height:50,
  width:180,
 borderRadius:8,
 alignItems:'center',
 marginLeft:100,
 marginTop:20,
  backgroundColor:'#42cceb',

}



});
