import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import RunProgram from '../components/displayRunProgram/runProgram';

const RunProgramScreen = (props) => {
	let serverIp = props.navigation.getParam('serverIp')

	const hotplateSettings = (action) => {
		console.log('raspberry server not connected!!')
		// return fetch(`http://${serverIp}:1337/run?action=${action}`, {method: 'GET'})
		// .then(res =>  res)
		// .catch((error) => console.error('Error 11:', error));
	}

	return(
		<View style={styles.view}>
			<RunProgram hotplateSettings={hotplateSettings}></RunProgram>
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: '#271F30'
	},
});

export default RunProgramScreen
