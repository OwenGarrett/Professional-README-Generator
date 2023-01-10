// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require("fs")

const generateMarkDown = require('./utils/generatemarkDown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "Title",
  },
  {
    type: "input",
    message: "What does this application do and who is it intended for?",
    name: "Description",
  },
  {
    type: "input",
    message: "What command is used to install this app?",
    name: "Installation",
  },
  {
    type: "input",
    message: "How is this app intended to be used?",
    name: "Usage",
  },
  {
    type: "list",
    message: "Which license was used to create this app?",
    choices: ["MIT", "GNU", "Apache", "None"],
    name: "License",
  },
  {
    type: "input",
    message: "Who contributed to the development of this app?",
    name: "Contributing",
  },
  {
    type: "input",
    message: "What comands should be used to test this app?",
    name: "Tests",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "GitHub",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "Email",
  },
  // finish writing questions for prompt
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, generateMarkDown.js)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions).then((inquirerResponses) => {
    console.log('generating your readMe')
    writeToFile('readMe.md', generateMarkDown({...inquirerResponses}))
  })
};

// Function call to initialize app
init();
