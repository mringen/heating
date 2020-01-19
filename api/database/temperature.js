const fs = require('fs');
let path_sensor = '/sys/bus/w1/devices/w1_bus_master1/w1_master_slaves';

// to do.......
// check if sensor exist if not, handle it.

function getTemperature(callback) {

	// list my sensor device/devices unique id
	fs.readFile(path_sensor, 'utf8', function(err, data) {
		if (err) {
			console.log('error: ', err);
			return callback(err);
		}
		let sensorId = data.split('\n');
		sensorId.pop();

		// read temperature data and translate to celsius and fahrenheit, and add timestamp
		fs.readFile('/sys/bus/w1/devices/' + sensorId + '/w1_slave', 'utf8', function(err, temp) {
			if(err) {
				console.log('error: ', err);
				return;
			}

			let celsius = parseInt(temp.split("t=")[1])/1000;
			let fahrenheit = (celsius * 9.0)/ 5.0 + 32.0;

			let tempData = {
				unix_timestamp: Date.now(), celsius: celsius, fahrenheit: fahrenheit
			};

			callback(tempData)
		});
	});
}


module.exports = {getTemperature}
