var xlsxj = require("xlsx-to-json");
var multiparty = require('multiparty');
var sheet = require('../controller/sheets.js');
module.exports = function (app) {
	app
	.post('/upload', function(req, res){ 
		//accept multipform data
		var form = new multiparty.Form();

		//parse xlsx file to find path
	    form.parse(req, function(err, fields, files) {
	      	var file = files.file[0];
	      	//xlsx to json
	      	xlsxj({
			    input: file.path, 
			    output: "output.json",
			    lowerCaseHeaders:true
			  }, function(err, req) {
			    if(err) {
			      	console.error(err);
			    }else {
			      	sheet.add(req, res);
			    }
			});
		})
	})
}