// TODO: Include packages needed for this application
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
function init() {
  inquirer
    .prompt([
  
      {
        type: "input",
        name: "title",
        message: "What is the title of your project (Required)",
        validate: (titleInput) => {
          if (titleInput) {
            return true;
          } else {
            console.log("Please enter the title!");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "license",
        message:
          "What did you want to license this project with?(select one, hit enter)",
        choices: [
          "MIT",
          "Boost",
          "Mozilla",
          "Perl",
          "The Unlicense",
          "ISC",
          "Apache License",
          "None",
        ],
      },
      {
        type: "input",
        name: "description",
        message: "Provide a description of the project (Required)",
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("You need to enter a project description!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "installation",
        message: "Provide a installation instructions for the user(Required)",
        validate: (installationInput) => {
          if (installationInput) {
            return true;
          } else {
            console.log("You need to enter basic installation instructions!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "usage",
        message: "Provide a usage overview for the user(Required)",
        validate: (usageInput) => {
          if (usageInput) {
            return true;
          } else {
            console.log("You need provide a usage summary");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "contributor",
        message:
          "Please provide contributors you would like to include (Required)",
        validate: (contributorInput) => {
          if (contributorInput) {
            return true;
          } else {
            console.log("You need provide a contributor");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "tests",
        message: "Tests:",
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username (Required)",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter your GitHub username!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your email!");
            return false;
          }
        },
      },
    ])

    .then(function (data) {
      writeFileAsync("./utils/ReadMe.md", generateMarkdown(data));
    });

}

// Function call to initialize app
init();


