import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Button, TextInput, Text, TouchableHighlight} from 'react-native';
import { withNavigation } from 'react-navigation';

import CreateNewSection from './createNewSection';

const CreateNew = ({navigation}) => {
	const [recipeName, setRecipeName] = useState('');
	const [recipeStep, setRecipeStep] = useState([{step: 1, time: '', temp: ''}]);

	const updateState = (newText, valueName, index) => {
		setRecipeStep(
			recipeStep.map((section, i) => {
				if( i+1 !== index )
					return section;
				return { ...section, [valueName]: newText }
			})
		)
	}

	const updateRecipeName = (name) => {
		setRecipeName({recipeName: name})
	}

	const addSection = () => {
		setRecipeStep([...recipeStep, {step: recipeStep.length + 1, time: '', temp: ''}])
	}

	const renderNewSection = recipeStep.map((x, i)  => {
		return ( <CreateNewSection updateState={updateState} time={x.time} temp={x.temp} index={i+1} key={i}></CreateNewSection>)
	})

	const saveRecipe = async () => {
		let url = `http://localhost:1337/saveRecipe`;
		const response = await fetch(url, {method: 'POST', body: JSON.stringify({recipeName, recipeStep}), headers: {'Content-type': 'application/json'}})
		const json = await response.json();
		if(json.result.ok === 1) {
			setRecipeName('')
			setRecipeStep([{step: 1, time: '', temp: ''}])
			console.log('Recipe is uploded')
		}
	}

	return(
		<View style={styles.view}>
			<TextInput onChangeText={text => updateRecipeName(text)}></TextInput>
			{renderNewSection}
			<View style={styles.viewButton}>
				<TouchableHighlight onPress={() => addSection()}>
					<View style={styles.circleButton} onPress={() => addSection()}>
						<Text style={styles.buttonText}>+</Text>
					</View>
				</TouchableHighlight>
			</View>
			<View>
				<Button color="#ff5c5c" title="Save recipe" onPress={() => saveRecipe()} />
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
