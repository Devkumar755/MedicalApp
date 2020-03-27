import React, { Component } from 'react';
import { TextInput } from 'react-native-paper';
import { ScrollView,Alert,View,TouchableOpacity,Image, Text,StyleSheet,Button,StatusBar } from 'react-native';
import  LinearGradient from 'react-native-linear-gradient';

 export default class SignUp extends Component {
   constructor(props)
   {
     super(props);
     this.state =
     {
       name:'',
       email:'',
       password:'',
       cnfpassword:'',
       Mobilenumber:'',
       companyname:'',
       Gstnumber:'',



     }
   }
   onpressbutton = ()=>
   {
     const {name,password} = this.state;
   Alert.alert("Hi! " +name+"  is"+password)


   }



  render() {
    return (

      <View style={styles.maincontainer}>
      <StatusBar hidden={false} translucent={true} backgroundColor='green' />
        <ScrollView >

      <TextInput style={styles.emailinputstyle}
 label=' Full Name'
 //value={this.state.name}
 onChangeText={name => this.setState({ name })}
/>
<TextInput style={styles.passwordinputstyle}
label='Email'
//value={this.state.name}
onChangeText={email => this.setState({ email })}
/>
<TextInput style={styles.passwordinputstyle}
label='Password'
//value={this.state.name}
onChangeText={password => this.setState({ password })}
/>
<TextInput style={styles.passwordinputstyle}
label=' Confirm Password'
//value={this.state.name}
onChangeText={cnfpassword => this.setState({ cnfpassword })}
/>
<TextInput style={styles.passwordinputstyle}
label='Mobile Number'
//value={this.state.name}
onChangeText={Mobilenumber => this.setState({Mobilenumber })}
/>
<TextInput style={styles.passwordinputstyle}
label='Company Name'
//value={this.state.name}
onChangeText={ companyname => this.setState({  companyname })}
/>
<TextInput style={styles.passwordinputstyle}
label='GST Number'
//value={this.state.name}
onChangeText={Gstnumber => this.setState({ Gstnumber })}
/>
<View style={styles.passwordinputstyle}>
<Text style={{marginLeft:8,marginRight:8,marginTop:8,marginBottom:5,fontSize:18,color:'#969997'}}>Document</Text>
<TouchableOpacity style={{marginBottom:8,height:30,width:100,backgroundColor:'#757876',borderColor:'black',borderWidth:1,marginLeft:8}}>
<Text style={{textAlign:'center',marginTop:5,color:'white',fontSize:12}}>Choose file</Text>

</TouchableOpacity>
<View

style={{
  backgroundColor:'#a5a8a6',
  height:1,
  width:'100%'
}}
   >
</View>
</View>
<View style={styles.passwordinputstyle}>
<Text style={{marginLeft:8,marginRight:8,marginTop:8,marginBottom:5,fontSize:18,color:'#969997'}}>Drug License</Text>
<TouchableOpacity style={{marginBottom:8,height:30,width:100,backgroundColor:'#757876',borderColor:'black',borderWidth:1,marginLeft:8}}>
<Text style={{textAlign:'center',marginTop:5,color:'white',fontSize:12}}>Choose file</Text>

</TouchableOpacity>
<View

style={{
  backgroundColor:'#a5a8a6',
  height:1,
  width:'100%'
}}
   >
</View>
</View>

<TouchableOpacity

style={styles.toucablstyle}
onPress={() =>
{
  this.props.navigation.navigate("LogIn")
}}

>

<Text style={{color:'white',fontSize:16,marginTop:15}}>Submit</Text>


</TouchableOpacity>


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

emailinputstyle:
{
  marginLeft:15,
  marginRight:15,
  marginBottom:10,
  marginTop:10,
  backgroundColor:'white'
},

passwordinputstyle:
{
  marginLeft:15,
  marginRight:15,
  marginBottom:5,

  backgroundColor:'white'
},

toucablstyle:
{
  height:50,
  width:180,
 borderRadius:8,
 alignItems:'center',
 marginLeft:110,
 marginTop:20,
 marginBottom:30,
  backgroundColor:'#42cceb',

}



});
