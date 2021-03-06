//generate manager
const generateManager = function (manager) {
    return `
    <div class="card" style="width: 18rem;">
            
    <div class="card-body">
      <h5 class="card-title text-white bg-primary">Manager</h5>
      <h4>${manager.name}</h>
      <p class="card-text">
        <p class="id"> ID: ${manager.id}</p>
        <p class="email">Email: ${manager.email}</p>
        <p class="office">Office Number ${manager.officeNumber}</p>
      </p>
    </div>
  </div>
    `;
};


//generate engineer
const generateEngineer = function (engineer) {
    return `
    <div class="card" style="width: 18rem;">
            
    <div class="card-body">
      <h5 class="card-title text-white bg-primary">Engineer</h5>
      <h4>${engineer.name}</h3>
      <p class="card-text">
        <p class="id"> ID: ${engineer.id}</p>
        <p class="email">Email: ${engineer.email}</p>
        <p class="github">Github: ${engineer.github}</p>
      </p>
    </div>
    </div>
    `;
};


//generate intern
const generateIntern = function (intern) {
    return `
    <div class="card" style="width: 18rem;">
            
    <div class="card-body">
      <h5 class="card-title text-white bg-primary">Intern</h5>
      <h4>${intern.name}</h4>
      <p class="id">ID: ${intern.id}</p>
      <p class="email">Email: ${intern.email}</p>
      <p class="school">School: ${intern.school}</p>
    </div>
  </div>
    `;
};


//generate employee and default, fill in full html page
const generatePage = function (employees) {
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <!--make big, red box at top of screen-->
        <header class="d-flex flex-wrap justify-content-center text-white bg-danger">
            <h1>My Team</h1>
        </header>
    
        <!--make individual cards for team members-->
        <main>
            <!--group of cards-->
            <div class="card-group">
    ${employees}
    </main>
    </body>
    </html>
    `;
}

//get HTML info to HTML page

generateHTML = (data) => {

    //create an array for each team container
    dataArr = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.inputRole();

        //team member functions
        if (role === 'Engineer') {
            const engineer = generateEngineer(employee);

            dataArr.push(engineer);
        }

        if (role === 'Intern') {
            const intern = generateIntern(employee);

            dataArr.push(intern);
        }

        if (role === 'Manager') {
            const manager = generateManager(employee);

            dataArr.push(manager);
        }
    }
    const team = dataArr.join('');
    const generateTeam = generatePage(team);
    return generateTeam;
};

module.exports = generateHTML; 
