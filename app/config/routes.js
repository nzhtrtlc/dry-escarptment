import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StatusBar, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import Home from '../screens/Home';
import Login from '../screens/Login';


const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            headerStyle: {
                backgroundColor: '#3F51B5',
            },
            headerTitleStyle: {
                color: '#94a1e6'
            },
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: '',
            headerStyle: {
                backgroundColor: 'transparent',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0
            },
            headerTitleStyle: {
                color: '#94a1e6'
            },
        }
    }
}, {
        cardStyle: { paddingTop: StatusBar.currentHeight }
    });

export default App = ({loggedIn}) => (
    loggedIn == true ? <HomeStack /> : <Login />
)