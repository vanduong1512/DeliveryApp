import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import LoadProductIcon from '../component/LoadProductIcon';
import LoadProduct from '../component/LoadProduct';

class HomeScreen extends Component {
    static navigationOptions = {
        title: HomeScreen,
    }

    render() {
        return (
            <View>
                <View>
                    {
                        LoadProductIcon.map(e => {
                            return <LoadProduct path={e.path} key={e.key} />
                        })
                    }
                </View>
            </View>
        );
    };
}

export default HomeScreen;