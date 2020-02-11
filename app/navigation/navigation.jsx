import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

import {createAppContainer, StackNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {TabBar} from 'react-native-tab-view';
// import {createDrawerNavigator} from 'react-navigation-drawer';
// import {DrawerActions} from 'react-navigation-drawer';

import IOSIcon from "react-native-vector-icons/Ionicons";
import {Header} from 'react-native-elements';
import {Left, Right, Icon} from 'native-base';

import HomeScreen from '../screens/homeScreen';
import SettingsScreen from '../screens/settingsScreen';
import CreateNewScreen from '../screens/createNewScreen';
import HistoryScreen from '../screens/historyScreen';
import RunProgramScreen from '../screens/runProgramScreen';

const Navigation = () => {
	return (
			<AppContainer></AppContainer>
	);
}

const HomeStack = createStackNavigator({
	Home: {screen: HomeScreen},
	History: {screen: HistoryScreen}
},{
    defaultNavigationOptions: {
  		headerStyle:{ backgroundColor: '#C8AD55'},
  	}

});
const CreateNewStack = createStackNavigator({
	Create: {screen: CreateNewScreen},
	Run: {screen: RunProgramScreen}
},{
    defaultNavigationOptions: {
  		headerStyle:{ backgroundColor: '#C8AD55'},
  	}

});
const RunStack = createStackNavigator({
	Run: {screen: RunProgramScreen},
	Create: {screen: CreateNewScreen}
},{
    defaultNavigationOptions: {
  		headerStyle:{ backgroundColor: '#C8AD55'},
  	}

});
const SettingsStack = createStackNavigator({
	Settings: {screen: SettingsScreen}
},{
    defaultNavigationOptions: {
  		headerStyle:{ backgroundColor: '#C8AD55'},
  	}

});

const DashboardTabNavigator = createBottomTabNavigator({
	Home: {screen: HomeStack},
	Create: {screen: CreateNewStack},
	Run: {screen: RunStack},
	Settings: {screen: SettingsStack}
},{
	tabBarOptions: {
		activeTintColor: 'black',
  		labelStyle: {
	    	fontSize: 12,
	  	},
	  style: { backgroundColor: '#C8AD55' },
  	}
});

const AppStackNavigator = createStackNavigator({
	DashboardTabNavigator: DashboardTabNavigator,
},{
	defaultNavigationOptions: ({ navigation }) => {
		return {
			headerShown: false,
		};
	}
});

const styles = StyleSheet.create({
	view: {
		margin: 10,
		backgroundColor: 'red',
	},
});

const AppContainer = createAppContainer(AppStackNavigator);

export default Navigation
