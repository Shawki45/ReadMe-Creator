// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('../utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type:"input",
    name:"title",
    message:"what is your project name? "

    type:"choices",
    name:"project",
    message:"What is the project about?"
}];

// write README file
function writeToFile(fileName, data) {
    // markdown
 const contents = generateMarkdown(data)
 // write file 
 fs.writeToFile(filename, contents, (err)=> {
   err? new Error("Write file blew up"): console.log("Normal Error");

 })

}

// TODO: Create a function to initialize app
async function init() {
 const answers = await inquirer.prompt(questions);
 // pass this stuff to the output function
 writeToFile('readme.md', answers)
}

// Function call to initialize app
init();
