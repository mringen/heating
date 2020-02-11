import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import HistoryCard from '../components/displayHistory/historyCard';

const HistoryScreen = ({navigation, data}) => {
	let infoProgram = navigation.getParam('data');

	return(
		<View style={styles.view}>
			<HistoryCard infoProgram={infoProgram}></HistoryCard>
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		// margin: 10,
		backgroundColor: '#271F30'
	},
});

export default HistoryScreen
