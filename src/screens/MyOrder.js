import React, { Component } from 'react';
import { View, Text, TouchableHighlight, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ListMyOrder extends Component {
    render() {
        var data = [{ key: 1, nameUserOrder: 'van a', orderDate: '1/1/1110', deliveryDate: '1/1/1111', fromPlace: 'a', toPlace: 'b', fromTime: '2:30', toTime: '12:30' },
        { key: 2, nameUserOrder: 'van b', orderDate: '2/2/2220', deliveryDate: '2/2/2222', fromPlace: 'b', toPlace: 'c', fromTime: '2:30', toTime: '12:30' },
        { key: 3, nameUserOrder: 'van c', orderDate: '3/3/3330', deliveryDate: '3/3/3333', fromPlace: 'c', toPlace: 'd', fromTime: '2:30', toTime: '12:30' },];
        return (
            <FlatList
                style={styles.container}
                data={data}
                renderItem={({ item }) =>
                    <View style={styles.container2}>
                        <View style={styles.headerOrder}>
                            <TouchableHighlight style={styles.btnReadMore}>
                                <Text style={styles.textReadMore}>X</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.btnEdit}>
                                <Icon style={{ color:'white', justifyContent: 'center' }} name='edit' size={30}/>
                            </TouchableHighlight>
                        </View>
                        <Text style={styles.textNameUser}>Product Name: {item.productName}</Text>
                        <View style={styles.containerDateTime}>
                            <Text style={styles.textDate}>Order date: {item.orderDate}</Text>
                            <Text style={styles.textDate}>Delivery date: {item.deliveryDate}</Text>
                        </View>
                        <Text style={styles.title}>Place:</Text>
                        <Text>From Place: {item.fromPlace}</Text>
                        <Text>To Place: {item.toPlace}</Text>
                        <Text style={styles.title}>Time:</Text>
                        <View style={styles.containerDateTime}>
                            <Text style={styles.textTime}>From: {item.fromTime}</Text>
                            <Text style={styles.textTime}>To: {item.toTime}</Text>
                        </View>
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
    },
    textTime: {
        fontSize: 18,
        width: 150,
        marginBottom: 10,
    },
    textDate: {
        fontSize: 18,
    },
    textPlace: {
        fontSize: 18
    },
    title: {
        fontSize: 20,
        marginLeft: 15,
    },
    btnReadMore: {
        backgroundColor: '#A21E1A',
        width: 40,
        height: 50,
        marginTop: 15,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnEdit: {
        backgroundColor: '#80D436',
        width: 40,
        height: 50,
        marginTop: 15,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textReadMore: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    },
    headerOrder: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    }
});

export default ListMyOrder;