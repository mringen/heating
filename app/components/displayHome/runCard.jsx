import React from 'react';
import { StyleSheet, Button, Text, View, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';

const RunCard = ( {dataHistory, navigation} ) => {

	return (
		<TouchableHighlight onPress={() => navigation.navigate('History', {data: dataHistory})}>
			<View style={styles.runCard}>
				<Text>Program: {dataHistory.name}</Text><br />
				<Text>Run time: {dataHistory.run_time} min</Text><br />
			</View>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	runCard: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: 'dark-white',
		margin: 10,
		borderWidth: 1,
	},
	fullLength: {
		flex: 1,
	}
});

export default withNavigation(RunCard);
