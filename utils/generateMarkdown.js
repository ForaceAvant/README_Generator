const api = require("./api");
let profilePicture = "";

function licenseLine(license) {
  if (license === "None") {
    return `## License
    
    This project is not licensed.`
  }
  else if (license === "Apache 2.0") {
    return `## License
    
    This project has an ${license} license`
  }
  else {
    return `## License
    
    This project has a ${license} license`
  }
}

function userEmailAndImage(username) {
  api.getUser(username);
}

function generateMarkdown(data) {

  userEmailAndImage(data.github);

  return `
# ${data.title} created by ${data.github}


## Description

${data.description}

## Table of Content

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)

## Installation

To install dependencies, run: ${data.installation}

## Usage

${data.usage}

${licenseLine(data.license)}
[![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://github.come/${data.github}/${data.title})

## Contributing

${data.contributers}

## Tests

To run tests run the command: ${data.test}

## Questions

If you have any questions on the repo contact ${data.github} at ${data.email}


`;
}

module.exports = generateMarkdown;
