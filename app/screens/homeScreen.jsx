import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const HomeScreen = (props) => {
	return(
		<View>
			<div></div>
			<Text>You are on home screen, you want to start a program or create one!</Text>
			<Button title="Go to login" onPress={() => props.navigation.navigate('Login')} />
			<Button title="Go to createNew" onPress={() => props.navigation.navigate('CreateNew')} />
			<Button title="Go to History" onPress={() => props.navigation.navigate('History')} />
			<Button title="Go to RunProgram" onPress={() => props.navigation.navigate('RunProgram')} />
		</View>

	)
}

export default HomeScreen
