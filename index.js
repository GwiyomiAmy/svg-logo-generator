const inquirer = require("inquirer");
const colors = require('colors');
const fs = require("fs");
const Circle = require('./lib/Circle');
const Square = require('./lib/Square');
const Triangle = require('./lib/Triangle');

const askQuestions = inquirer.prompt(
[
   {
      type: "input",
      message: "Enter text for the logo.(Must not be more than 3 characters)",
      name: "text",
   },
   {
      type: "input",
      message: "Enter a text color.",
      name: "textcolor",
   },
   {
      type:"list",
      message: "Select a shape for the logo.",
      name: "shape",
      choices: ["circle", "square", "triangle"]
   },
   {
      type: "input",
      message: "Enter a shape color.",
      name: "color",
   }
   ]).then((response) => {
      if (response.shape === "circle"){
         let shape = new Circle(response.text, response.textcolor, response.color);
         let svg = shape.render();
         fs.writeFile("logo.svg", svg, function(err){
            if (err) return console.log("Error")
            console.log("Generated logo.svg")
         })
      } else if (response.shape === "square") {
         let shape = new Square(response.text, response.textcolor, response.color);
         let svg = shape.render();
         fs.writeFile("logo.svg", svg, function(err){
            if (err) return console.log("Error")
            console.log("Generated logo.svg")
         })
      } else if (response.shape === "triangle") {
         let shape = new Triangle(response.text, response.textcolor, response.color);
         let svg = shape.render();
         fs.writeFile("logo.svg", svg, function(err){
            if (err) return console.log("Error")
            console.log("Generated logo.svg")
         })
      }
   })