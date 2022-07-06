var fs = require("fs");

var path = require("path");

var productsList = [];

// read api
function read_api (callback) {
    fs.readdir("./server/Images/products", function (err, products) {
        if (err) {
            console.log(err);
        }
		products.filter(product=> {
			let merchandise = new Object({
				title: path.basename(product).split(" ")[0].replace("-", " "),
				image: path.basename(product),
				model: product.split("-")[1].split(" ")[0],
				price: product.split("-")[1].split(" ")[1].split(".")[0]
			})
			//productsList.push(merchandise);
			return callback(merchandise);
		})
    })
	//return callback(productsList);
}

module.exports = {
    read_api: read_api
}