const inquirer = require('inquirer');
let fs = require("fs");
const {
  request
} = require('http');
const generateHTML = require('./src/generateHTML');
const generateCSS = require('./src/generateCSS');

const employee = require('./lib/employee');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');

const employeeDB = []
let Id = employeeDB.length + 1

//Input Manager Info--then create Engineer and or Intern
const createManager = () => {
  return inquirer.prompt([{
        type: 'input',
        name: 'teamManagerName',
        message: 'What is your Team Managers Name?'
      },
      {
        type: 'input',
        name: 'teamManagerID',
        message: 'What is your Team Managers Employee ID?'
      },
      {
        type: 'input',
        name: 'teamManagerEmail',
        message: 'What is your Team Managers Email Address?'
      },
      {
        type: 'input',
        name: 'teamManagerOfficeNumber',
        message: 'What is your Team Managers Office Number?'
      }
    ])

    //making sure things work up to here console log
    .then(function (userInput) {
      console.log(userInput);
    })

    .then(function () {
        //Main Menu to create more Employees



       

        function mainMenu() {
          return inquirer.prompt([{
            type: 'list',
            name: "selection",
            choices: ["Create Engineer", "Create Intern", "I'm done, Generate Employee Page"]
          }])
        }

        
          mainMenu()


            .then(userInput => {
              switch (userInput.selection) {
                case "Create Engineer":
                  createEngineer();

                  break;
                case "Create Intern":
                  createIntern();

                  break;
                case "I'm done, Generate Employee Page": //generateCSS().then(generateHTML);
               


                  //this is here to close the line above
              }
            })
        

        

        function createEngineer() {
          return inquirer.prompt([{
                type: 'input',
                name: 'engineersName',
                message: 'Engineers Name?',
              },
              {
                type: 'input',
                name: 'engineersID',
                message: 'Engineers ID?'
              },
              {
                type: 'input',
                name: 'engineersEmail?',
                message: 'Engineers Email address?'
              },
              {
                type: 'input',
                name: 'engineersGitHub?',
                message: 'Engineers GitHub username?'
              }
            ])
            //making sure things work up to here console log
            .then(function (userInput) {
              console.log(userInput);
            })
            .then(mainMenu())
        }

        function createIntern() {
          return inquirer.prompt([{
                type: 'input',
                name: 'internsName',
                message: 'Interns Name?',
              },
              {
                type: 'input',
                name: 'internsID',
                message: 'Interns ID?'
              },
              {
                type: 'input',
                name: 'internsEmail?',
                message: 'Interns Email address?'
              },
              {
                type: 'input',
                name: 'internsSchool?',
                message: 'Interns School?'
              }
            ])
            //making sure things work up to here console log
            .then(function (userInput) {
              console.log(userInput);
            })
        }
      }

    )

  //Leave this curly alone, end of main function
}
createManager();




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