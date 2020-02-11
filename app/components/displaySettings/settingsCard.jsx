import React from 'react';
import {StyleSheet, Button, Text, View, TextInput} from 'react-native';
import { withNavigation } from 'react-navigation';

const SettingsCard = ({serverIpValue, setServerIp, navigation}) => {
	return (
		<View style={styles.view}>
			<Text style={styles.text}>You are on settings screen, enter the ip adress!</Text>
			<TextInput style={styles.textInput} value={serverIpValue} placeholder="rasperry IP address"  onChangeText={text => setServerIp(text)} />
			<Button color="#ff5c5c" title="Update ip-address" onPress={() => navigation.navigate('Home', {serverIpValue})} />
		</View>
	)
}


const styles = StyleSheet.create({
	view: {
		margin: 10,
		backgroundColor: '#F0D3F7',
	},
	text: {
		margin: 10,
	},
	textInput: {
		margin: 10,
		backgroundColor: '#F5E5FC',
		height: 40,
	},
});

export default withNavigation(SettingsCard);
