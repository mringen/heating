import React from 'react';
import {StyleSheet, Text, View, Button, TouchableHighlight} from 'react-native';
import { withNavigation } from 'react-navigation';

const RunProgramCard = ({startCooking, goBackToRecipes}) => {

	return (
		<View>
			<Text>kalas kalas kalas kalas kalas</Text>
			<Button title="Start cooking" onPress={() => startCooking()}></Button>
			<Button title="change different recipe" onPress={() => goBackToRecipes()}></Button>
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
