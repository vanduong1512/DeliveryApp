import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight, StyleSheet } from 'react-native';

import DescribeNewsDelivery from '../component/DescribeNewsDelivery';

class NewsDelivery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [{ key: 1, nameUserOrder: 'van a', nameProduct: 'hoa', orderDate: '1/1/1110', deliveryDate: '1/1/1111', fromPlace: 'a', toPlace: 'b', fromTime: '2:30', toTime: '12:30' },
            { key: 2, nameUserOrder: 'van b', nameProduct: 'may lanh', orderDate: '2/2/2220', deliveryDate: '2/2/2222', fromPlace: 'b', toPlace: 'c', fromTime: '2:30', toTime: '12:30' },
            { key: 3, nameUserOrder: 'van c', nameProduct: 'tai lieu', orderDate: '3/3/3330', deliveryDate: '3/3/3333', fromPlace: 'c', toPlace: 'd', fromTime: '2:30', toTime: '12:30' },],
        };

        this.readMore = this._readMore.bind(this);
    }

    _readMore(){

    }

    render() {
        let showList = null;
        if (this.state.data === []){
            showList = <Text>No order</Text>
        }
        else {
            showList = <DescribeNewsDelivery parent={{ data: this.state.data, readMore: this.readMore }}/>
        }
        return (
            <View style={{ backgroundColor: '#AFB4AC' }}>
                {showList}
            </View>
        );
    }
}

export default NewsDelivery;