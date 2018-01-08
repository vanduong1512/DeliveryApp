import React, { Component } from 'react';
import { View, Text, } from 'react-native';

class LeftPanel extends Component {
    static navigationOptions = {
        // title: HomeScreen,
        drawerLabel: 'LeftPanel',
    }

    render() {
        return(
            <View>
                <Text>This is left panel</Text>
            </View>
        );
    };
}

export default LeftPanel;