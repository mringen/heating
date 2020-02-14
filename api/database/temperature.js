const fs = require('fs');
let path_sensor = '/sys/bus/w1/devices/w1_bus_master1/w1_master_slaves';

const getTemperature = (callback) => {

	// list my sensor device/devices unique id
	fs.readFile(path_sensor, 'utf8', function(err, data) {
		// check if sensor exist if not, handle it.
		if (err) {
			console.log('error find sensor id: ', err);
			return callback(err);
		}
		let sensorId = data.split('\n');
		sensorId.pop();
		// later upload response temp to DB without change it to celsius/fahrenheit
		fs.readFile('/sys/bus/w1/devices/' + sensorId + '/w1_slave', 'utf8', function(err, temp) {
			if(err) {
				console.log('error use sensor id: ', err);
				return
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
