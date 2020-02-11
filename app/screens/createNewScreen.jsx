import React from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';

import CreateNew from '../components/displayCreateNew/createNew';

const CreateNewScreen = (props) => {
	return(
		<View style={styles.view}>
			<CreateNew></CreateNew>
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: '#271F30'
	},
});
export default CreateNewScreen
