import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screens/homeScreen';
import LoginScreen from '../screens/loginScreen';
import CreateNewScreen from '../screens/createNewScreen';
import HistoryScreen from '../screens/historyScreen';
import RunProgramScreen from '../screens/runProgramScreen';


const Navigation = () => {
	return ( <AppContainer /> );
}

const AppNavigator = createStackNavigator({
	Home: { screen: HomeScreen },
	Login: { screen: LoginScreen },
	CreateNew: { screen: CreateNewScreen },
	History: { screen: HistoryScreen },
	RunProgram: { screen: RunProgramScreen }
});

const AppContainer = createAppContainer(AppNavigator);

export default Navigation
