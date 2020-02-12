import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Button, TextInput, Text, TouchableHighlight} from 'react-native';
import { withNavigation } from 'react-navigation';

import CreateNewSection from './createNewSection';

const CreateNew = ({navigation}) => {
	const [numberOfSections, setNumberOfSections] = useState([{step: 1, time: '', temp: ''}]);

	const updateState = (newText, valueName, index) => {
		let testNumber = 1;
		setNumberOfSections(
			numberOfSections.map((section, i) => {
				if( i+1 !== index )
					return section;
				return { ...section, [valueName]: newText }
			})
		)
	}

	const addSection = () => {
		setNumberOfSections([...numberOfSections, {step: numberOfSections.length + 1, time: '', temp: ''}])
	}

	const renderNewSection = numberOfSections.map((x, i)  => {
		return ( <CreateNewSection updateState={updateState} time={x.time} temp={x.temp} index={i+1} key={i}></CreateNewSection>)
	})

	return(
		<View style={styles.view}>
			{renderNewSection}
			<View style={styles.viewButton}>
				<TouchableHighlight onPress={() => addSection()}>
					<View style={styles.circleButton} onPress={() => addSection()}>
						<Text style={styles.buttonText}>+</Text>
					</View>
				</TouchableHighlight>
			</View>
			<View>
				<Button color="#ff5c5c" title="Go to Run" onPress={() => navigation.navigate('Run')} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		margin: 20,
		flex: 1,
	},
	viewButton: {
		flex: 1,
		alignSelf: 'flex-end',
	},
	circleButton: {
		justifyContent: 'center',
		alignContent: 'center',
		flexWrap: 'wrap',
		margin: 10,
	    height: 50,
	    width: 50,
	    borderRadius: 100,
	    backgroundColor: 'rgb(195, 125, 198)',
	},
	buttonText: {
		fontSize: 25,
	}
});

export default withNavigation(CreateNew);
