// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require("fs")


// TODO: Create an array of questions for user input
const questions = [
    {   
        type: "input" ,
        message: "What is your project title?" ,
        name: "title" 

    },
    {
        type: "input",
        message: "What does this application do and who is it intended for?" ,
        name: "description"
    },
    // finish writing questions for prompt
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, generateMarkdown.js)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
