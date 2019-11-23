const BuildProfile = require("./buildProfile");
const inquirer = require("inquirer");
//////////////////////////////////////////////////////////

function promptUser(){
    return inquirer.prompt([
        {
          type: "list",
          name: "color",
          message: "What is your favorite color?",
          choices: ["Green","Blue","Pink","Red"]
        },
        {
          type: "input",
          name: "user",
          message: "What is your GitHub Username?"
        }
    ]);
    }

promptUser()
    .then((answers) => {
        const profile = new BuildProfile(answers);
        profile.callAPI();
    })
 


















function writeToFile(fileName, data) {
 
}

/* 
command line app that builds a pdf profile

INDEX.JS


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
