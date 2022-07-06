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
  res.render("HomePage", {
    title: "Home Page"
  });
});

// get the api message fromt the messenger app
app.post("/facebook-messenger/sent", function (req, res) {
  var name = req.body.name;
  var username = req.body.facebook_name;
  var message = req.body.send_message;
  res.send("<span> new message! </span>\n" + "<label style='font-size: 12px;'> username </label>\n" + "<h4>" + username + "</h4>\n<label style='font-size: 12px;'> message </label>\n<h1> " + message + " </h1>")
})

var passport = require("passport");

var facebook = require("passport-facebook");

app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

// login page
app.get("/login", function (req, res) {
  res.render("LoginPage", {
    title: "Login Page"
  });
});

// signup page
app.get("/signup", function (req, res) {
  res.render("SignupPage", {
    title: "Signup Page"
  });
});

// middleware
var apis = require("./server/APIs");

app.get("/products", function(req, res) {
  apis.read_api(function(data) {
    res.send(data);
  });
});

var products = [];
// shopping page
app.get("/shopping-page", function (req, res) {

	apis.read_api(function (items) {
		items = JSON.stringify(items)
		products.push(items);
	})
    res.render("ShoppingPage", {
      title: "Shopping Page",
		products: products
    });
});

function render_page (page) {
  fs.readFile("./views/" + page, 'utf8', function (err, data) {
    if (err) {
      console.log(err);
    }
    console.log(data);
  })
}

//render_page("HomePage.ejs");

const port = process.env.PORT || 4501;
app.listen(port, function () {
  console.log("Server is listening to port " + port);
});