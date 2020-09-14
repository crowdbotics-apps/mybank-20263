import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps101295Navigator from '../features/Maps101295/navigator';
import ArticleList101274Navigator from '../features/ArticleList101274/navigator';
import ArticleList101273Navigator from '../features/ArticleList101273/navigator';
import ArticleList101272Navigator from '../features/ArticleList101272/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps101295: { screen: Maps101295Navigator },
ArticleList101274: { screen: ArticleList101274Navigator },
ArticleList101273: { screen: ArticleList101273Navigator },
ArticleList101272: { screen: ArticleList101272Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
