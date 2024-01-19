
const inquirer = require('inquirer')
const generateMarkdown = require('../utils/generateMarkdown')
const fs = require('fs')

const questions = [{
    type:"input",
    name:"title",
    message:"what is your project name? "
},
   { type:"input",
    name:"description",
    message:"What is the project about?"

},
{
    type:"list",
    name:"license",
    message:"which do you prefer?",
    choices: ['MIT', 'GPlv3', 'GPL']
}
];

// write README file
function writeToFile(fileName, data) {
    // markdown
 const contents = generateMarkdown(data)
 // write file 
 fs.writeFile(fileName, contents, (err)=> {
   err? new Error("Write file blew up"): console.log("ReadMe created");

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
