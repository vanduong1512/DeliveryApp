import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { CheckBox } from 'react-native-elements';

class OrderInfo extends Component {
    constructor(props) {
        super(props);

        var today = new Date();

        this.state = {
            nameProduct: '',
            phoneNumber: '',
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

    _hideOrderDatePicker() { this.setState({ isOrderDateTimePickerVisible: false }); };

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
                <Text style={styles.textLabel}>Product's Name</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Product Name'
                    onChangeText={(nameProduct) => {
                        this.setState({ nameProduct });
                        this.props.getData.getNameProduct(nameProduct);
                    }}
                />
                <Text style={styles.textLabel}>Phone Number</Text>
                <TextInput
                    style={styles.textInput}
                    keyboardType='numeric'
                    placeholder='Phone Number'
                    onChangeText={(phoneNumber) => {
                        this.setState({ phoneNumber });
                        this.props.getData.getPhoneNumber(phoneNumber);
                    }}
                />
                <TouchableOpacity 
                style={ styles.btnTouchPicker }
                onPress={this.showOrderDatePicker}>
                    <Text style={styles.textButtonPicker}>Date order</Text>
                    <Text style={styles.textButtonPicker && {color: '#B42323', fontWeight: 'bold',}}>{this.state.orderDate.toString()}</Text>
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isOrderDateTimePickerVisible}
                    onConfirm={this.handleOrderDatePicker}
                    onCancel={this.hideOrderDatePicker}
                />
                <TouchableOpacity
                style={ styles.btnTouchPicker }
                 onPress={this.showDeliveryDatePicker}>
                    <Text style={styles.textButtonPicker}>Date delivery</Text>
                    <Text style={styles.textButtonPicker && {color: '#B42323', fontWeight: 'bold',}}>{this.state.deliveryDate.toString()}</Text>
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isDeliveryDateTimePickerVisible}
                    onConfirm={this.handleDeliveryDatePicker}
                    onCancel={this.hideDeliveryDatePicker}
                />
                <Text style={styles.textLabel}>Place</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="From Place"
                    onChangeText={(fromPlace) => {
                        this.setState({ fromPlace });
                        this.props.getData.getFromPlace(fromPlace)
                    }}
                />
                <Text style={{margin: 5}}>To</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="To Place"
                    onChangeText={(toPlace) => {
                        this.setState({ toPlace });
                        this.props.getData.getToPlace(toPlace)
                    }}
                />
                <Text style={styles.textLabel}>Time</Text>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap:'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity 
                style={styles.btnTouchTimePicker}
                onPress={this.showFromTime}>
                    <Text style={styles.textButtonPicker}>From: {this.state.fromTime}</Text>
                </TouchableOpacity>
                <DateTimePicker
                    mode='time'
                    isVisible={this.state.isFromTimePickerVisible}
                    onConfirm={this.handleFromTime}
                    onCancel={this.hideFromTime}
                />
                <TouchableOpacity 
                style={styles.btnTouchTimePicker}
                onPress={this.showToTime}>
                    <Text style={styles.textButtonPicker}>To:{this.state.toTime}</Text>
                </TouchableOpacity>
                <DateTimePicker
                    mode='time'
                    isVisible={this.state.isToTimePickerVisible}
                    onConfirm={this.handleToTime}
                    onCancel={this.hideToTime}
                />
                </View>
                <Text style={styles.textLabel}>Transportation Costs: </Text>
                <TextInput
                    style={styles.textInput}
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
                    <View>
                        <Text style={styles.textLabel}>Bail</Text>
                        <TextInput
                            style={styles.textInput}
                            keyboardType='numeric'
                            placeholder='bail'
                            onChangeText={(bail) => {
                                this.setState({ bail })
                                this.props.getData.getBail(bail);
                            }}
                        />
                    </View>
                }
                <Text style={styles.textLabel}>Describe</Text>
                <TextInput
                    style={styles.textInput}
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

const styles = StyleSheet.create({
    container: {

    },
    textInput: {
        fontSize: 15,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLabel: {
        fontSize: 25,
        alignItems: 'center',
        marginLeft: 5,
    },
    btnTouchPicker: {
        height: 45,
        backgroundColor: '#3580B8',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButtonPicker: {
        color: 'white',
        fontSize: 15,
    }, 
    btnTouchTimePicker: {
        height: 45,
        width: 150,
        backgroundColor: '#99BAEB',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default OrderInfo;