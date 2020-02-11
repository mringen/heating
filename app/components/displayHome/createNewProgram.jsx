import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';

const CreateNewProgram = (props) => {
	return(
		<View style={styles.border}>
			<Text style={styles.text}>Make your own program</Text>
			<Button color="#ff5c5c" title="Create new" onPress={() => props.navigation.navigate('Create')} />
	</View>
	)
}

const styles = StyleSheet.create({
	border: {
		margin: 10,
		backgroundColor: '#F0D3F7',
	},
	text: {
		marginBottom: 10,
	},
	button: {
		margin: 10,
		backgroundColor: '#C8AD55',
	}
});

export default withNavigation(CreateNewProgram);
