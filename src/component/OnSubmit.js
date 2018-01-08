import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

class OnSubmit extends Component {
    render() {
        return(
            <View>
                <TouchableHighlight>
                    <Text>Submit</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text>Cancel</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default OnSubmit;