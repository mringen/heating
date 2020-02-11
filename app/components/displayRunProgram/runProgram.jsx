import React from 'react';
import {StyleSheet, Button, Text, View, TextInput, TouchableHighlight} from 'react-native';
import RunProgramCard from './runProgramCard';

const RunProgram = ({hotplateSettings}) => {
	const optionslist = ['safety', 'standby', 'higher', 'lower']

	const renderButtons = optionslist.map((option) => {
		return <RunProgramCard hotplateSettings={hotplateSettings} option={option} key={option}></RunProgramCard>
	})

	return (
		<View style={styles.view}>
			<View style={styles.viewText}>
				<Text style={styles.text}>Here you can start and follow active program</Text>
			</View>
			<View style={styles.viewButton}>
				{renderButtons}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		margin:	10,
	},
	viewText: {
		margin:	10,
		backgroundColor: '#F0D3F7'
	},
	viewButton: {
		flex: 1,
		margin:	10,
		flexDirection: 'row',
		alignItems: 'flex-end',
	},
	text: {
		margin:	10,
	},
});

export default RunProgram
