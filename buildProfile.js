const generateHTML = require("./generateHTML.js");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const writeFileAsync = util.promisify(fs.writeFile);
//////////////////////////////////////////////////////
class BuildProfile {
    constructor(answers,generateHTML){
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
                gitStars: 1000000,
                followers: res.data.followers,
                following: res.data.following
            };
            ;
           const page = generateHTML(data);
        }).catch((err) => {
            console.log(err)
        });
    }
    ///convertToPDF(){}
   // openPDF(){}
}

module.exports = BuildProfile;