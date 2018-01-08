import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import LoadProductIcon from '../component/LoadProductIcon';
import LoadProduct from '../component/LoadProduct';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: HomeScreen,
        drawerLabel: 'Home',
        headerLeft:
            <TouchableHighlight onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                <Icon name="bars" size={30} color="#900" />
            </TouchableHighlight>,
    }

    render() {
        var { navigate } = this.props.navigation;
        return (
            <View>
                <View>
                    {
                        LoadProductIcon.map(products => {
                            return <LoadProduct objParent={{ products, navigate }} key={products.key} />
                        })
                    }
                </View>
            </View>
        );
    };
}

export default HomeScreen;