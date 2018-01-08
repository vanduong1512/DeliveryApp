import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import LoadProductIcon from '../component/LoadProductIcon';
import LoadProduct from '../component/LoadProduct';
import {connect} from 'react-redux';
class HomeScreen extends Component {
    static navigationOptions = {
        title: HomeScreen,
    }

    render() {
        return (
            <View>
                <View>
                    <Text>{this.props.user.fullName}</Text>
                    {
                        LoadProductIcon.map(e => {
                            return <LoadProduct path={e.path} key={e.key} />
                        })
                    }
                </View>
            </View>
        );
    };
}
function mapStateToProps(state) {
    const  user  = state.user;
    return {
        user
    };
}
const HomePage = connect(mapStateToProps)(HomeScreen);
export default HomePage;