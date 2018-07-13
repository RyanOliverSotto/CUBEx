// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the Kiosk locations
  app.get("/api/location/", function(req, res) {
    console.log("Calling get in location");
    db.Kiosk.findAll({})
      .then(function(dbKiosk) {
        res.json(dbKiosk);
      });
  });

  //GET route for getting all genre
  app.get("/api/genre", function(req, res){
      console.log("Calling get in genre");
      db.Genre.findAll({})
      .then(function(dbGenre){
        res.json(dbGenre);
      });
  });

  //GET route for getting available books where location=req.body.location and genre = req.body.genre
  app.get("/api/catalog/books", function(req,res){
    console.log("Getting books for kiosk location and genre");
  });

  //POST route to add a book that a user wants to drop at a kiosk
  app.post("/api/addBook", function(req, res) {
    console.log("Calling Post method to add book");  
    console.log("API BACKEND: ", req.body);
    db.Book.create({
      KioskId: req.body.KioskId,
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre
    })
      .then(function(dbBook) {
        res.json(dbBook);
      });
  });

  //delete route to delete the book when a user picks up the book
  app.delete("/api/pickBooks/:id", function(req, res){
      console.log("Deleting book from our table");
    db.Book.destroy({
        where: {
            id: request.params.id
        }
    })
    .then(function(dbBook){
        res.json(dbBook);
    });
  });

} //end of app function
