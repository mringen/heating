import React, { Component } from 'react';
import App from './App';
import { name as appName } from './app.json';
import { AppRegistry, Dimensions, View, StyleSheet } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import SideMenu from './app/components/SideMenu/SideMenu'
import Navigation from './app/navigation/navigation';

// const drawernav = DrawerNavigator({
//   Item1: {
//       screen: stackNav,
//     }
//   }, {
//     contentComponent: SideMenu,
//     drawerWidth: Dimensions.get('window').width - 120,
// });

// const App = () => {
//     return(
//         <View style = { styles.container }></View>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#9FA8DA' // Set your own custom Color
//     }
// });

AppRegistry.registerComponent(appName, () => App);
