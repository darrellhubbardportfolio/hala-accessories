//require("dotenv").config();
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// view engine setup
/*app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
*/
app.set('view engine', 'ejs');

// express static files
app.use('/public', express.static(path.join(__dirname, 'public')));

// express static files
app.use('/server', express.static(path.join(__dirname, 'server')));


// home page
app.get("/", function (req, res) {
	var page = "HomePage.ejs";
	res.render("Index", {
		title: "Home Page",
	  	page: page
	});
});

// shopping page
app.get("/shop", function (req, res) {
	var page = "ShoppingPage.ejs";
	res.render("Index", {
		title: "Shop Page",
	  	page: page
	});
});

// products details page

// shopping cart page
app.get("/shopping-cart", function (req, res) {
	var page = "ShoppingCartPage.ejs";
	res.render("Index", {
		title: "Shopping Cart",
	  	page: page
	});
});

// payments page

// review and order

// login page
app.get("/login", function (req, res) {
	var page = "LoginForm.ejs";
  res.render("Index", {
    title: "Login Page",
	page: page
  });
});

// signup page
app.get("/signup", function (req, res) {
	var page = "SignupForm.ejs";
  res.render("Index", {
    title: "Signup Page",
	page: page
  });
});

const port = process.env.PORT || 4501;
app.listen(port, function () {
  console.log("Server is listening to port " + port);
});