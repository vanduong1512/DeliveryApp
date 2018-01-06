import { StackNavigator } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const navigation = StackNavigator(
    {
        LoginScreen: { screen: LoginScreen },
        HomeScreen: { screen: HomeScreen },
    }
);

export default navigation;