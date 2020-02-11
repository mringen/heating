import React, {useEffect, useState} from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

import DisplayLastRun from '../components/displayHome/displayLastRun';
import {fetchAllHistory} from '../functions/fetchAllHistory';

const HomeScreen = ({navigation}) => {
	let serverIp = navigation.getParam('serverIpValue')
	const [dataHistory, setDataHistory] = useState();

	useEffect(() => {
		fetchAllHistory(serverIp)
		.then(res => setDataHistory(res))
	},[])

	return(
		<View style={styles.view}>
			<DisplayLastRun dataHistory={dataHistory}></DisplayLastRun>
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: '#271F30'
	},
});

export default HomeScreen
