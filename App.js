import React from 'react';
import { StyleSheet, Text, View,Button,Alert} from 'react-native';

export default class App extends React.Component {


  async signInWithFacebook() {
    const APP_ID = '137028683571424';
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(APP_ID, {
        permissions: ['public_profile'],
      });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?fields=id,name,picture&access_token=${token}`);
      console.log(JSON.stringify(response));
      Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );
    }
  }

  async signInWithGoogle() {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: '480037108473-spcjht46tdp0n3830sfrdfnact33jago.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        console.log('Google OK: ',JSON.stringify(result));
        return result.accessToken;
      } else {
        return {cancelled: true};
      }
    } catch(e) {
      console.log('Google Error: ',JSON.stringify(e));
      return {error: true};
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => this.signInWithFacebook()} title="Login with Facebook"/>
        <Button style={{marginTop:10}} onPress={() => this.signInWithGoogle()} title="Login with Google"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
