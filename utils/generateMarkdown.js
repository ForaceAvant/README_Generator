function licenseLine(license){
  if (license === "None"){
    return `## License
    
    This project is not licensed.`
  }
  else{
    return `## License
    
    This project has a ${license} license`
  }
}

function generateMarkdown(data) {
  return `
# ${data.title}


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

## Contributing

${data.contributers}

## Tests

To run tests run the command: ${data.test}

## Questions

If you have any questions on the repo contact ${data.github}
`;
}

module.exports = generateMarkdown;
