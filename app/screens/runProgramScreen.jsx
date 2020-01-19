import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const RunProgramScreen = (props) => {
	return(
		<View>
			<Text>Here you can start and and see program run live</Text>
				<Button
					title="Go to Home"
					onPress={() => props.navigation.navigate('Home')}
				/>
		</View>
	)
}

export default RunProgramScreen
