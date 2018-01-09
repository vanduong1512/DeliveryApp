import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Alert } from 'react-native';

class OnEdit extends Component {
    constructor(props) {
        super(props);

        this.onEdit = this._onEdit.bind(this);
        this.onCancel = this._onCancel.bind(this);
    }

    _onCancel() {
        Alert.alert(
            'Notification',
            'Are you sure?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => {this.props.onEdit.navigateHomeScreen()} },
            ],
            { cancelable: false }
        )
    }

    _onEdit() {
        // this.props.onEdit.onEdit();
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.btnTouch} onPress={this.onEdit}>
                    <Text style={styles.textButton}>Edit</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.onCancel} style={styles.btnTouch}>
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

export default OnEdit;