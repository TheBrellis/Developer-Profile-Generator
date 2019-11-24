
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
        profile.buildHTML();
        profile.toPDF();
    })
 


















