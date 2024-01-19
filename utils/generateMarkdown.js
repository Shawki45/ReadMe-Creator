// returns the badge
function renderLicenseBadge(license) {
  return `![${license}](https://img.shields.io/badge/License-${license}-blue.svg)`;
}


function renderLicenseLink(license) {
  return `- [License](#license)`;
}

// generates the badge.
function renderLicenseSection(license) {
  return `## License
 ${renderLicenseBadge(license)}`;
  // call the badge here
}

// will genrate the readme
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
 
  ## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
${renderLicenseLink(data.license)}
  
  
  ## Installation
  
  ${data.install}
  
  ## Usage
  
  ${data.usage}
  

  
  ${renderLicenseSection(data.license)}
  
  
  
  ## Features
  ${data.features}

  
  ## How to Contribute
  ${data.contribute}


  ## Tests
   ${data.tests}


  ## Questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;
