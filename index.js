// TODO: Include packages needed for this application
// const { writeFile, copyFile } = require("./utils/generate-site.js");
const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
// TODO: Create an array of questions for user input
// const questions = [];
const questions = () => {
  return inquirer.prompt([
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
        "What did you want to license this project with?(Check one, default MIT)",
      default: [0],
      choices: [
        "MIT",
        "Microsoft",
        "Open Software License 3.0",
        "PostgreSQL License",
        "The Unlicense",
        "ISC",
        "Apache License",
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
      type: "confirm",
      name: "confirmTests",
      message: "Would you like to include any testing information?",
      default: true,
    },
    {
      type: "input",
      name: "tests",
      message: "Tests:",
      when: ({ confirmTests }) => confirmTests,
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
      name: "githubProfile",
      message: "Enter your GitHub profile link (Required)",
      validate: (githubProfileInput) => {
        if (githubProfileInput) {
          return true;
        } else {
          console.log("Please enter your GitHub link!");
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
  ]);
};

const promptContributors = (contributorData) => {
  // If there's no 'projects' array property, create one
  if (!contributorData.projects) {
    contributorData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your contributor? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("You need to enter a contributor!");
            return false;
          }
        },
      },
    
  
      {
        type: "confirm",
        name: "confirmAddContributor",
        message: "Would you like to enter another contributor?",
        default: false,
      },
    ])
    .then((contributorDataAnswer) => {
      portfolioData.projects.push(contributorDataAnswer);
      if (contributorData.confirmAddContributor) {
        return promptProject(contributorData);
      } else {
        return contributorData;
      }
    });
};

questions();
// promptContributors();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
