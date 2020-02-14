import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import RunProgram from '../components/displayRunProgram/runProgram';
import {fetchRecipe} from '../functions/fetchRecipe';

const RunProgramScreen = (props) => {
	const [myRecipes, setMyRecipes] = useState([]);
	const [myRecipe, setMyRecipe] = useState('');

	let serverIp = props.navigation.getParam('serverIp')

	const hotplateSettings = (action) => {
		// let url = `http://${serverIp}:1337/run?action=${action}`;
		let url = `http://localhost:1337/run?action=${action}`
		return fetch(url, {method: 'GET'})
		.then(res =>  res)
	}

	const selectedRecipe = (selected) => {
		let url = `http://localhost:1337/getRecipe?recipe=${selected}`;
		fetch(url, {method: 'GET'})
			.then(res => res.json())
			.then(res => setMyRecipe({ [selected]: res}))
	}

	useEffect(() => {
		let list = [];
		let url = `http://localhost:1337/getRecipes`;
		fetch(url, {method: 'GET'})
			.then(res => res.json())
			.then(json => json.map(recipe => {
				list = [...list, recipe.name]
			}))
			.then(json => setMyRecipes([...myRecipes, ...list]))
	}, [])

	const goBackToRecipes = () => {
		setMyRecipe('')
	}

	return(
		<View style={styles.view}>
			<RunProgram hotplateSettings={hotplateSettings} selectedRecipe={selectedRecipe} myRecipe={myRecipe} myRecipes={myRecipes} goBackToRecipes={goBackToRecipes}></RunProgram>
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: '#271F30'
	},
});

export default RunProgramScreen
