var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser')
var fs = require('fs')
, gm = require('gm').subClass({imageMagick: true});
require('dotenv').config()
const IMAGES = './images/';
const PORT = process.env.PORT || '8000'



 // create application/json parser
 var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/resize', function (req, res) {
	let width = req.query.width;
	let height = req.query.height;
	console.log (width);
	console.log (height);
	if (validateNumber(width,height)) {
		let source = './images/origin/1.jpg';
		let target = './images/resize/1';
		let check_resize = resizeImage (source,target,width,height);
		if (check_resize) {		 
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify({'code':200,'messsage':'resize success'}));	
		} 
	}else {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({ "error": "resize not success","code":"400"}));		
	}
	
	
})

app.get ('/', function (req,res){
	res.send ('Welcome to Gm demo in KintoBlock ');
})

app.get ('/env', function (req,res){
	res.send ('ENV: AUTO_ORIENT ' + process.env.AUTO_ORIENT + ' | DEFAULT_IMAGE_TYPE: ' + process.env.DEFAULT_IMAGE_TYPE);
})
// resize and remove EXIF profile data

app.post ('/check_size', urlencodedParser, function (req,res) {
	if (!req.body.image_url) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({ "error": "ImageNotFound","code":"400"}));		
	}
	let image_url =  req.body.image_url;
	console.log (image_url);
	download(image_url, './download/temp_image', function(value){		
		if (value !== 0) {
			console.log('Success download and check size');	
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify(value));		
		} else {
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify({ "error": "ImageNotFound","code":"400"}));		
		}

	});	
})
function resizeImage (source,target,width,height) {
	gm(source).resize(width, height,"!").setFormat(process.env.DEFAULT_IMAGE_TYPE).autoOrient(process.env.AUTO_ORIENT).write(target, function (err) {
		if (!err) {
			console.log('resize image done');  }else {
			console.log (err);
		}
		} );
	return true;
}
function validateNumber (width, height) {
	width = parseInt (width);
	height =  parseInt(height);
	if (width >= 0 && Number.isInteger(width) && height >= 0 && Number.isInteger(height) ) {
		console.log (width);
		console.log (height);
		return true;
	} else {
		return false;
	}
}
var download = function(uri, filename, callback){
	request.head(uri, function(err, res, body){
		let data = { image_type : res.headers['content-type'], image_size:  res.headers['content-length'] } ;		
		request(uri).pipe(fs.createWriteStream(filename)).on('close', function () {
			gm(filename).size(function(err, value){
				if (!err) {					
					return callback(value);					
				} else {
					return callback(0);
				}
				
			})
		});
	});
};

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
