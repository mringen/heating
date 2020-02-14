import React, {useEffect} from 'react';
import {StyleSheet, Button, Text, View, TextInput, TouchableHighlight} from 'react-native';
import RunProgramCard from './runProgramCard';
import RecipeListCard from './recipeListCard';
import CookingButtons from './cookingButtons'

const RunProgram = ({hotplateSettings, selectedRecipe, myRecipe, myRecipes, goBackToRecipes}) => {
	const optionslist = ['safety', 'standby', 'higher', 'lower']
	let listRecipe;


	const startCooking = () => {
		console.log('test runProgramCard')
	}

	const renderButtons = optionslist.map((option) => {
		return <CookingButtons hotplateSettings={hotplateSettings} option={option} key={option} />
	})

	if(myRecipe) {
		listRecipe = ( <RunProgramCard startCooking={startCooking} goBackToRecipes={goBackToRecipes}></RunProgramCard> )
	} else if(myRecipes.length > 0){
		listRecipe = []
		for (let i=0; i < myRecipes.length; i++) {
			listRecipe.push( <RecipeListCard selectedRecipe={selectedRecipe} recipe={myRecipes[i]} key={i} /> )
		}
	} else{
		listRecipe = ( <Text>Loding recipe</Text> )
	}



	return (
		<View style={styles.view}>
			<View style={styles.viewText}>
				{listRecipe}
			</View>
			<View style={styles.viewButton}>
				{renderButtons}

			</View>
			<View style={styles.viewText}>

			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		margin:	10,
	},
	viewText: {
		margin:	10,
		backgroundColor: '#F0D3F7'
	},
	viewButton: {
		flex: 1,
		margin:	10,
		flexDirection: 'row',
		alignItems: 'flex-end',
	},
	text: {
		margin:	10,
	},
});

export default RunProgram
