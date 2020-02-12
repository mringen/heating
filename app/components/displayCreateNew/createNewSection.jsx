import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';

const CreateNewSection = ({updateState, time, temp, index}) => {
	return (
		<View style={styles.View}>
			<Text style={styles.text}>Step: {index}</Text>
			<Text style={styles.text}>Add Timer</Text>
			<TextInput style={styles.textInput} value={time} placeholder="Time" onChangeText={text => updateState(text, 'time', index)} />
			<Text style={styles.text}>Add temperature</Text>
			<TextInput style={styles.textInput} value={temp} placeholder="Temp" onChangeText={text => updateState(text, 'temp', index)} />
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		margin: 10,
		backgroundColor: '#F0D3F7',
	},
	text: {
		marginBottom: 10,
		color: '#F5E5FC',
		fontSize: 15,
	},
	textInput: {
		backgroundColor: '#F5E5FC',
		height: 40,
		marginBottom: 10,
	},
});

export default CreateNewSection
