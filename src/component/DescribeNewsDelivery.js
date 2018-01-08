import React, { Component } from 'react';
import { View, Text, TouchableHighlight, FlatList, StyleSheet } from 'react-native';

class DescribeNewsDelivery extends Component {
    render() {
        return (
            <FlatList
                style={styles.container}
                data={this.props.parent.data}
                renderItem={({ item }) =>
                    <View style={styles.container2}>
                        <Text>Order User: {item.nameUserOrder}</Text>
                        <Text>Product's Name: {item.nameProduct}</Text>
                        <Text>Order date: {item.orderDate}</Text>
                        <Text>Delivery date: {item.deliveryDate}</Text>
                        <Text>Place:</Text>
                        <Text>From Place: {item.fromPlace}</Text>
                        <Text>To Place: {item.toPlace}</Text>
                        <Text>Time:</Text>
                        <Text>From: {item.fromTime}</Text>
                        <Text>To: {item.toTime}</Text>
                        <TouchableHighlight onPress={this.props.parent.readMore()}>
                            <Text>Read more...</Text>
                        </TouchableHighlight>
                    </View>
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#AFB4AC',
    },
    container2: {
        backgroundColor: '#F7FAF5',
        margin: 10,
    }
});

export default DescribeNewsDelivery;