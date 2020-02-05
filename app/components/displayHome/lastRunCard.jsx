import React from 'react';
import { StyleSheet, Button, Text, View, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';

const LastRunCard = ( {dataHistory, navigation} ) => {

	return (
			<View style={styles.lastRunCard}>
				<TouchableHighlight onPress={() => navigation.navigate('History', {data: dataHistory})}>
					<View>
						<Text>Program: {dataHistory.name}</Text><br />
						<Text>Run time: {dataHistory.run_time} min</Text><br />
						<Text>Step one: {dataHistory.step_one} min</Text><br />
						<Text>Step two: {dataHistory.step_two} min</Text><br />
						<Text>Start time: {dataHistory.start_time}</Text><br />
						<Text>Finish time: {dataHistory.finish_time}</Text><br />
					</View>
				</TouchableHighlight>
			</View>
	)
}

const styles = StyleSheet.create({
	lastRunCard: {
		flex: 1,
		margin: 10,
		backgroundColor: 'white',
	},
});

export default withNavigation(LastRunCard);
