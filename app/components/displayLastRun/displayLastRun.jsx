import React from 'react';
import LastRunCard from './lastRunCard';

const DisplayLastRun = ({data}) => {
	let obj = [];
	let info = '';

	if(data) {
		obj = JSON.parse(data);
		for (let i = 0; i < obj.length; i++) {
			info = <LastRunCard info={obj[i]}></LastRunCard>

		}
		// const test = obj.map(x => (
		// 	<LastRunCard test={x} />
		// ))
	}
	return (
		<div>
			{info}
		</div>
	)
}

export default DisplayLastRun;
