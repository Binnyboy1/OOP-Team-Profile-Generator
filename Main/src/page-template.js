const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        // console.log(Object.values(manager));
        // console.log(Object.keys(manager));
        return `
        <div>
            <div>${manager.name}</div>
            <ul>
                <li>ID: ${manager.id}</li>
                <li>Email: ${manager.email}</li>
                <li>Office number: ${manager.officeNumber}</li>
            </ul>
        </div>
        `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        // console.log(Object.values(engineer));
        // console.log(Object.keys(engineer));
        return `
        <div>
            <div>${engineer.name}</div>
            <ul>
                <li>ID: ${engineer.id}</li>
                <li>Email: ${engineer.email}</li>
                <li>GitHub: ${engineer.github}</li>
            </ul>
        </div>
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        // console.log(Object.values(intern));
        // console.log(Object.keys(intern));
        return `
        <div>
            <div>${intern.name}</div>
            <ul>
                <li>ID: ${intern.id}</li>
                <li>Email: ${intern.email}</li>
                <li>School: ${intern.school}</li>
            </ul>
        </div>
        `;
    };

    // use the team array to generate pieces of html based on the employee role
    const genAll = function(arg) {
        arg.forEach(employee => {
            // template: generate<NAME>( <DATA> );
            var func = eval(`generate${employee.constructor.name}`)(employee);
            console.log(func);
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