const BuildProfile = require("./buildProfile");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
//////////////////////////////////////////////////////////

function promptUser(){
    return inquirer.prompt([
        {
          type: "list",
          name: "color",
          message: "What is your favorite color?",
          choices: ["green","blue","pink","red"]
        },
        {
          type: "input",
          name: "username",
          message: "What is your GitHub Username?"
        }
    ]);
    }

promptUser()
    .then(function(answers) {
        console.log(answers);
        const color = answers.color;
        const username = answers.username;
    })
 /*
const profile = new BuildProfile(color,username);

console.log(profile);


















function writeToFile(fileName, data) {
 
}

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
