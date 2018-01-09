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
                        <Text style={styles.textNameUser}>Order User: {item.nameUserOrder}</Text>
                        <View style={styles.containerDateTime}>
                            <Text style={styles.textDate}>Order date: {item.orderDate}</Text>
                            <Text style={styles.textDate}>Delivery date: {item.deliveryDate}</Text>
                        </View>
                        <Text style={styles.title}>Place:</Text>
                        <Text style={styles.textPlace}>From Place: {item.fromPlace}</Text>
                        <Text style={styles.textPlace}>To Place: {item.toPlace}</Text>
                        <Text style={styles.title}>Time:</Text>
                        <View style={styles.containerDateTime}>
                            <Text style={styles.textTime}>From: {item.fromTime}</Text>
                            <Text style={styles.textTime}>To: {item.toTime}</Text>
                        </View>
                        <TouchableHighlight style={styles.btnReadMore} onPress={this.props.parent.readMore()}>
                            <Text style={styles.textReadMore}>Read more</Text>
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
        margin: 15,
    },
    textNameUser: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 20,
    },
    containerDateTime: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: 10,
    },
    textTime: {
        fontSize: 15,
        width: 150,
    },
    textDate: {
        fontSize: 15,        
    },
    textPlace: {
        fontSize: 15,
        marginLeft: 10,
    },
    title: {
        fontSize: 20,
        marginLeft: 15,
    },
    btnReadMore: {
        backgroundColor: '#A21E1A',
        width: 100,
        height: 50,
        marginLeft: 10,
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textReadMore: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default DescribeNewsDelivery;