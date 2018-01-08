import React, { Component } from 'react';
import {
    View, Text, Image, TouchableHighlight, StyleSheet,
    ScrollView
} from 'react-native';
import { List } from 'react-native-elements'
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import LoadProductIcon from '../component/LoadProductIcon';
import LoadProduct from '../component/LoadProduct';
import {connect} from 'react-redux';
class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var { navigate } = this.props.navigation;
        return (
<<<<<<< HEAD
            <View>
                <View>
                    <Text>{this.props.user.fullName}</Text>
                    {
                        LoadProductIcon.map(e => {
                            return <LoadProduct path={e.path} key={e.key} />
                        })
                    }
=======
            <View style={styles.container}>
                <View style={styles.containerProduct}>
                    <ScrollView>
                        <List>
                            {
                                LoadProductIcon.map(products => {
                                    return <LoadProduct objParent={{ products, navigate }} key={products.key} />
                                })
                            }
                        </List>
                    </ScrollView>
>>>>>>> 9e621e25f697fb7d4b82a93317cc2ead9402f4fa
                </View>
            </View>
        );
    };
}
<<<<<<< HEAD
function mapStateToProps(state) {
    const  user  = state.user;
    return {
        user
    };
}
const HomePage = connect(mapStateToProps)(HomeScreen);
export default HomePage;
=======

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerProduct: {
        flex: 1,
        flexDirection: 'column',


    }
});

export default HomeScreen;
>>>>>>> 9e621e25f697fb7d4b82a93317cc2ead9402f4fa
