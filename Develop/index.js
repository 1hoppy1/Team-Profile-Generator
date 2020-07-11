const inquirer = require('inquirer');
let fs = require("fs");
const { request } = require('http');
//const readmeTemplate = require('./src/readme-template.md');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'projectTitle',
        message: 'What is your Project Title?'
      },
      {
        type: 'input',
        name: 'projectDescription',
        message: 'Please describe your project.'
      },
      {
        type: 'input',
        name: 'projectInstall',
        message: 'Describe how the user will install the Project on their personal computer.'
      },
      {
        type: 'input',
        name: 'projectUsage',
        message: 'Please provide instructions and examples for use.'
      },
      {
        type: 'input',
        name: 'projectContribution',
        message: 'Describe your Contribution Guidelines.'
      },
      {
        type: 'input',
        name: 'projectTest',
        message: 'Describe how the user will test your code.'
      },
      {
        type: 'checkbox',
        name: 'projectLicense',
        message: 'What license are you using?',
        choices: ['None', 'MIT', 'GPL v3', 'AGPL']
      },
      {
        type: 'input',
        name: 'projectLicenseOther',
        message: 'If using OTHER License, please list Name and description.',
      },
      {
        type: 'input',
        name: 'projectGitHub',
        message: 'What is your GitHub username?'
      },
      {
        type: 'input',
        name: 'projectEmail',
        message: 'What is your Email address?'
      },
      {
        type: 'input',
        name: 'projectCredits',
        message: 'Who/What would you like to credit?'
      }
    ]).then(function(userInput){
    const data = {}
    data.projectTitle = userInput.projectTitle
    data.projectDescription = userInput.projectDescription
    data.projectInstall = userInput.projectInstall
    data.projectUsage = userInput.projectUsage
    data.projectContribution = userInput.projectContribution
    data.projectTest = userInput.projectTest
    data.projectLicense = userInput.projectLicense.join("")
    data.projectLicenseOther = userInput.projectLicenseOther
    data.projectGitHub = userInput.projectGitHub
    data.projectEmail = userInput.projectEmail
    data.projectCredits = userInput.projectCredits


 // function to write README file
 const output = generateMarkdown(data)
 fs.writeFileSync("../README.md", output);
 //let fileName = `AwesomeReadMe`;
 //let data = answers
    });
  };
questions()




 function writeToFile(fileName, data) {

 }

// let output = render(fileName, data)
 

// function to initialize program
function init() {
}

// function call to initialize program
init();
