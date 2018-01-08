import React, { Component } from 'react';

import { View, Text, TextInput, TouchableOpacity,Button } from 'react-native';

import { StackNavigator, NavigationActions } from 'react-navigation';
import { userService } from '../API/userService';
class RegisterScreen extends Component {
    static navigationOptions = {
        title: 'Register',
    }

    constructor(props) {
        super(props);

        this.state = {
            userName: '',
                email: '',
                password: '',
                phoneNumber: '',
                customerName:'',
                address: '',
                roles: ['Admin']
        };

        this.onSubmit = this._onSubmit.bind(this);
    }

    _onSubmit() {
        userService.register(this.state).then(user=>{
            {
                
                  
                    this.props.navigation.navigate('LoginScreen');
                
                
                
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
                  <TextInput
                    placeholder='customerName'
                    onChangeText={(customerName) => this.setState({ customerName })}
                   
                />
                <TextInput
                    placeholder='Email'
                    onChangeText={(email) => this.setState({ email })}
                   
                />
                <TextInput
                    placeholder='phoneNumber'
                    onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
                   
                />
              
                <TextInput
                    placeholder='address'
                    onChangeText={(address) => this.setState({ address })}
                  
                />
                <TouchableOpacity>
                    <Button onPress={this.onSubmit} title="Register"
                            color="#841584"
                            accessibilityLabel="Register"/>
                </TouchableOpacity>
            </View>
            
        );
    };
}

export default  RegisterScreen  ;