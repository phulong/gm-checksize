var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser')
var multer  = require('multer')
var path  = require('path')
var upload = multer({ dest: 'upload/' })
var fs = require('fs')
, gm = require('gm').subClass({imageMagick: true});
require('dotenv').config()
const IMAGES = './images/';
const IMAGES_UPLOAD = './upload/';
const IMAGES_RESIZE = './images/resize/';
const IMAGE_TYPE = ['image/png','image/jpeg','image/jpg','image/pjpeg','image/x-png','application/octet-stream'];
const IMAGE_MAX_SIZE = 4000000;

const PORT = process.env.PORT || '8000'

function validate_image (image) {
	console.log (image);
	if (image.size > IMAGE_MAX_SIZE) {
		return 402;
	}
	if  (!IMAGE_TYPE.includes(image.mimetype )) {		
		return 403;
	}
	return 200;

}

function get_error_message (code) {
	var message = {402 : 'The image size too large (image size allow <= 4MB) ', 403 : 'The image type not allow'};
	return message[code];
}

 // create application/json parser
 var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/resize' , upload.single('image_upload') , function (req, res) {
	let width = req.query.width;
	let height = req.query.height;	
	if (typeof req.file === 'undefined') {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({ "error": "Can not find image file","code":"401"}));		
	} else {	
		var validate_im = 	validate_image (req.file);
		if (validate_im !== 200) {
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify({ "error": get_error_message(validate_im) ,"code":validate_im}));	
		} else {
			var file_name_upload = req.file.filename;
			if (validateNumber(width,height)) {
				let source = IMAGES_UPLOAD + file_name_upload;
				let target = IMAGES_RESIZE + file_name_upload+'.'+process.env.DEFAULT_IMAGE_TYPE ;				
				let check_resize = resizeImage (source,target,width,height);

				if (check_resize) {						
					setTimeout(function() {
						try {
							if (fs.existsSync(target)) {
								console.log ('Success download image');
								res.download(target,file_name_upload+'.'+process.env.DEFAULT_IMAGE_TYPE);
							}
						} catch(err) {
							console.error(err)
						}

					},500)


				} 
			}else {
				res.setHeader('Content-Type', 'application/json');
				res.end(JSON.stringify({ "error": "resize not success","code":"400"}));		
			}
		}
		

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
