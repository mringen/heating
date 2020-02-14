const express = require('express');
const server = express();
// for production use change requests from origin in cors
// const cors = require('cors');
// import for python
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const {getAllDataMongoDB} = require("./database/db.js");
const {getTemperature} = require("./database/temperature.js");
const {saveRecipeMongoDB} = require("./database/saveData.js");
const {getRecipesMongoDB} = require("./database/getRecipes.js");
const {getRecipeMongoDB} = require("./database/getRecipe.js");

// server.use(cors());
server.use(express.json());

// later send port number to react when start up sever
server.get('/',  (req, res) => { res.send('serve is up runing')});

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
});



// // call every x-seconds, read tempearture
// setInterval(function(){
// 	getTemperature(res => {
// 		// later send up res-data to databasen
// 		console.log('temperature object: ', res)
// 	});
// },3000)

server.get('/home', function(req, res) {
	getAllDataMongoDB(result => {
		res.send(JSON.stringify(result));
	});
});

server.post('/saveRecipe', function(req, res) {
	saveRecipeMongoDB(req.body.recipeName.recipeName, req.body.recipeStep, result => {
		res.send(JSON.stringify(result))
	})
})

server.get('/getRecipes', (req, res) => {
	getRecipesMongoDB(result => {
		res.send(JSON.stringify(result))
	})
})

server.get('/getRecipe', (req, res) => {
	getRecipeMongoDB(req.query.recipe, result => {
		res.send(JSON.stringify(result))
	})
})

server.get('/run', (req,res) => {
	switch( req.query.action ) {
		case 'higher':
			console.log('pyt higher')
			// runCookingScript('higher', 23);
			break;
		case 'lower':
			console.log('pyt lower')
			// runCookingScript('lower', 23);
			break;
		case 'standby':
			console.log('pyt standby')
			// runCookingScript('standby', 23);
			break;
		case 'safety':
			console.log('pyt safety')
			// runCookingScript('safety', 23);
			break;
		default:
			console.log('pyt default')
			// runCookingScript('standby', 23);
			break;
	}
	res.send('Open relay module and closed successfully');
})

async function runCookingScript(action, port) {
	try {
		const { stdout, stderr } = await exec(`python3 ../pythonServer/pythonServer.py ${action} ${port}`);
	} catch(err) {
		console.error(err);
	};
};

const port = process.env.PORT || 1337;
server.listen(port, () => console.log(`App listen to port: ${port}`))
