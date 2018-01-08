import { StackNavigator, NavigationActions } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
const navigation = StackNavigator(
    {
        RegisterScreen:{ screen: RegisterScreen },
        LoginScreen: { screen: LoginScreen },
        HomeScreen: { screen: HomeScreen },
    }
);

export default navigation;