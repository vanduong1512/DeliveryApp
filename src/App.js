import { StackNavigator, NavigationActions } from 'react-navigation';

import { Text } from 'react-native';

import LoginScreen from './screens/LoginScreen';
import DrawerNavigation from './DrawerNavigator';

//test
import OrderFlower from './screens/OrderProduct/OrderFlower';
import OrderInfo from './component/OrderInfo';
import RegisterScreen from'./screens/RegisterScreen'
const navigation = StackNavigator(
    {
        LoginScreen: { screen: LoginScreen },
        HomeScreen: { screen: DrawerNavigation },
        OrderFlower: { screen: OrderFlower },
        RegisterScreen:{screen:RegisterScreen},
    }
);

export default navigation;