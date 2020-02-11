import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const HistoryCard = ({infoProgram}) => {

	return(
		<View style={styles.view}>
			<Text>Program: {infoProgram.name}</Text><br />
			<Text>Run time: {infoProgram.run_time} min</Text><br />
			<Text>Step one: {infoProgram.step_one} min</Text><br />
			<Text>Step two: {infoProgram.step_two} min</Text><br />
			<Text>Start time: {infoProgram.start_time}</Text><br />
			<Text>Finish time: {infoProgram.finish_time}</Text><br />
		</View>

	)
}

const styles = StyleSheet.create({
	view: {
		// flex: 1,
		margin: 10,
		backgroundColor: 'white',
		borderWidth: 1,
	},
	text: {
		margin: 10,
	}
});

export default HistoryCard
