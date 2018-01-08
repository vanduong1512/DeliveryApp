import React, { Component } from 'react';
import { Image, TouchableHighlight } from 'react-native';

class LoadProduct extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight onPress={() => this.props.objParent.navigate(this.props.objParent.products.navigation)}>
                <Image
                    source={this.props.objParent.products.path}
                />
            </TouchableHighlight>
        );
    }
}

export default LoadProduct;