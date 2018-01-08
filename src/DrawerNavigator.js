import { DrawerNavigator } from 'react-navigation';

import HomeDrawer from './screens/HomeScreen';
import LeftPanel from './component/LeftPanel';
import NewsDrawer from './screens/NewsScreen';

const DrawerNavigation = DrawerNavigator({
    HomeDrawer: { screen: HomeDrawer },
    NewsDrawer: { screen: NewsDrawer },
    
    LeftPanel: { screen: LeftPanel },
});

export default DrawerNavigation;