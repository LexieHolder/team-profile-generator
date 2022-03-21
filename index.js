//node modules
const inquirer = require('inquirer');
const fs = require('fs');

//get to html outline
const generateHTML = require('./src/generateHTML.js');

//pull from roles
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');


const teamArray = [];

const addEmployee = () => {

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Please enter your role',
            choices: [Manager, Engineer, Intern]
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your office email'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github URL?',
            when: (input) => input.role === Engineer
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school are you attending?',
            when: (input) => input.role === Intern
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is your office number?',
            when: (input) => input.role === Manager
        }
    ])

    .then(data => {
        let { role, name, id, email, github, university, office, confirmEmployee } = data;
        let employee;

        if (role === 'Intern') {
            employee = new Intern(name, id, email, university);
            teamArr.push(employee)
            console.log(employee);
        } else if (role === 'Engineer') {
            employee = new Engineer(name, id, email, github);
            teamArr.push(employee);
            console.log(employee);
        } else {
            employee = new Manager(name, id, email, office);
            teamArr.push(employee);
            console.log(employee);
        }

        if (confirmEmployee) {
            return addEmployee(teamArr);
        } else {
            return teamArr;
        }
    })
};

const writeFile = data => {
    fs.writeFile('dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("All team profiles have been successfully generated!")
        }
    })
};

addEmployee()
    .then(teamArr => {
        return generateHTML(teamArr)
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err)
    }); 