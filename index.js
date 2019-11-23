const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "location",
      message: "Where are you from?"
    },




const questions = [
  
];

function writeToFile(fileName, data) {
 
}

function init() {

init();

/* 
command line app that builds a pdf profile

INDEX.JS

    prompt user for input
    > favColor
    >gitHub username

    create object using Generate Profile constructor

    generate html

    print/convert to pdf

GENERATE-PROFILE.JS
 > constructor
    - Favorite Color
    - github user name
    - URL?
 > methods:
    - call Ajax and return object & assign object values to variables
    - generate HTML
    - convert HTML to PDF
    - publish PDF to page
*/
