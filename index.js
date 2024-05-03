const inquirer = require('inquirer');
const colors = require('colors');

inquirer.prompt([
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
      message: "color",
      name: "Enter a shape color.",
      }
   
   
   ]).then(response => {
   if (response.shape === "circle"){
      const shape = new Circle(response.color)
   } if (response.shape === "square") {
      const shape = new Square(response.color)
   } if (response.shape === "triangle") {
      const shape = new Triangle(response.color)
   }
   })