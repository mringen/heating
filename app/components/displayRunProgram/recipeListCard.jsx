import React from 'react';
import {StyleSheet, View, Button, Text, TouchableHighlight} from 'react-native';

const RecipeListCard = ({recipe, selectedRecipe}) => {
	return(
		<TouchableHighlight onPress={() => selectedRecipe(recipe)}>
				<Text style={styles.text}>{recipe}</Text>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	text: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: '#ff5c5c',
		margin: 5,
		padding:5,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,
		elevation: 10,
	}
});

export default RecipeListCard
