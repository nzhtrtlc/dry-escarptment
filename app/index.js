import React from 'react';
import { AsyncStorage } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './config/routes';
import { Provider } from 'react-redux';
import store from './config/store';

EStyleSheet.build({
    $primaryColor: '#000'
});


let loggedIn;
const auth = async () => {
    loggedIn = await AsyncStorage.getItem('loggedIn');
    console.log('Logged In: ',loggedIn);
}

auth();

export default () => (
    <Provider store={store}>
        <Navigator loggedIn={loggedIn} />
    </Provider>
)