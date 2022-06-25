const renderTeam = (teamMemberObjArr) => {
  const generateManagerCard = (manager) => {
    return `
        <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${manager.id}</li>
          <li class="list-group-item">${manager.officeNumber}</li>
          <a href="mailto:${manager.email}"
            ><li class="list-group-item">${manager.email}</li></a>
        </ul>
      </div>
        `;
  };

  const generateEngineerCard = (engineer) => {
    return `
        <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${engineer.id}</li>
          <li class="list-group-item">${engineer.github}</li>
          <a href="mailto:${engineer.email}"
            ><li class="list-group-item">${engineer.email}</li></a>
        </ul>
      </div>
        `;
  };

  const generateInternCard = (intern) => {
    return `
        <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${intern.id}</li>
          <li class="list-group-item">${intern.school}</li>
          <a href="mailto:${intern.email}"
            ><li class="list-group-item">${intern.email}</li></a>
        </ul>
      </div>
    `;
  };

const html = [];

html.push(
  teamMemberObjArr
    .filter((employee) => employee.getRole() === "Manager")
    .map((manager) => generateManagerCard(manager))
);
html.push(
  teamMemberObjArr
    .filter((employee) => employee.getRole() === "Engineer")
    .map((engineer) => generateEngineerCard(engineer))
);
html.push(
  teamMemberObjArr
    .filter((employee) => employee.getRole() === "Intern")
    .map((intern) => generateInternCard(intern))
)
};



module.exports = renderTeam;
