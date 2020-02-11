import React from 'react';
import { StyleSheet, Button, Text, View, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';

const LastRunCard = ( {dataHistory, navigation} ) => {

	return (
		<View style={styles.view}>
			<View>
				<Text>Program: {dataHistory.name}</Text><br />
				<Text>Run time: {dataHistory.run_time} min</Text><br />
				<Text>Step one: {dataHistory.step_one} min</Text><br />
				<Text>Step two: {dataHistory.step_two} min</Text><br />
				<Text>Start time: {dataHistory.start_time}</Text><br />
				<Text>Finish time: {dataHistory.finish_time}</Text><br />
				<Button color="#ff5c5c" title="Inspect last run" onPress={() => navigation.navigate('History', {data: dataHistory})} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		margin: 10,
		backgroundColor: '#F0D3F7',
	},
	button: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,
		elevation: 10,
	}
});

export default withNavigation(LastRunCard);
