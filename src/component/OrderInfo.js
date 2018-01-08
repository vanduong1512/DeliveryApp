import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { CheckBox } from 'react-native-elements';

class OrderInfo extends Component {
    constructor(props) {
        super(props);

        var today = new Date();

        this.state = {
            orderDate: today.getDate() + "/" + parseInt(today.getMonth() + 1) + "/" + today.getFullYear(),
            deliveryDate: today.getDate() + "/" + parseInt(today.getMonth() + 1) + "/" + today.getFullYear(),
            fromPlace: '',
            toPlace: '',
            fromTime: '00:00',
            toTime: '00:00',
            transportationCosts: 0,
            bail: 0,
            decribe: '',

            isOrderDateTimePickerVisible: false,
            isBail: false,
            isToTimePickerVisible: false,
            isFromTimePickerVisible: false,
            isDeliveryDateTimePickerVisible: false,
        };

        //date
        this.handleOrderDatePicker = this._handleOrderDatePicker.bind(this);
        this.showOrderDatePicker = this._showOrderDatePicker.bind(this);
        this.hideOrderDatePicker = this._hideOrderDatePicker.bind(this);

        this.handleDeliveryDatePicker = this._handleDeliveryDatePicker.bind(this);
        this.showDeliveryDatePicker = this._showDeliveryDatePicker.bind(this);
        this.hideDeliveryDatePicker = this._hideDeliveryDatePicker.bind(this);

        //time
        this.handleFromTime = this._handleFromTime.bind(this);
        this.showFromTime = this._showFromTime.bind(this);
        this.hideFromTime = this._hideFromTime.bind(this);

        this.handleToTime = this._handleToTime.bind(this);
        this.showToTime = this._showToTime.bind(this);
        this.hideToTime = this._hideToTime.bind(this);
    }

    _showOrderDatePicker() { this.setState({ isOrderDateTimePickerVisible: true }); }

    _hideOrderDatePicker() {this.setState({ isOrderDateTimePickerVisible: false }); };

    _handleOrderDatePicker(date) {
        var tempDate = date.getDate() + "/" + parseInt(date.getMonth() + 1) + "/" + date.getFullYear();
        this.setState({
            orderDate: tempDate,
         });

         this.props.getData.getOrderDate(tempDate);
        this.hideOrderDatePicker();
    }

    _showDeliveryDatePicker() { this.setState({ isDeliveryDateTimePickerVisible: true }); }

    _hideDeliveryDatePicker() { this.setState({ isDeliveryDateTimePickerVisible: false }); };

    _handleDeliveryDatePicker(date) {
        var tempDate = date.getDate() + "/" + parseInt(date.getMonth() + 1) + "/" + date.getFullYear();
        this.setState({
            deliveryDate: tempDate,
         });

         this.props.getData.getDeliveryDate(tempDate);

        this.hideDeliveryDatePicker();
    }

    _showFromTime() { this.setState({ isFromTimePickerVisible: true }); }

    _hideFromTime() { this.setState({ isFromTimePickerVisible: false, }); }

    _handleFromTime(time) { 
        var tempTime = time.getHours() + ':' + time.getMinutes();
        this.setState({ fromTime: tempTime });
        this.props.getData.getFromTime(tempTime)
        this.hideFromTime();
     }

     _showToTime() { this.setState({ isToTimePickerVisible: true }) }

     _hideToTime() { this.setState({ isToTimePickerVisible: false }) }

     _handleToTime(time) {
        var tempTime = time.getHours() + ':' + time.getMinutes();
        this.setState({ toTime: tempTime });

        this.props.getData.getToTime(tempTime);
        this.hideToTime();
     }

    render() {
        // this.props.objProps.getDataFromChild(this.state);
        return (
            <View>
                <TouchableOpacity onPress={this.showOrderDatePicker}>
                    <Text>Date order</Text>
                    <Text>{this.state.orderDate.toString()}</Text>
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isOrderDateTimePickerVisible}
                    onConfirm={this.handleOrderDatePicker}
                    onCancel={this.hideOrderDatePicker}
                />
                <TouchableOpacity onPress={this.showDeliveryDatePicker}>
                    <Text>Date Date delivery</Text>
                    <Text>{this.state.deliveryDate.toString()}</Text>
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isDeliveryDateTimePickerVisible}
                    onConfirm={this.handleDeliveryDatePicker}
                    onCancel={this.hideDeliveryDatePicker}
                />
                <TextInput
                    placeholder="From Place"
                    onChangeText={(fromPlace) => {
                        this.setState({ fromPlace });
                        this.props.getData.getFromPlace(fromPlace)
                    }}
                />
                <TextInput
                    placeholder="To Place"
                    onChangeText={(toPlace) => {
                        this.setState({ toPlace });
                        this.props.getData.getToPlace(toPlace)
                    }}
                />
                <Text>Time</Text>
                <TouchableOpacity onPress={this.showFromTime}>
                    <Text>From: {this.state.fromTime}</Text>
                </TouchableOpacity>
                <DateTimePicker
                    mode='time'
                    isVisible={this.state.isFromTimePickerVisible}
                    onConfirm={this.handleFromTime}
                    onCancel={this.hideFromTime}
                />
                <TouchableOpacity onPress={this.showToTime}>
                    <Text>To: {this.state.toTime}</Text>
                </TouchableOpacity>
                <DateTimePicker
                    mode='time'
                    isVisible={this.state.isToTimePickerVisible}
                    onConfirm={this.handleToTime}
                    onCancel={this.hideToTime}
                />
                <TextInput
                    placeholder='Transportation Costs'
                    keyboardType='numeric'
                    onChangeText={(transportationCosts) => { 
                        this.setState({ transportationCosts })
                        this.props.getData.getTransportationCosts(transportationCosts)
                    }}
                />
                <CheckBox
                    title='Paid'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.isBail}
                    onPress={() => this.setState((prev, props) => ({ isBail: !prev.isBail }))}
                />
                {
                    this.state.isBail &&
                    <TextInput
                    keyboardType='numeric'
                        placeholder='bail'
                        onChangeText={(bail) => {
                            this.setState({ bail })
                            this.props.getData.getBail(bail);
                        }}
                    />
                }
                <TextInput
                    placeholder='Describe'
                    maxLength={60}
                    onChangeText={(decribe) => {
                        this.setState({ decribe })
                        this.props.getData.getDecribe(decribe);
                    }}
                />
            </View >
        );
    }
}

export default OrderInfo;