import React from 'react';
import {StyleSheet, Button, Text, View, TextInput} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import styles from '../styles/loginStyle';

const LoginScreen = (props) =>  {
	const [serverIpValue, setServerIp] = React.useState('172.16.9.94');
	const [localIpValue, setLocalIp] = React.useState('');

	const login = () => {
		console.log('state serverIpValue: ', serverIpValue, localIpValue)
		props.navigation.navigate('Home', { serverIpValue, localIpValue });
	}

	return(
		<View style={styles.container}>
			<Text>You are on login screen, enter the ip adress!</Text>
			<TextInput value={serverIpValue} placeholder="rasperry IP address"  onChangeText={text => setServerIp(text)} />
			<TextInput value={localIpValue} placeholder="computers IP address" onChangeText={text => setLocalIp(text)} />
			<Button title="Login" onPress={() => login()} />
		</View>
	)
}

export default LoginScreen
