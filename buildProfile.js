const fs = require("fs");
const util = require("util");
const axios = require("axios");
const writeFileAsync = util.promisify(fs.writeFile);
//////////////////////////////////////////////////////
class BuildProfile {
    constructor(answers){
        this.color = answers.color;
        this.user = answers.user;
    }
    buildHTML(){
        const queryUrl = `https://api.github.com/users/${this.user}`
        axios
        .get(queryUrl)
        .then((res)=> {
            const data = {
                proPicUrl: res.data.avatar_url,
                name: res.data.name,
                work: res.data.company,
                loc: res.data.location,
                gitUrl: res.data.html_url,
                bio: res.data.bio,
                numRepos: res.data.public_repos,
                gitStars: 1000000,
                followers: res.data.followers,
                following: res.data.following
            };
        })
    }
    createHTML(){
       

    }
    convertToPDF(){

    }
    openPDF(){}
}

module.exports = BuildProfile;