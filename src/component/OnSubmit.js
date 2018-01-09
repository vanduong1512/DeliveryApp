import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Alert } from 'react-native';

class OnSubmit extends Component {
    constructor(props) {
        super(props);
    
        this.onSubmit = this._onSubmit.bind(this);
        this.onCancel = this._onCancel.bind(this);
    }

    _onSubmit() {
        this.props.onSubmit.onSubmit();
    }

    _onCancel() {
        Alert.alert(
            'Notification',
            'Are you sure?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => {this.props.onSubmit.navigateHomeScreen()} },
            ],
            { cancelable: false }
        )
    }

    render() {
        return(
            <View style={styles.container}>
                <TouchableHighlight style={styles.btnTouch} onPress={this.onSubmit}>
                    <Text style={styles.textButton}>Submit</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.btnTouch} onPress={this.onCancel}>
                    <Text style={styles.textButton}>Cancel</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    btnTouch: {
        backgroundColor: '#A21E1A',
        width: 180,
        height: 50,
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
    },
})

export default OnSubmit;