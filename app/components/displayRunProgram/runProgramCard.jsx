import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import { withNavigation } from 'react-navigation';

const RunProgramCard = ({hotplateSettings, option}) => {
	return (
		<View style={styles.viewButton}>
			<TouchableHighlight onPress={() => hotplateSettings(option)}>
				<Text style={styles.button}>{option}</Text>
			</TouchableHighlight>
		</View>
	)
}

const styles = StyleSheet.create({
	viewButton: {
		flex: 1,
	},
	button: {
		flex: 1,
		padding: 5,
		margin: 3,
		backgroundColor: '#ff5c5c',
	}
});

export default RunProgramCard
