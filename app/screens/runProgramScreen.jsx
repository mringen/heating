import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const RunProgramScreen = (props) => {
	let serverIp = props.navigation.getParam('serverIp')

	const hotplateSettings = (action, port) => {
		return fetch(`http://${serverIp}:1337/run?action=${action}&port=${port}`, {method: 'GET'})
		.then(res =>  res)
		.catch((error) => console.error('Error 11:', error));
	}

	return(
		<View>
			<Text>Here you can start and and see program run live</Text>
			<Button title="ParentControl" onPress={() => hotplateSettings('parentControl', 23)} />
			<Button title="standby" onPress={() => hotplateSettings('standby', 23)} />
			<Button title="tempUp" onPress={() => hotplateSettings('tempUp', 23)} />
			<Button title="tempDown" onPress={() => hotplateSettings('tempDown', 23)} />

			<Button title="Go to Home" onPress={() => props.navigation.navigate('Home')} />
		</View>
	)
}

export default RunProgramScreen
