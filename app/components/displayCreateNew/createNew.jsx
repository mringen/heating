import React, {useState} from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';

import CreateNewSection from './createNewSection';

const CreateNew = () => {
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
		</View>
	)
}

export default CreateNew
