import React, {useEffect} from 'react';
import { StyleSheet, View } from 'react-native';

import LastRunCard from './lastRunCard';
import RunCard from './runCard';
import CreateNewProgram from './createNewProgram';

const DisplayLastRun = ({dataHistory}) => {
	let firstRun, otherRuns;

		if(dataHistory) {
			firstRun = <LastRunCard dataHistory={dataHistory[0]}></LastRunCard>
			otherRuns = [];
			for(let i=1; i<dataHistory.length; i++) {
				otherRuns.push( <RunCard dataHistory={dataHistory[i]} key={dataHistory[i]._id} /> );
			}
		}

	return (
		<View>
			<View style={[firstRun ? styles.border : null]}>
				{firstRun}
			</View>
			<CreateNewProgram></CreateNewProgram>
			<View style={[otherRuns ? styles.border : null]}>
				{otherRuns}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	border: {
		flex: 1,
		margin: 10,
		backgroundColor: 'white',
		borderWidth: 1,
	},
});

export default DisplayLastRun;
