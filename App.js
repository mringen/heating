import React from 'react';
import Navigation from './app/navigation/navigation';
import {StyleSheet, Button, Text, View, TextInput} from 'react-native';

const App = () => {
	return (
			<Navigation></Navigation>
	);
}

const styles = StyleSheet.create({
	view: {
		backgroundColor: 'green',
	},
})

export default App
