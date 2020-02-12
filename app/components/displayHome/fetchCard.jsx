import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

const FetchCard = ({fetchData}) => {
	return(
		<View style={styles.view}>
			<Text style={styles.text}>Failed to load recipe, fetch recipe</Text>
			<Button color="#ff5c5c" title="Fetch data" onPress={() => fetchData()}/>
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		margin: 10,
		backgroundColor: '#F0D3F7',
	},
	text: {
		marginBottom: 10,
	}
});

export default FetchCard
