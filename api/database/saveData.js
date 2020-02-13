const MongoClient = require("mongodb").MongoClient;
const uri = 'mongodb+srv://heating:98arQrJdBit3ZpqN@heating-3xpgm.mongodb.net/test?retryWrites=true&w=majority';
const settings = { useNewUrlParser: true,  useUnifiedTopology: true };


const saveRecipeMongoDB = (recipeName, recipeStep, callback) => {
	console.log('inside function: ', recipeStep)
	MongoClient.connect(uri, settings, (error, client) => {
		console.log('inside MongoClient')
		if(error) {	throw error }

		let collection = client.db('recipe').collection(recipeName);
		console.log('inside mongo collection');
		collection.insertMany(recipeStep, (error, result) => {
			if(error) { throw error }

			callback(result)
			client.close()
		})
	})
}

module.exports = {saveRecipeMongoDB}
