const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");


const questions = [
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your repository? "
    },
    {
        type: "input",
        name: "description",
        message: "Please give a description of the program: "
    },
    {
        type: "input",
        name: "installation",
        message: "What command will be used to install dependencies of the project? ",
        default: "npm install"
    },
    {
        type: "input",
        name: "usage",
        message: "What should the user be aware of for usage with this application? ",
    },
    {
        type: "list",
        name: "license",
        message: "What license will your project have? ",
        choices: ["GNU GPLv3", "Mozilla Public 2.0", "Apache 2.0", "MIT", "None"]
    },
    {
        type: "input",
        name: "contributers",
        message: "What should contributers know about using the repo? "
    },
    {
        type: "input",
        name: "test",
        message: "What command should be used to run tests from application? ",
        default: "npm test"
    },


];

function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("The README has been generated!");
    })
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile("README.md", generateMarkdown({...answers}));
    });
}

init();
