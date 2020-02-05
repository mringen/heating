import React from 'react';

import {createAppContainer, createSwitchNavigator, StackNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {DrawerActions} from 'react-navigation-drawer';

import IOSIcon from "react-native-vector-icons/Ionicons";
import {Header} from 'react-native-elements';
import {Left, Right, Icon} from 'native-base';

import HomeScreen from '../screens/homeScreen';
import SettingsScreen from '../screens/settingsScreen';
import CreateNewScreen from '../screens/createNewScreen';
import HistoryScreen from '../screens/historyScreen';
import RunProgramScreen from '../screens/runProgramScreen';

const Navigation = () => {
	return ( <AppContainer /> );
}

const HomeStack = createStackNavigator({
	Home: {screen: HomeScreen},
	History: {screen: HistoryScreen}
});
const CreateNewStack = createStackNavigator({
	Create: {screen: CreateNewScreen},
	Run: {screen: RunProgramScreen}
});
const RunStack = createStackNavigator({
	Run: {screen: RunProgramScreen},
	Create: {screen: CreateNewScreen}
});
const SettingsStack = createStackNavigator({ Settings: SettingsScreen });

const DashboardTabNavigator = createBottomTabNavigator({
	Home: {screen: HomeStack},
	Create: {screen: CreateNewStack},
	Run: {screen: RunStack},
	Settings: {screen: SettingsStack}
});

const AppStackNavigator = createStackNavigator({
	DashboardTabNavigator: DashboardTabNavigator,
},{
	defaultNavigationOptions: ({ navigation }) => {
		return {
			headerShown: false
		};
	}
});

const AppContainer = createAppContainer(AppStackNavigator);

export default Navigation
