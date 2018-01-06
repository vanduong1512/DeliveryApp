import React, { Component } from 'react';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { StackNavigator, NavigationActions } from 'react-navigation';

class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Login',
    }

    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            passWord: '',
        };

        this.onSubmit = this._onSubmit.bind(this);
    }

    _onSubmit() {
        this.props.navigation.navigate('HomeScreen');

        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'HomeScreen' }),
            ]
        })
        this.props.navigation.dispatch(resetAction)
    }

    render() {
        return (
            <View>
                <Text>This is login screen</Text>
                <TextInput
                    placeholder='User Name'
                    onChangeText={(userName) => this.setState({ userName })}
                />
                <TextInput
                    placeholder='Password'
                    onChangeText={(passWord) => this.setState({ passWord })}
                    secureTextEntry={true}
                />
                <TouchableOpacity>
                    <Text onPress={this.onSubmit}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    };
}

export default LoginScreen;