const express = require('express');
const server = express();
// for production use change requests from origin in cors
const cors = require('cors');
// import for python
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const {getAllDataMongoDB} = require("./database/db.js");
const {getTemperature} = require("./database/temperature.js");

server.use(cors());
server.use(express.json());

server.get('/',  (req, res) => { res.send('serve is up runing')});

// one call, read temperature
getTemperature(res => {
	// later send up res-data to databasen
	console.log('temperature: ', res)
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
		console.log(' server get /home result: ', result)
		res.send(JSON.stringify(result));
	});
});

server.get('/run', (req,res) => {
	runCookingScript();
	console.log('ip address / run')
	res.send('Open relay module and closed in successfully');
})

async function runCookingScript() {
  try {
      const { stdout, stderr } = await exec('python3 ../pythonServer/pythonServer.py');
  } catch(err) {
     console.error(err);
  };
};

const port = process.env.PORT || 1337;
server.listen(port, () => console.log(`App listen to port: ${port}`))
