import React, { Component } from 'react';
import { View, Text, } from 'react-native';

class NewsScreen extends Component {
    render() {
        return(
            <View>
                <text>User Order: {this.props.userOrder}</text>
                <Text>Product's Name: {this.props.productName}</Text>
                <Text>Phone number: {this.props.phoneNumber}</Text>
                <Text>Date order: {this.props.dateOrder}</Text>
                <Text>Date delivery: {this.props.dateDelivery}</Text>
                <Text>From place: {this.props.fromPlace}</Text>
                <Text>To place: {this.props.toPlace}</Text>
                <Text>From time: {this.props.fromTime}</Text>
                <Text>To Time: {this.props.toTime}</Text>
                <Text>Transportation Costs: {this.props.transportationCosts}</Text>
                <Text>Bail: {this.props.bail}</Text>
                <Text>Describe: {this.props.describe}</Text>
                <Text>Size: {this.props.size}</Text>
            </View>
        );
    }
}

export default NewsScreen;