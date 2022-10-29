const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        // console.log(Object.values(manager));
        // console.log(Object.keys(manager));
        return `<div>
                    <p class="text-4xl">${manager.name}</p>
                    <p class="text-2xl">Manager</p>
                    <ul class="list-disc">
                        <li>ID: ${manager.id}</li>
                        <li>Email: ${manager.email}</li>
                        <li>Office number: ${manager.officeNumber}</li>
                    </ul>
                </div>`;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        // console.log(Object.values(engineer));
        // console.log(Object.keys(engineer));
        return `<div>
                    <p class="text-4xl">${engineer.name}</p>
                    <p class="text-2xl">Engineer</p>
                    <ul class="list-disc">
                        <li>ID: ${engineer.id}</li>
                        <li>Email: ${engineer.email}</li>
                        <li>GitHub: ${engineer.github}</li>
                    </ul>
                </div>`;
    };

    // create the html for interns
    const generateIntern = intern => {
        // console.log(Object.values(intern));
        // console.log(Object.keys(intern));
        return `<div>
                    <p class="text-4xl">${intern.name}</p>
                    <p class="text-2xl">Intern</p>
                    <ul class="list-disc">
                        <li>ID: ${intern.id}</li>
                        <li>Email: ${intern.email}</li>
                        <li>School: ${intern.school}</li>
                    </ul>
                </div>`;
    };

    // use the team array to generate pieces of html based on the employee role
    let globalHTML = "";
    team.forEach(employee => {
        // template: generate<NAME>( <DATA> );
        globalHTML += eval(`generate${employee.constructor.name}`)(employee);
    });
    // console.log(globalHTML);

    return globalHTML;
}

// module.exports = generateTeam;
// /*
module.exports = team => {
    // template literal - html body that calls the generate team function
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <!-- Reset CSS file -->
            <link rel="stylesheet" href="./assets/css/reset.css" />
            <!-- Tailwind CSS -->
            <script src="https://cdn.tailwindcss.com"></script> 
            <!-- Icon Library Link -->
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                crossorigin="anonymous"
            />
            <!-- CSS file -->
            <link rel="stylesheet" href="./assets/css/style.css" />
            <title>Team Creator</title>
        </head>

        <body>
            <div class="bg-indigo-500 mx-auto text-center py-12">
                <h1 class="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">My Team</h1>
            </div>

            <div class="container">
                ${generateTeam(team)}
            </div>
        </body>
    </html>
    `
}
// */