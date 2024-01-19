// this will have the questions work.
const inquirer = require('inquirer')
const generateMarkdown = require('../utils/generateMarkdown')
const fs = require('fs')
// questions for the readme
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
},
{
    type:"input",
    name:"intall",
    message:"How do you install it?"

},
{
    type:"input",
    name:"usage",
    message:"How do i use it?"
},
{
    type:"input",
    name:"questions",
    message:"Where you can reach me?"
},
{
    type:"input",
    name:"features",
    message:"What comes with it?"
},
{
    type:"input",
    name:"contribute",
    message:"How can i help?"
},
{
    type:"list",
    name:"tests",
    message:"How do you like it?",
    choices: ['multiple choice', 'short written answers', 'long written answers']
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


async function init() {
 const answers = await inquirer.prompt(questions);
 // pass this stuff to the output function
 writeToFile('readme.md', answers)
}

// Function call to initialize app
init();
