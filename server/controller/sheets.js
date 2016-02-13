var mongoose = require('mongoose');
module.exports = (function() {
	return {
		add: function (req, res) {
			var sheet = new Sheet({sheet: req});
				sheet.save(function(err, result) {
					if(err) {
						res.json(err)
					} else {
						res.json(result);
					}
				})
		}
	}
})();