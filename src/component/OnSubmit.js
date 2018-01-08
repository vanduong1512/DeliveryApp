import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

class OnSubmit extends Component {
    constructor(props) {
        super(props);
    
        this.onSubmit = this._onSubmit.bind(this);
    }

    _onSubmit() {
        this.props.onSubmit();
    }

    render() {
        return(
            <View>
                <TouchableHighlight onPress={this.onSubmit}>
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