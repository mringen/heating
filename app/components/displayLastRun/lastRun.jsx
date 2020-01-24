import React, {useState} from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
// import {fetchLastRun} from '../functions/fetchLastRun';
import DisplayLastRun from './displayLastRun';

const LastRun = (props) => {
	const [data, setData] = useState();
	let url = `http://${props.serverIp}:1337/home`;

	const fetchLastRun = () => {
		fetch(url, {method: 'GET'})
		.then(res => res.json())
		.then(json => {
			// setData(json)
			setData(JSON.stringify(json))
		})
	}
	return(
		<div> Last run {props.serverIp}
			<div>
			<DisplayLastRun data={data}></DisplayLastRun>
			</div>
			<Button title='load last run' onPress={() => fetchLastRun()}/>
		</div>
	)
}

export default LastRun
