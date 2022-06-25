const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const renderTeam = require("./src/html-templates");

const teamMemberObjArr = [];

const init = () => {
  const createManager = () => {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the Managers Id?",
          name: "id",
        },
        {
          type: "input",
          message: "what is the Managers Name?",
          name: "name",
        },
        {
          type: "input",
          message: "What is the Managers email?",
          name: "email",
        },
        {
          type: "input",
          message: "What is the Managers Office Number?",
          name: "officeNumber",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.id,
          answers.name,
          answers.email,
          answers.officeNumber
        );
        teamMemberObjArr.push(manager);
        addEmployees();
      });
  };

  function addEmployees() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What employees would you like to add?",
          name: "choice",
          choices: ["Engineer", "Intern", "I'm Done"],
        },
      ])
      .then((answer) => {
        switch (answer.choices) {
          case "Engineer":
            createEngineer();
            break;

          case "Intern":
            createIntern();
            break;

          default:
            buildTeam();
            break;
        }
      });
  }

  function createEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the Intern's Id?",
          name: "id",
        },
        {
          type: "input",
          message: "what is the Intern's Name?",
          name: "name",
        },
        {
          type: "input",
          message: "What is the Intern's email?",
          name: "email",
        },
        {
          type: "input",
          message: "What is the Intern's Github?",
          name: "github",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.id,
          answers.name,
          answers.email,
          answers.github
        );
        teamMemberObjArr.push(engineer);
        addEmployees();
      });
  }

  function createIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the Intern's Id?",
          name: "id",
        },
        {
          type: "input",
          message: "what is the Intern's Name?",
          name: "name",
        },
        {
          type: "input",
          message: "What is the Intern's email?",
          name: "email",
        },
        {
          type: "input",
          message: "What is the Intern's School?",
          name: "school",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.id,
          answers.name,
          answers.email,
          answers.github
        );
        teamMemberObjArr.push(intern);
        addEmployees();
      });
  }

  function buildTeam() {
    const html = `<!DOCTYPE html>
    <html>
      <head>
        <title>Media Query for Screen</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />
      </head>
      <body>
        ${renderTeam(teamMemberObjArr)}
      </body>
    </html>`;
    fs.writeFile("./dist/index.html", html, (err) => {
      console.log(err);
    });
  }
  createManager();
};
init();
