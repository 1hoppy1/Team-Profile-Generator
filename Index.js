const inquirer = require('inquirer');
let fs = require("fs");
const { request } = require('http');
const generateHTML = require('./src/generateHTML');
const generateCSS = require('./src/generateCSS');
const employeeDB = []
let Id = employeeDB.length+1


function mainMenu() {
     inquirer.prompt({
       type: 'list',
       name: "selection",
       choices: ["Create Engineer", "Create Intern", "Generate Employee Page"]
     }).then(userInput => {
       switch(userInput.selection){
         case "Create Engineer": createEngineer();
         case "Create Intern": createIntern();
         case "Generate Employee Page": generateCSS().then.generateHTML();
       }
     })
}
mainMenu();




// //Parent Employee Class Questions
// const employee = () => {
// //Team Manager Class
//     return inquirer.prompt([
//       //Manager Questions
//       {
//         type: 'input',
//         name: 'teamManagerName',
//         message: 'What is your Team Managers Name?'
//       },
//       {
//         type: 'input',
//         name: 'teamManagerID',
//         message: 'What is your Team Managers Employee ID?'
//       },
//       {
//         type: 'input',
//         name: 'teamManagerEmail',
//         message: 'What is your Team Managers Email Address?'
//       },
//       {
//         type: 'input',
//         name: 'teamManagerOfficeNumber',
//         message: 'What is your Team Managers Office Number?'
//       },

//     //   const addEmployees = () => {
//     //   //Would you like to add an Engineer, Intern, or are you finished building your team?
//     //   return inquirer.prompt([
//     //   {
//     //     type: 'checkbox',
//     //     name: 'addEmployees',
//     //     message: 'Would you like to add an Engineer, Intern, or are you finished building your team?',
//     //     choices: ['Engineer', 'Intern', 'Finished']
//     //   ])
//     //   }}

//       //Engineer Class Input
//       {
//         type: 'input',
//         name: 'engineersName',
//         message: 'Engineers Name?',
//       },
//       {
//         type: 'input',
//         name: 'engineersID',
//         message: 'Engineers ID?'
//       },
//       {
//         type: 'input',
//         name: 'engineersEmail?',
//         message: 'Engineers Email address?'
//       },
//       {
//         type: 'input',
//         name: 'engineersGitHub?',
//         message: 'Engineers GitHub username?'
//       },

//       //Intern Class info
//       {
//         type: 'input',
//         name: 'internsName',
//         message: 'Interns Name?',
//       },
//       {
//         type: 'input',
//         name: 'internsID',
//         message: 'Interns ID?'
//       },
//       {
//         type: 'input',
//         name: 'internsEmail?',
//         message: 'Interns Email address?'
//       },
//       {
//         type: 'input',
//         name: 'internsSchool?',
//         message: 'Interns School?'
//       }

//     ]).then(function(userInput){
//     const data = {}
//     data.projectTitle = userInput.projectTitle
//     data.projectDescription = userInput.projectDescription
//     data.projectInstall = userInput.projectInstall
//     data.projectUsage = userInput.projectUsage
//     data.projectContribution = userInput.projectContribution
//     data.projectTest = userInput.projectTest
//     data.projectLicense = userInput.projectLicense.join("")
//     data.projectLicenseOther = userInput.projectLicenseOther
//     data.projectGitHub = userInput.projectGitHub
//     data.projectEmail = userInput.projectEmail
//     data.projectCredits = userInput.projectCredits


//  // function to write HTML/CSS file
//  const output = generateMarkdown(data)
//  fs.writeFileSync("./dist/index.html", output);
//  fs.writeFileSync("./dist/class.css", output);

//      });
//   };
// employee()


//  function writeToFile(fileName, data) {

//  }


// // function to initialize program
// function init() {
// }

// // function call to initialize program
// init();
