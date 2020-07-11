const generateReadMe = () => {

    return `

# ${projectTitle}
...place holder for license badge...

## Description 

${projectDescription}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Credits](#credits)
* [Badges](#badges)

## Installation

${projectInstall}


## Usage 

Provide instructions and examples for use. Include screenshots as needed. 

${projectUsage}


## License

The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)

${projectLicense}
${projectLicenseOther}


## Contributing


If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

${projectContribution}


## Tests

${projectTest}


## Questions

${projectGitHub}
${projectEmail}



## Credits

${projectCredits}


## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

`;
  };

module.exports = readmeTemplate;