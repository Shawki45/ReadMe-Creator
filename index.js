// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    generateMarkdown(data)
}


// TODO: Create a function to initialize app
async function init() {
 const answers = await inquirer.prompt(questions);
 // pass this stuff to the output function
 writeToFile('readme.md', answers)
}

// Function call to initialize app
init();
