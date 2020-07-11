// function to generate markdown for README
function generateMarkdown({projectTitle, projectDescription, projectInstall, projectUsage, projectContribution, projectTest, projectLicense, projectLicenseOther, projectGitHub, projectEmail, projectCredits}) {
  return `#  
  # ${projectTitle}

  ${projectLicense === "MIT" ? "[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)"  : projectLicense === "GPL v3"? "[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)"  : projectLicense === "AGPL" ? "[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)":"" }


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

## Installation

${projectInstall}


## Usage 

${projectUsage}


## License

For additional info about the license, click on the link (if available).

${projectLicense === "MIT" ? "[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)"  : projectLicense === "GPL v3"? "[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)"  : projectLicense === "AGPL" ? "[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)":"" }

${projectLicenseOther}

## Contributing

${projectContribution}

## Tests

${projectTest}

## Questions

${projectGitHub}

Comments, Questions, Concerns, Complaints? Send me an email.

${projectEmail}

## Credits

${projectCredits}

`;
}

module.exports = generateMarkdown;
