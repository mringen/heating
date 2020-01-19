// const http = require('http');
const express = require('express');
const server = express();

const {getAllDataMongoDB} = require("./database/db.js");
const {getTemperature} = require("./database/temperature.js");

server.get('/',  (req, res) => res.send('serve is up runing'));

// one call, read temperature
getTemperature(res => {
	// later send up res-data to databasen
	console.log('temperature object: ', res)
});

getAllDataMongoDB(res => {
	// console.log('result: ', res)
});

// // call every x-seconds, read tempearture
// setInterval(function(){
// 	getTemperature(res => {
// 		// later send up res-data to databasen
// 		console.log('temperature object: ', res)
// 	});
// },3000)




const port = process.env.PORT || 1337;
server.listen(port, () => console.log(`App listen to port: ${port}`))
