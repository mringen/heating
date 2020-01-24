import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LastRun from '../components/displayLastRun/lastRun';

const HomeScreen = (props) => {
	let serverIp = props.navigation.getParam('serverIpValue')
	let localIp = props.navigation.getParam('localIpValue')
	return(
		<View>
			<LastRun serverIp={serverIp} localIp={localIp}></LastRun>
			<Text>You are on home screen, you want to start a program or create one!</Text>
			<Button title="Go to login" onPress={() => props.navigation.navigate('Login')} />
			<Button title="Go to createNew" onPress={() => props.navigation.navigate('CreateNew')} />
			<Button title="Go to History" onPress={() => props.navigation.navigate('History')} />
			<Button title="Go to RunProgram" onPress={() => props.navigation.navigate('RunProgram', { serverIp })} />
		</View>
	)
}

export default HomeScreen
