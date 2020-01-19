import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const HistoryScreen = (props) => {
	return(
		<View>
			<Text>Here you can see and study your complete programs</Text>
				<Button
					title="Go to Home"
					onPress={() => props.navigation.navigate('Home')}
				/>
		</View>
	)
}

export default HistoryScreen
