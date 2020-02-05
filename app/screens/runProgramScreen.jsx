import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const RunProgramScreen = (props) => {
	let serverIp = props.navigation.getParam('serverIp')

	const hotplateSettings = (action) => {
		return fetch(`http://${serverIp}:1337/run?action=${action}`, {method: 'GET'})
		.then(res =>  res)
		.catch((error) => console.error('Error 11:', error));
	}

	return(
		<View>
			<Text>Here you can start and and see program run live</Text>
			<Button title="ParentControl" onPress={() => hotplateSettings('parentControl', 23)} />
			<Button title="standby" onPress={() => hotplateSettings('standby')} />
			<Button title="tempUp" onPress={() => hotplateSettings('tempUp')} />
			<Button title="tempDown" onPress={() => hotplateSettings('tempDown')} />
		</View>
	)
}

export default RunProgramScreen
