export const fetchLastRun = () => {
	let url = `/home`;
	return fetch('http://localhost:1337/home', {method: 'GET'})
	.then(res => res.json())
	.then(json => {
		console.log('Fetch request complete. Response: ', json);
		return json;
	})
}
