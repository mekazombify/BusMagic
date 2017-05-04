/*
BusMagic Server
Frank Giddens
May 3, 2017
*/

/*
To Do List
Generate Map Data
Allow User Input
Generate Routes Based on User Data
*/

"use strict";

let vehicle = {"make" : null, "model" : null, "year" : null, "price" : null, "seats" : [], "latitude" : null, "longitude" : null, "status" : null};
let fleet = [];

let addVehicle = function(make, model, year, price, seats){
  let newVehicle = vehicle;
  let seating = [];
  newVehicle.make = make;
  newVehicle.model = model;
  newVehicle.year = year;
  newVehicle.price = price;
  for(let i = 0; i < seats; i++){
    seating.push("Open");
  }
  newVehicle.seats = seating;
  newVehicle.status = "Ready";
  //Add Latitude and Longitude
};

let loadMap = function(latitude, longitude){
  //Load map data
};

let solveRoute = function(destination){
  //Solve Route
};
