import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight, StyleSheet } from 'react-native';
import { orderService } from '../API/orderService';
import DescribeNewsDelivery from '../component/DescribeNewsDelivery';

class NewsDelivery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [{ key: 1, nameUserOrder: 'van a', orderDate: '1/1/1110', deliveryDate: '1/1/1111', fromPlace: 'a', toPlace: 'b', fromTime: '2:30', toTime: '12:30' },
            { key: 2, nameUserOrder: 'van b', orderDate: '2/2/2220', deliveryDate: '2/2/2222', fromPlace: 'b', toPlace: 'c', fromTime: '2:30', toTime: '12:30' },
            { key: 3, nameUserOrder: 'van c', orderDate: '3/3/3330', deliveryDate: '3/3/3333', fromPlace: 'c', toPlace: 'd', fromTime: '2:30', toTime: '12:30' },],
        };

        this.readMore = this._readMore.bind(this);
    }
    componentWillMount () {
       
        orderService.getOrder().then(data=>{this.setState({data:data})});
       // server.getSomeData(data => self.setState({ data: data }));
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