var util = require('util');

var Gpio = require('onoff').Gpio,
     led1 = new Gpio(17, 'out'),
     led2 = new Gpio(18, 'out'),
     led3 = new Gpio(22, 'out'),
     led4 = new Gpio(23, 'out');

var BTSync = require('bittorrent-sync'),
	btsync = new BTSync({
	    host: '0.0.0.0',
	    port: 8888,
	    username: 'YOURUSERNAME',
	    password: 'YOURPASSWORD'
	});


var transferring = false;

var currentLed = 1;

var transferCheck = setInterval(function(){

	btsync.getSpeed(function(err, data) {

		// What's hapnin?
		//console.log(data);
		//if (err) throw err;

	    if(data.download > 0 || data.upload > 0){
	    	transferring = true;
	    }

		if(transferring){

			// Cycle LEDs to show activity
			if(currentLed == 1){
				led1.writeSync(1);
				led2.writeSync(1);
				led4.writeSync(1);
				led3.writeSync(0);
				currentLed++;
			} else if(currentLed == 2){
				led1.writeSync(0);
				led2.writeSync(1);
				led4.writeSync(1);
				led3.writeSync(1);
				currentLed++;
			} else if(currentLed == 3){
				led1.writeSync(1);
				led2.writeSync(0);
				led4.writeSync(1);
				led3.writeSync(1);
				currentLed++;
			} else if(currentLed == 4){
				led1.writeSync(1);
				led2.writeSync(1);
				led4.writeSync(0);
				led3.writeSync(1);
				currentLed = 1;
			}

		} else {

			 // Turn LEDs on solid.
			led1.writeSync(1);
			led2.writeSync(1);
			led3.writeSync(1);
			led4.writeSync(1);
		    //led1.unexport(); // Unexport GPIO and free resources
		}

	});



}, 200);