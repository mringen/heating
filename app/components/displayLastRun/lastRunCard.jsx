import React from 'react';

const LastRunCard = ( {info} ) => {

	return (
		<div>
			<span>Run tme: {info.run_time} min</span><br />
			<span>Step one: {info.step_one} min</span><br />
			<span>Step two: {info.step_two} min</span><br />
			<span>Start time: {info.start_time}</span><br />
			<span>Finish time: {info.finish_time}</span><br />
		</div>
	)
}

export default LastRunCard;
