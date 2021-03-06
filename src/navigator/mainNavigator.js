import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList101326Navigator from '../features/ArticleList101326/navigator';
import Maps101313Navigator from '../features/Maps101313/navigator';
import ArticleList101274Navigator from '../features/ArticleList101274/navigator';
import ArticleList101273Navigator from '../features/ArticleList101273/navigator';
import ArticleList101272Navigator from '../features/ArticleList101272/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList101326: { screen: ArticleList101326Navigator },
Maps101313: { screen: Maps101313Navigator },
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
