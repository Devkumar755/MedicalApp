import * as React from 'react';
import { View ,TouchableOpacity} from 'react-native';
import { Button, Paragraph, Menu, Divider, Provider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
//import { withNavigation } from 'react-navigation';

 class MyComponent extends React.Component {
  state = {
    visible: false,
  };

  _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });

  render() {
    return (
      <Provider>
        <View
          style={{
             paddingTop:5,
             paddingRight:5,
            flexDirection: 'row',
            justifyContent: 'center'
          }}>
          <Menu
            visible={this.state.visible}
            onDismiss={this._closeMenu}
            anchor={
                <TouchableOpacity
            style={{backgroundColor:'transparent',height:50,width:50}}
                onPress={this._openMenu}
                >
                      <Icon name='braille' style={{marginLeft:10}}  color={'#1f2121'} size={40} />
                </TouchableOpacity>
             
            }
          >
            <Menu.Item onPress={() => {
                this.props.navigatin.navigate('Orders')
            }} title="My Order" />
         
          </Menu>
        </View>
      </Provider>
    );
  }
}
export default MyComponent;