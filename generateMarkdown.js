//this function grabs the relevent license badge that user has picked
function renderLicenseBadge(license) {
  let licenseBadge = '';

  switch(license) {
      case 'MIT':
          licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
          break;
      case 'Apache 2.0':
          licenseBadge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
          break;
      case 'GPL 3.0':
          licenseBadge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
          break;
      case 'BSD 3':
          licenseBadge = '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
          break;
      default:
          licenseBadge = '';
  }

  return licenseBadge;
}

function renderLicenseLink(license) {
  let licenseLink = '';

  switch(license) {
      case 'MIT':
          licenseLink = 'https://opensource.org/licenses/MIT';
          break;
      case 'Apache 2.0':
          licenseLink = 'https://opensource.org/licenses/Apache-2.0';
          break;
      case 'GPL 3.0':
          licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
          break;
      case 'BSD 3':
          licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
          break;
      default:
          licenseLink = '';
  }

  return licenseLink;
}

function renderLicenseSection(license) {
  if (!license) return '';

  return `## License

This project is covered under the ${license} License. For more information, please click [here](${renderLicenseLink(license)})`;
}

function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For more information, please contact us through these channels:

- [GitHub Profile](https://github.com/${data.github})
- Email: ${data.email}

`;
}

module.exports = generateMarkdown;
