import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';

class Home extends React.Component {

    async setLoggedOut() {
        await AsyncStorage.setItem('loggedIn',false);
        return dispatch => {
            dispatch({
                type: 'LOGOUT'
            })
        }
    }

    render() {
        return (
            <View >
                <Text> Welcome to Home</Text>

                <Button onPress={() => this.props.dispatch(this.setLoggedOut())} title="Logout" />
            </View >
        )
    }
}

export default connect()(Home);