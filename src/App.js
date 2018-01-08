import { StackNavigator, NavigationActions } from 'react-navigation';

import { Text } from 'react-native';

import LoginScreen from './screens/LoginScreen';
<<<<<<< HEAD
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
const navigation = StackNavigator(
    {
        RegisterScreen:{ screen: RegisterScreen },
=======
import DrawerNavigation from './DrawerNavigator';

//test
import OrderFlower from './screens/OrderProduct/OrderFlower';
import OrderInfo from './component/OrderInfo';

const navigation = StackNavigator(
    {
        HomeScreen: { screen: DrawerNavigation },
>>>>>>> 9e621e25f697fb7d4b82a93317cc2ead9402f4fa
        LoginScreen: { screen: LoginScreen },
        OrderFlower: { screen: OrderFlower },
    }
);

export default navigation;