import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const HistoryScreen = ({navigation, data}) => {
	let infoProgram = navigation.getParam('data');

	return(
		<View>
			<View>
				<Text>Program: {infoProgram.name}</Text><br />
				<Text>Run time: {infoProgram.run_time} min</Text><br />
				<Text>Step one: {infoProgram.step_one} min</Text><br />
				<Text>Step two: {infoProgram.step_two} min</Text><br />
				<Text>Start time: {infoProgram.start_time}</Text><br />
				<Text>Finish time: {infoProgram.finish_time}</Text><br />
			</View>
		</View>
	)
}

export default HistoryScreen
