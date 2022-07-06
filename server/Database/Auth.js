var sqlite3 = require("sqlite3").verbose();
var database = new sqlite3.Database("/Database/hala-accessories-database.db", function (err) {
    if (err) {
        console.log(err);
    }
    console.log("Successfully opened and connected to database!");
});

// finds user id
function findUserId(username) {

}

// find user email
function findUserEmail(username) {

}
// check if user exists ()
function checkIfUserAvailable(username) {
    database.get("select username from Users where username = ?", [username], function (err, user) {
        if (err) {
            console.log(err);
        }
        if (!user) {
            console.log("username is available");
            return
        }
        else {
            console.log("username has been already taken");
            return
        }
    })
}
// if a route has been authenticated, then an authenticated person cannot access this route.
function checkIfAuthenticated() {

}
// only persons authenticated can visit this website
function auth() {
    if (req.session) {
        
    }
}
// only admin utilize these routes
function adminOnly() {

}