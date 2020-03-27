import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HideStatus from './HideStatus.js';

// class SplashScreen extends Component {
//   render() {
//     const viewStyles = [styles.container, { backgroundColor: 'orange' }];
//     const textStyles = {
//       color: 'white',
//       fontSize: 40,
//       fontWeight: 'bold'
//     };
//
//     return (
//       <View style={viewStyles}>
//         <Text style={textStyles}>
//           Splash Screen
//         </Text>
//       </View>
//     );
//   }
// }

export default class Start extends Component {

  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);

    this.state = { isLoading: true }
  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }

  // async componentDidMount() {
  //   // Preload data from an external API
  //   // Preload data using AsyncStorage
  //   const data = await this.performTimeConsumingTask();
  //
  //   if (data !== null) {
  //     this.setState({ isLoading: false });
  //   }
  // }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('LogIn');
    }
  }
  render() {
    if (this.state.isLoading) {
      return <HideStatus />;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          Reload the App to see a splash screen
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
