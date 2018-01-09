import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import TimePicker from 'react-native-modal-datetime-picker';
import RadioForm, { RadioButton } from 'react-native-simple-radio-button';
import { CheckBox } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

import EditInfo from '../component/OrderInfo';
import ButtonEdit from '../component/onEdit';

class EditOrderFlower extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //parent
            isUgent: false,
            value: 0,
            //child
            nameProduct: '',
            phoneNumber: '',
            orderDate: '',
            deliveryDate: '',
            fromPlace: '',
            toPlace: '',
            fromTime: '00:00',
            toTime: '00:00',
            transportationCosts: 0,
            bail: 0,
            decribe: '',
        }

        this.getNameProduct = this._getNameProduct.bind(this);
        this.getPhoneNumber = this._getPhoneNumber.bind(this);
        this.getOrderDate = this._getOrderDateFormChild.bind(this);
        this.getDeliveryDate = this._getDeliveryDateFromChild.bind(this);
        this.getFromPlace = this._getFromPlaceFromChild.bind(this);
        this.getToPlace = this._getToPlaceFromChild.bind(this);
        this.getFromTime = this._getFromTimeFromChild.bind(this);
        this.getToTime = this._getToTimeFromChild.bind(this);
        this.getTransportationCosts = this._getTransportationCostsFromChild.bind(this);
        this.getBail = this._getBailFromChild.bind(this);
        this.getDecribe = this._getDecribeFromChild.bind(this);

        this.navigateHomeScreen = this._navigateHomeScreen.bind(this);
        this.onEdit = this._onEdit();
    }

    _navigateHomeScreen(){
        this.props.navigation.navigate('HomeScreen');
    }

    _onEdit(){

    }

    _getNameProduct(nameProduct) {
        this.setState({ nameProduct });
    }

    _getPhoneNumber(phoneNumber) {
        this.setState({ phoneNumber })
    }

    _getOrderDateFormChild(orderDate) {
        this.setState({ orderDate: orderDate });
    }

    _getDeliveryDateFromChild(deliveryDate) {
        this.setState({ deliveryDate: deliveryDate })
    }

    _getFromPlaceFromChild(fromPlace) {
        this.setState({ fromPlace })
    }

    _getToPlaceFromChild(toPlace) {
        this.setState({ toPlace })
    }

    _getFromTimeFromChild(fromTime) {
        this.setState({ fromTime })
    }

    _getToTimeFromChild(toTime) {
        this.setState({ toTime })
    }

    _getTransportationCostsFromChild(transportationCosts) {
        this.setState({ transportationCosts })
    }

    _getBailFromChild(bail) {
        this.setState({ bail })
    }

    _getDecribeFromChild(decribe) {
        this.setState({ decribe })
    }

    _onEdit() {

    }

    render() {
        var radio_props = [
            { label: '  big ', value: 0 },
            { label: 'medium', value: 1 },
            { label: ' small', value: 2 }
        ];
        return (
            <ScrollView>
                <View>
                    <EditInfo getData={{
                        data: this.state,
                        getNameProduct: this.getNameProduct,
                        getPhoneNumber: this.getPhoneNumber,
                        getOrderDate: this.getOrderDate,
                        getDeliveryDate: this.getDeliveryDate,
                        getFromPlace: this.getFromPlace,
                        getToPlace: this.getToPlace,
                        getFromTime: this.getFromTime,
                        getToTime: this.getToTime,
                        getTransportationCosts: this.getTransportationCosts,
                        getBail: this.getBail,
                        getDecribe: this.getDecribe,
                    }} />
                    <Text>Size: </Text>
                    <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        formHorizontal={false}
                        labelHorizontal={true}
                        buttonColor={'#2196f3'}
                        animation={true}
                        onPress={(value) => { this.setState({ value: value }) }}
                        buttonWrapStyle={{ marginLeft: 10 }}
                    />
                    <CheckBox
                        style={{ alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center' }}
                        title='Ugent'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.isUgent}
                        onPress={() => this.setState((prev, props) => ({ isUgent: !prev.isUgent }))}
                    />
                    <ButtonEdit onEdit={{ onEdit: this.onEdit, navigateHomeScreen: this.navigateHomeScreen }} />
                </View>
            </ScrollView>
        );
    }
}

export default EditOrderFlower;