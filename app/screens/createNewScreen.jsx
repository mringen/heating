import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const CreateNewScreen = (props) => {
	return(
		<View>
			<Text>Here you can create your own personal program</Text>
				<Button
					title="Go to Home"
					onPress={() => props.navigation.navigate('Home')}
				/>
		</View>
	)
}

export default CreateNewScreen
