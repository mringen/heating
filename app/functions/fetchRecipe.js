export const fetchRecipe = () => {
	// let url = `http://${serverIp}:1337/home`;
	let url = `http://localhost:1337/getRecipe`;
	return fetch(url, {method: 'GET'})
	.then(res => res.json())
	.then(json => {
		return json;
	})
}
