import React from 'react';
import {StyleSheet, Button, Text, View, TextInput} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import styles from '../styles/loginStyle';

const LoginScreen = (props) =>  {
	console.log('style: ' , styles.container)
	return(
		<View style={styles.container}>
			<Text>You are on login screen, enter the ip adress!</Text>
			<TextInput placeholder="rasperry IP address" />
			<TextInput placeholder="computers IP address" />
			<Button title="Login" onPress={() => props.navigation.navigate('Home')} />
		</View>
	)
}

export default LoginScreen
