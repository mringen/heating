import React, {useEffect, useState} from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

import DisplayLastRun from '../components/displayHome/DisplayLastRun';
import {fetchAllHistory} from '../functions/fetchAllHistory';

const HomeScreen = ({navigation}) => {
	let serverIp = navigation.getParam('serverIpValue')
	const [dataHistory, setDataHistory] = useState();

	useEffect(() => {
		fetchAllHistory(serverIp)
		.then(res => setDataHistory(res))
	},[])

	return(
		<View>
			<DisplayLastRun dataHistory={dataHistory}></DisplayLastRun>
		</View>
	)
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: 'green',
	},
	border: {
		flex: 1,
		margin: 10,
		backgroundColor: '#FF9800',
		borderWidth: 1,
	},
});

export default HomeScreen
