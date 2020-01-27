import React from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';

const CreateNewSection = (props) => {
	return (
		<div>
			<div>
				<span>Timer first step</span>
				<TextInput value={props.time} placeholder="Time" />
			</div>
			<div>
				<span>Temperature first step</span>
				<TextInput value={props.temp} placeholder="Temp" />
			</div>
		</div>
	)
}

export default CreateNewSection
