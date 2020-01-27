import React from 'react'
import {StyleSheet, View, Text, Button, TextInput} from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import CreateNew from '../components/displayCreateNew/createNew';

const CreateNewScreen = (props) => {
	return(
		<View>
			<Button title="Go to Home" onPress={() => props.navigation.navigate('Home')} />
			<CreateNew></CreateNew>
		</View>
	)
}

export default CreateNewScreen
