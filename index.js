import React, { Component } from 'react';
import App from './App';
import { name as appName } from './app.json';
import { AppRegistry, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

// import {createBottomTabNavigator} from 'react-navigation-tabs';
// import {TabBar} from 'react-native-tab-view';

import SideMenu from './app/components/SideMenu/SideMenu'
import Navigation from './app/navigation/navigation';

const drawernav = DrawerNavigator({
  Item1: {
      screen: stackNav,
    }
  }, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,
});

AppRegistry.registerComponent(appName, () => drawernav);
