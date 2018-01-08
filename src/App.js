import { StackNavigator, NavigationActions } from 'react-navigation';

import {Text} from 'react-native';

import LoginScreen from './screens/LoginScreen';
import DrawerNavigation from './DrawerNavigator';

//test
import OrderFlower from './screens/OrderProduct/OrderFlower';
import OrderInfo from './component/OrderInfo';

const navigation = StackNavigator(
    {
        LoginScreen: { screen: LoginScreen },
        HomeScreen: { screen: DrawerNavigation },
        OrderFlower: { screen: OrderFlower },
    }
);

export default navigation;