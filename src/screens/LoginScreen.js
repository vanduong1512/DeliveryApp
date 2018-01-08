import React, { Component } from 'react';

import { View, Text, TextInput, TouchableOpacity,Button } from 'react-native';

<<<<<<< HEAD
import { StackNavigator, NavigationActions } from 'react-navigation';
import { userService } from '../API/userService';
import {connect} from 'react-redux';
=======
import { StackNavigator, NavigationActions, } from 'react-navigation';
>>>>>>> 9e621e25f697fb7d4b82a93317cc2ead9402f4fa

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
        userService.login(this.state.userName,this.state.passWord).then(user=>{
            {
                if(user)
                {
                    var {dispatch}=this.props;
                    dispatch({type:'user_login_success',user:user});
                    this.props.navigation.navigate('HomeScreen');
                    const resetAction = NavigationActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({ routeName: 'HomeScreen' }),
                        ]
                    })
                    this.props.navigation.dispatch(resetAction)
                }
                
            }
        }
        );
        
        
    }

    render() {
        return (
            <View>
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
                    <Button onPress={this.onSubmit} title="Login"
                            color="#841584"
                            accessibilityLabel="Login"/>
                </TouchableOpacity>
            </View>
            
        );
    };
}
function mapStateToProps(state) {
    const  user  = state.user;
    return {
        user
    };
}

const LoginPage = connect(mapStateToProps)(LoginScreen);
export default  LoginPage  ;