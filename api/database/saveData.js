const MongoClient = require("mongodb").MongoClient;
const {uri} = require('../config/key.js')
const {settings} = require('../config/Settings.js');


const saveRecipeMongoDB = (recipeName, recipeStep, callback) => {
	MongoClient.connect(uri, settings, (error, client) => {
		if(error) {	throw error }

		let collection = client.db('recipe').collection(recipeName);
		collection.insertMany(recipeStep, (error, result) => {
			if(error) { throw error }

			callback(result)
			client.close()
		})
	})
}

module.exports = {saveRecipeMongoDB}
