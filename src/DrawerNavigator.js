import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DrawerNavigator } from 'react-navigation';

import HomeDrawer from './screens/HomeScreen';
import LeftPanel from './component/LeftPanel';
import NewsDeliveryDrawer from './screens/NewsDelivery';
import MyOrder from './screens/MyOrder';
import { Text } from 'react-native';

const DrawerNavigation = DrawerNavigator({
    HomeDrawer: {
        screen: HomeDrawer,
        navigationOptions: ({ navigation }) => ({
            title: 'Home Screen',
            headerLeft: (
                <TouchableOpacity
                    style={{ margin: 10 }}
                    onPress={() => navigation.navigate('DrawerOpen')}
                >
                    <Icon name="bars" size={30} />
                </TouchableOpacity>
            ),
        })
    },
    NewsDeliveryDrawer: {
        screen: NewsDeliveryDrawer,
        navigationOptions: ({ navigation }) => ({
            title: 'News Delivery',
            drawerLabel: 'News Delivery',
            headerLeft: (
                <TouchableOpacity
                    style={{ margin: 10 }}
                    onPress={() => navigation.navigate('DrawerOpen')}
                >
                    <Icon name="bars" size={30} />
                </TouchableOpacity>
            ),
        })
    },
    MyOrder: {
        screen: MyOrder,
        navigationOptions: ({ navigation }) => ({
            title: 'My Order',
            drawerLabel: 'News Delivery',
            headerLeft: (
                <TouchableOpacity
                    style={{ margin: 10 }}
                    onPress={() => navigation.navigate('DrawerOpen')}
                >
                    <Icon name="bars" size={30} />
                </TouchableOpacity>
            ),
        })
    },
});

export default DrawerNavigation;