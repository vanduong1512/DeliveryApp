import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TimePicker from 'react-native-modal-datetime-picker';
import RadioForm, { RadioButton } from 'react-native-simple-radio-button';
import { CheckBox } from 'react-native-elements';

import CommonInfo from '../../component/OrderInfo';
import OnSubmit from '../../component/OnSubmit';

class OrderFlower extends Component {
    static navigationOptions = {
        title: 'Order Flower',
    }

    constructor(props) {
        super(props);

        this.state = {
            isUgent: false,
            value: 1,
        }
    }

    render() {
        var radio_props = [
            { label: 'big', value: 0 },
            { label: 'medium', value: 1 },
            { label: 'small', value: 2 }
        ];
        return (
            <View>
                <CommonInfo />
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
                    title='Ugent'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.isUgent}
                    onPress={() => this.setState((prev, props) => ({ isUgent: !prev.isUgent }))}
                />
                <OnSubmit/>
            </View>
        );
    };
}

export default OrderFlower;