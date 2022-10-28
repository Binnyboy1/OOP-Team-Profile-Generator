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


// function for creating manager - inquirer questions
const managerTest = {
    type: 'input',
    message: 'Enter office number',
    name: 'officeNum'
}

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter team manager\'s name',
            name: 'managerName'
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
        managerTest
    ])
    // .then((response) =>
    //     fs.writeFile(
    //         `${response.fullName}.txt`,
    //         `
    //         Languages:
    //         ${response.languages}\n
    //         Communication preference:
    //         ${response.communication}
    //         `,
    //         (err) => err ? console.error(err) : console.log('Custom File stored')
    //     )
    // )
    .then((response) => {
        const ans = Object.values(response);
        const [param1, param2, param3, param4] = ans;

        // take those questions and create a new Manager with the user provided answers
        const manager = new Manager(param1, param2, param3, param4);
        
        // push that new Manager to the team members array
        teamMembers.push(manager);
        console.log(teamMembers);


        // const filename = `${data.fullName.toLowerCase().split(' ').join('')}.json`;

        // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) => 
        //     err ? console.log(err) : console.log('Success')
        // );
    });
  
    // follow the same pattern for each type of employee
    // build a function for them that uses inquirer


// STRUCTURING IT

// start with manager function, since every team needs a manager
// at the end of manager function, call a createTeam function

// this function would simply ask the user which type of employee they would like to add, based on their choice, run the correesponding function

// at the end, use fs to write file while sending the team array over to the function you brought in from page-template.js