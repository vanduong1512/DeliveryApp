import { StackNavigator, NavigationActions } from 'react-navigation';

import { Text } from 'react-native';

import LoginScreen from './screens/LoginScreen';
import DrawerNavigation from './DrawerNavigator';

//test
import OrderFlower from './screens/OrderProduct/OrderFlower';
import OrderInfo from './component/OrderInfo';
import RegisterScreen from'./screens/RegisterScreen'
import EditOrderFlower from './screens/EditOrderFlower';

import MyOrder from './screens/MyOrder';
const navigation = StackNavigator(
    {
        EditOrderFlower: { screen: EditOrderFlower },
        // OrderFlower: { screen: OrderFlower },
        // MyOrder: { screen: MyOrder },
        HomeScreen: { screen: DrawerNavigation },
        LoginScreen: { screen: LoginScreen },
        RegisterScreen:{screen:RegisterScreen},
    }
);

export default navigation;