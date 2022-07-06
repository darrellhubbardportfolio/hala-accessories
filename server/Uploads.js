var multer = require("multer");

var images = multer.diskStorage({
	destination: function(req, file, callback) {
		return callback(null, "/Images/Products");
	},
	filename: function (req, file, callback) {
		return callback(null, file.originalname);
	}
});

module.exports = {
	imageUploads: multer({ storage: images })
}