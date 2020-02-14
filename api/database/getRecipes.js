const MongoClient = require("mongodb").MongoClient;
const {uri} = require('../config/key.js')
const {settings} = require('../config/Settings.js');


const getRecipesMongoDB = (callback) => {
	MongoClient.connect(uri, settings, (error, client) => {
		if(error) {	throw error }

		let collection = client.db('recipe').listCollections();
		collection.toArray((error, response) => {
			if(error) { throw error }

			callback(response)
			client.close()
		})
	})
}

module.exports = {getRecipesMongoDB}
