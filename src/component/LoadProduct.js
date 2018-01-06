import React, { Component } from 'react';
import { Image, TouchableHighlight } from 'react-native';

class LoadProduct extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight
                onPress={() => alert('popup form')}
            >
                <Image
                    source={this.props.path}
                />
            </TouchableHighlight>
        );
    }
}

export default LoadProduct;