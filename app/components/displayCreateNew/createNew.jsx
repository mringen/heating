import React, {useState} from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';
import { withNavigation } from 'react-navigation';

import CreateNewSection from './createNewSection';

const CreateNew = ({navigation}) => {
	const [numberOfSections, setNumberOfSections] = useState([{time: '111', temp: '2222'}]);

	const addSection = () => {
		setNumberOfSections(numberOfSections.concat({time: '', temp: ''}))
	}

	const renderNewSection = numberOfSections.map((x, i)  => {
		return ( <CreateNewSection time={x.time} temp={x.temp} key={i}></CreateNewSection>)
	})

	return(
		<View>
			{renderNewSection}
			<Button title="Add new section" onPress={() => addSection()} />
			<Button title="Go to Run" onPress={() => navigation.navigate('Run')} />
	</View>
	)
}

export default withNavigation(CreateNew);
