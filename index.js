// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Project Title:",
  },
  {
    type: "input",
    name: "description",
    message: "Project Description:",
  },
  {
    type: "input",
    name: "usage",
    message: "Installation:",
  },
  {
    type: "input",
    name: "contribution",
    message: "How would you like others to contribute to this project?",
  },
  {
    type: "input",
    name: "tests",
    message: "Tests:",
  },
  {
    type: "list",
    name: "licenses",
    message:
      "Which license would you like to use? (Use arrow keys + Enter to answer)",
    choices: ["Apache 2.0", "CC0", "GPL 2.0", "GPL 3.0", "MIT License"],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the most convenient email address to reach you at?",
  },
];

// TODO: Create a function to write README file
function writeToFile(response) {
  let licenseName = "";

  switch (response.licenses) {
    case "Apache 2.0":
      response.licenses =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

      licenseName =
        "[Apache 2.0 license](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "CC0":
      response.licenses =
        "[![License: CC0-1](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";

      licenseName =
        "[CCO license](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "GPL 2.0":
      response.licenses =
        "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";

      licenseName =
        "[GPL 2.0 license](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case "GPL 3.0":
      response.licenses =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

      licenseName = "[GPL 3.0 license](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "MIT License":
      response.licenses =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

      licenseName = "[MIT License](https://opensource.org/licenses/MIT)";
      break;
  }

  return `# ${response.title}\n${response.licenses}\n\n## Table of Contents\n1. [Project Description](#project-description)\n2. [Installation](#installation)\n3. [Contributing](#contributing)\n4. [Tests](#tests)\n5. [License](#license)\n6. [Contact](#contact)\n\n## Project Description\n${response.description}\n\n## Installation\n${response.usage}\n\n## Contributing\n${response.contribution}\n\n## Tests\n${response.tests}\n\n## License\nThis project uses the ${licenseName}. Click on the link to learn more.\n\n## Contact\nGithub: [github.com/${response.github}](https://github.com/${response.github})  \nEmail: [${response.email}](mailto:${response.email})`;
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const readme = writeToFile(data);
    console.log(readme);

    fs.writeFile("./assets/readme/README.md", readme, (err) =>
      err ? console.log(err) : console.log("Readme Successfully Generated")
    );
  });
}

// Function call to initialize app
init();
