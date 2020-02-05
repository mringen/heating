import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';

const CreateNewProgram = (props) => {
	return(
		<View style={styles.border}>
			<Text style={styles.text}>Make your own program</Text>
			<Button title="Create new" onPress={() => props.navigation.navigate('Create')} />
	</View>
	)
}

const styles = StyleSheet.create({
	border: {
		flex: 1,
		margin: 10,
		backgroundColor: 'white',
		borderWidth: 1,
	},
	text: {
		margin: 10,
	},
	button: {

	}
});

export default withNavigation(CreateNewProgram);
