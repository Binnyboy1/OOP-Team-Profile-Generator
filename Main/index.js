const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');

const teamMembers = [];


// set-up
const roles = ["manager", "engineer", "intern"];
const libs = [Manager, Engineer, Intern];

const managerTest = {
    type: 'input',
    message: 'Enter office number',
    name: 'officeNum'
}

const engineerTest = {
    type: 'input',
    message: 'Enter GitHub username',
    name: 'github'
}

const internTest = {
    type: 'input',
    message: 'Enter school',
    name: 'school'
}

// function for adding members - inquirer questions
function callInquirer(role) {

    inquirer
        .prompt([
            {
                type: 'input',
                message: `Enter team ${role}\'s name`,
                name: 'teamRole'
            },
            {
                type: 'input',
                message: 'Enter employee ID',
                name: 'employeeID'
            },
            {
                type: 'input',
                message: 'Enter email address',
                name: 'email'
            },
            eval(`${role}Test`)
        ])
        .then((response) => {
            const ans = Object.values(response);
            const [param1, param2, param3, param4] = ans;
            // take those questions and create a new Role with the user provided answers
            const addition = new (libs[roles.indexOf(role)])(param1, param2, param3, param4);
            // push that new Role to the team members array
            teamMembers.push(addition);
            console.log(teamMembers);

            // Selection menu
            inquirer
                .prompt([
                    {
                        type: 'list',
                        message: 'Select next step',
                        choices: ["Add engineer", "Add intern", "Finish"],
                        name: 'next'
                    }
                ])
                .then((response) => {
                    switch (response.next) {
                        case "Add engineer":
                            callInquirer("engineer");
                            break;
                        case "Add intern":
                            callInquirer("intern");
                            break;
                        case "Finish":
                            // call function to generate HTML
                            // fs.writeFile(/path, generateTeam(teamMembers));
                    }
                });

        });
}

// starting up function
callInquirer("manager");