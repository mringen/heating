import React, {useState} from 'react';
import {StyleSheet, Button, Text, View, TextInput} from 'react-native';
import styles from '../styles/settingsStyle';

const SettingsScreen = ({navigation}) =>  {
	const [serverIpValue, setServerIp] = useState('172.26.16.216');

	return(
		<View style={styles.container}>
			<Text>You are on settings screen, enter the ip adress!</Text>
			<TextInput value={serverIpValue} placeholder="rasperry IP address"  onChangeText={text => setServerIp(text)} />
			<Button title="Update ip-address" onPress={() => navigation.navigate('Home', {serverIpValue})} />
		</View>
	)
}

export default SettingsScreen
