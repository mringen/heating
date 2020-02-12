import React, {useEffect} from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

import LastRunCard from './lastRunCard';
import RunCard from './runCard';
import CreateNewProgram from './createNewProgram';
import FetchCard from './fetchCard';

const DisplayLastRun = ({dataHistory}) => {
	let firstRun, otherRuns;

	const fetchData = () => {
		console.log('Data will be fetched on click request')
	}

	if(dataHistory) {
		firstRun = <LastRunCard dataHistory={dataHistory[0]}></LastRunCard>
		otherRuns = [];
		for(let i=1; i<dataHistory.length; i++) {
			otherRuns.push( <RunCard dataHistory={dataHistory[i]} key={dataHistory[i]._id}/> )
		}
	} else {
		firstRun = <FetchCard fetchData={fetchData}></FetchCard>
	}

	return (
		<View>
			<View style={[dataHistory ? styles.border : null]}>
				{firstRun}
			</View>
			<View style={styles.border}>
				<CreateNewProgram></CreateNewProgram>
			</View>
			<View style={[otherRuns ? styles.border : null]}>
				{otherRuns}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	border: {
		margin: 10,
		backgroundColor: '#F0D3F7',
	},
});

export default DisplayLastRun;
