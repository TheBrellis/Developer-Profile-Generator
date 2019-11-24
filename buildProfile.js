const generateHTML = require("./generateHTML.js");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const pdfKit = require("pdfkit");
const writeFileAsync = util.promisify(fs.writeFile);
//////////////////////////////////////////////////////
class BuildProfile {
    constructor(answers){
        this.color = answers.color.toLowerCase();
        this.user = answers.user;
    }
    buildHTML(){
        const queryUrl = `https://api.github.com/users/${this.user}`
        axios
        .get(queryUrl)
        .then((res)=> {
            const data = {
                color: this.color,
                proPicUrl: res.data.avatar_url,
                name: res.data.name,
                employer: res.data.company,
                loc: res.data.location,
                gitUrl: res.data.html_url,
                blog: res.data.blog,
                bio: res.data.bio,
                numRepos: res.data.public_repos,
                gitStars: 1000000, /// ask john for help
                followers: res.data.followers,
                following: res.data.following
            };
            ;
           const page = generateHTML(data);
           this.writeFile(page);
        }).catch((err) => {
            console.log(err)
        });
    }
    writeFile(page){
        fs.writeFile("Dev-Profile.html",page, (err) => {
            if(err) {
                throw err;
            }
        console.log("Profile has been saved!");
        });
    }
    toPDF(){
        const pdfDoc = new pdfKit;
    }
   // openPDF(){}
}

module.exports = BuildProfile;