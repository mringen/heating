import React from 'react';
import { StyleSheet, Button, Text, View, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';

const RunCard = ( {dataHistory, navigation} ) => {

	return (
		<TouchableHighlight onPress={() => navigation.navigate('History', {data: dataHistory})}>
			<View style={styles.runCard}>
				<View style={styles.viewText}>
					<Text style={styles.text}>Program: {dataHistory.name}</Text><br />
				</View>
				<View style={styles.viewText}>
					<Text style={styles.text}>Run time: {dataHistory.run_time} min</Text><br />
				</View>
			</View>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	runCard: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: '#ff5c5c',
		margin: 5,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,
		elevation: 10,
	},
	viewText: {
		flex: 2,
	},
	text: {
		alignContent: 'flex-end',
	}
});

export default withNavigation(RunCard);
