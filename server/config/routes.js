var convertExcel = require('excel-as-json').processFile,
    sheet = require('../controller/sheets.js'),
    multiparty = require('multiparty');

module.exports = function (app) {
	app
	.post('/upload', function(req, res){ 
		//accept multipform data
		var form = new multiparty.Form();

		//parse xlsx file to find path
	    form.parse(req, function(err, fields, files) {
	      	var file = files.file[0];

	      	//xlsx to json
	      	convertExcel(file.path, null, false, function(err, req) {
	      		if(err) {
	      			console.error(err);
	      		} else {
	      			sheet.add(req, res);
	      		}
	      	});
		})
	})
}