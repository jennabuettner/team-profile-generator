const renderTeam = (team) => {
  const generateManagerCard = (manager) => {
    return `
        <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${manager.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${manager.name}</li>
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
          <a href="mailto:${manager.email}"
            ><li class="list-group-item">Email: ${manager.email}</li></a>
        </ul>
      </div>
        `;
  };

  const generateEngineerCard = (engineer) => {
    return `
        <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${engineer.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${engineer.name}</li>
          <li class="list-group-item">ID: ${engineer.id}</li>
          <a href="${engineer.getGithub()}" li class="list-group-item">Github: ${engineer.getGithub()}</a>
          <a href="mailto:${engineer.email}"
            ><li class="list-group-item">Email: ${engineer.email}</li></a>
        </ul>
      </div>
        `;
  };

  const generateInternCard = (intern) => {
    return `
        <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${intern.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${intern.name}</li>
          <li class="list-group-item">ID: ${intern.id}</li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
          <a href="mailto:${intern.email}"
            ><li class="list-group-item">Email: ${intern.email}</li></a>
        </ul>
      </div>
    `;
  };

  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManagerCard(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineerCard(engineer))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateInternCard(intern))
  );
  return html.join("");
};

module.exports = renderTeam;
