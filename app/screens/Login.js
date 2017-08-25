import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View,Button,Alert,AsyncStorage} from 'react-native';

class Login extends React.Component {

  async signInWithFacebook() {
    const fields = ['id','name','first_name','last_name','email','cover','picture'];
    const APP_ID = '137028683571424';
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(APP_ID, {
        permissions: ['public_profile','email'],
      });
    if (type === 'success') {
      const response = await fetch(
        `https://graph.facebook.com/me?fields=${fields}&access_token=${token}`);
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

  setLoggedIn = async () => dispatch => {
    //await AsyncStorage.setItem('loggedIn',true);
    dispatch => {
      dispatch({
        type : 'LOGIN'
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => this.signInWithFacebook()} title="Login with Facebook"/>
        <Button onPress={() => this.props.dispatch(this.setLoggedIn())} title="Login"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default connect()(Login);