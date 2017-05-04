// All the dependencies required 
var express = require('express');
var mysql = require('mysql');
// Create express app instance
var app = express();
// specify the port number 
var port = 3000;
//Creating connection to the mysql db 
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: " ",
  database: "health_info_db"
});
//Initiate mysql connection
connection.connect(function(err) {
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + conncetion.threadId);
});
// Routes
app.get("/", function(req, res) {
  //if the main route is hit , then the mysql query will be inistantiated to grab all the health records we have in the db.
  // All the resulting records are stored in the variable "result."
  connection.query("SELECT * FROM health_info", function(err, result) {
    // Building HTML element for the page
    var html = "<h1> Health Information </h1>";
    // Creating unordered list
    html += "<ul>";
    // Retrieving records from the db to populate our HTML file using a for loop
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>Health: " + result[i].info + "</p></li>";
    };
    html += "</ul>";
    // sending dynamically created file to the user
    res.send(html);
  });
});
//Inistantiating the listener
app.listen(port);
    
  
