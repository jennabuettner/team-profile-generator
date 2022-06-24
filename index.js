const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const renderTeam = require('./src/html-templates')

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
    inquirer,
      prompt([
        {
          type: "lis",
          message: "What employees would you like to add?",
          name: "choise",
          choices: ["Engineer", "Intern", "I'm Done"],
        },
      ]).then((answer) => {
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
          message: "What is the Employees GitHub?",
          name: "officeNumber",
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

  function buildTeam() {
    fs.writeFile('./dist/index.html', renderTeam(teamMemberObjArr), 'utf-8')
  }

  createManager();
};

init();
