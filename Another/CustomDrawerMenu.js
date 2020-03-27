import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Icon, Divider } from 'react-native-elements';

export default class CustomDrawerMenu extends Component
{

  constructor(props)
  {
    super(props)
    this.images='http://tineye.com/images/widgets/mona.jpg'
    this.items=[
{

  navOptionThumb: 'camera',
      navOptionName: 'MedicineHome',
      screenToNavigate: 'MedicineHome',
},
{
  navOptionThumb: 'image',
      navOptionName: 'Notification',
      screenToNavigate: 'Notification',
},

];
  }


render()
{
  return(
<View style={styles.sideMenuContainer}>
<Image source={require('../image/imag1.png')}
style={styles.sideMenuProfileIcon}/>

<Divider style={{ backgroundColor: 'blue' }} />
<View style={{ width: '100%' }}>
         {this.items.map((item, key) => (
           <View
             style={{
               flexDirection: 'row',
               alignItems: 'center',
               paddingTop: 10,
               paddingBottom: 10,
               backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
             }}
             key={key}>
             <View style={{ marginRight: 10, marginLeft: 20 }}>
               <Icon name={item.navOptionThumb} size={25} color="#808080" />
             </View>
             <Text
               style={{
                 fontSize: 15,
                 color: global.currentScreenIndex === key ? 'red' : 'black',
               }}
               onPress={() => {
                 global.currentScreenIndex = key;
                 this.props.navigation.navigate(item.screenToNavigate);
               }}>
               {item.navOptionName}
             </Text>
           </View>
         ))}
       </View>
    
</View>


  );
}

}

const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    marginTop: 20,
    borderRadius:10,
  },
});
