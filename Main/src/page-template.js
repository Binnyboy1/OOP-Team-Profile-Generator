const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `

        `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `

        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `

        `;
    };

    // use the team array to generate pieces of html based on the employee role
    const genAll = function(arg) {
        arg.forEach(employee => {
            console.log(employee.constructor.name);
            console.log("hi");
        });
    }

    genAll(team);
}

// module.exports = generateTeam;
// /*
module.exports = team => {
    // template literal - html body that calls the generate team function
    generateTeam(team)
}
// */