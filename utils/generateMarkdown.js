// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "Boost":
      return `Boost [![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    case "Mozilla":
      return ` Mozilla [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case "Perl":
      return `perl [![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
    case "The Unlicense":
      return `Unlicense [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    case "ISC":
      return `ISC [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    case "Apache License":
      return ` apache [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "None":
      return "";
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return ""
  }
  else {
    return `* [License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "None") {
      return "";
    } else {
      return `## License
      The license used in this application is ${license}`
      ;
    }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}  
# ${data.description} 
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
${renderLicenseLink(data.license)}
* [Tests](#tests)
* [Questions](#questions)

## Installation
 ${data.installation} 
## Usage
 ${data.usage} 
## Contributions
${data.contributor}

${renderLicenseSection(data.license)}
## Tests
${data.tests} 

## Questions 
* If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }.
* You can find more of my work at [https://github.com/${
    data.github
  }](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;


