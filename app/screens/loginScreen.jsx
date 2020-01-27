import React, {useState} from 'react';
import {StyleSheet, Button, Text, View, TextInput} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import styles from '../styles/loginStyle';

const LoginScreen = (props) =>  {
	const [serverIpValue, setServerIp] = useState('');

	const login = () => {
		console.log('state serverIpValue: ', serverIpValue)
		props.navigation.navigate('Home', {serverIpValue});
	}

	return(
		<View style={styles.container}>
			<Text>You are on login screen, enter the ip adress!</Text>
			<TextInput value={serverIpValue} placeholder="rasperry IP address"  onChangeText={text => setServerIp(text)} />
			<Button title="Login" onPress={() => login()} />
		</View>
	)
}

export default LoginScreen
