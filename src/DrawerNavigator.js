import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DrawerNavigator } from 'react-navigation';

import HomeDrawer from './screens/HomeScreen';
import LeftPanel from './component/LeftPanel';
import NewsDrawer from './screens/NewsScreen';

const DrawerNavigation = DrawerNavigator({
    HomeDrawer: { 
        screen: HomeDrawer, 
    navigationOptions: ({navigation}) => ({
        title: 'Home Screen',
        headerLeft: (
            <TouchableOpacity
                onPress={() => navigation.navigate('DrawerOpen')}
            >
                <Icon name="bars" size={30}/>
            </TouchableOpacity>
        ),
    })
},
    NewsDrawer: { screen: NewsDrawer },
    
    LeftPanel: { screen: LeftPanel },
});

export default DrawerNavigation;