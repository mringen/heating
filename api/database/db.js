const MongoClient = require("mongodb").MongoClient;
const uri = 'mongodb+srv://heating:98arQrJdBit3ZpqN@heating-3xpgm.mongodb.net/test?retryWrites=true&w=majority';
const settings = { useNewUrlParser: true,  useUnifiedTopology: true };


function getAllDataMongoDB (callback) {
	MongoClient.connect(uri, settings, (error, client) => {
		if(error) { throw error }

		let collection = client.db('heating').collection('temprature');
		collection.find().toArray((error, response) => {
			if(error) { throw error }

			callback(response)
			client.close()
		})
	})
}

module.exports = {getAllDataMongoDB}
