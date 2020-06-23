

function generateMarkdown(data) {
  return `
# ${data.title}

## Description

${data.description}

## Table of Content

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributers)
* [Tests](#test)
`;
}

module.exports = generateMarkdown;
