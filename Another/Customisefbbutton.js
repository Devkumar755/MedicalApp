import React, { Component } from 'react'
import { Button } from 'react-native'

import { LoginManager ,
  AccessToken,
  GraphRequest,
  GraphRequestManager,

} from 'react-native-fbsdk'

export default class Customisefbbutton extends Component {
  handleFacebookLogin () {
    LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled')
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            alert(data.accessToken.toString());

            const processRequest = new GraphRequest(
              '/me?fields=name,picture.type(large)',
              null,
              this.get_Response_Info
            );
            // Start the graph request.
            new GraphRequestManager().addRequest(processRequest).start();
          });
          console.log('Login success with permissions: ' + result.grantedPermissions.toString())
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error)
      }
    )
  }
  render () {
    return (
      <Button
        onPress={this.handleFacebookLogin}
        title="Continue with fb"
        color="#4267B2"
      />
    )
  }
}
