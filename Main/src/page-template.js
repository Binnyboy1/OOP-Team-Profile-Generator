const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        // console.log(Object.values(manager));
        // console.log(Object.keys(manager));
        return `<div class="bg-indigo-100 m-4 w-auto w-64 h-auto shadow-xl">
                    <div class="bg-indigo-500 p-4">
                        <p class="text-white text-4xl">${manager.name}</p>
                        <p class="text-white text-2xl pt-1"><span class="fa-solid fa-user-tie"></span> Manager</p>
                    </div>
                    <div class="p-6">
                        <p class="bg-indigo-200 text-indigo-900 text-base p-2 m-1">ID: ${manager.id}</p>
                        <p class="bg-indigo-200 text-indigo-900 text-base p-2 m-1">Email: ${manager.email}</p>
                        <p class="bg-indigo-200 text-indigo-900 text-base p-2 m-1">Office number: ${manager.officeNumber}</p>
                    </div>
                </div>`;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        // console.log(Object.values(engineer));
        // console.log(Object.keys(engineer));
        return `<div class="bg-indigo-100 m-4 w-auto w-64 h-auto shadow-xl">
                    <div class="bg-indigo-500 p-4">
                        <p class="text-white text-4xl">${engineer.name}</p>
                        <p class="text-white text-2xl pt-1"><span class="fa-solid fa-compass-drafting"></span> Engineer</p>
                    </div>
                    <div class="p-6">
                        <p class="bg-indigo-200 text-indigo-900 text-base p-2 m-1">ID: ${engineer.id}</p>
                        <p class="bg-indigo-200 text-indigo-900 text-base p-2 m-1">Email: ${engineer.email}</p>
                        <p class="bg-indigo-200 text-indigo-900 text-base p-2 m-1">GitHub: ${engineer.github}</p>
                    </div>
                </div>`;
    };

    // create the html for interns
    const generateIntern = intern => {
        // console.log(Object.values(intern));
        // console.log(Object.keys(intern));
        return `<div class="bg-indigo-100 m-4 w-auto w-64 h-auto shadow-xl">
                    <div class="bg-indigo-500 p-4">
                        <p class="text-white text-4xl">${intern.name}</p>
                        <p class="text-white text-2xl pt-1"><span class="fa-solid fa-graduation-cap"></span> Intern</p>
                    </div>
                    <div class="p-6">
                        <p class="bg-indigo-200 text-indigo-900 text-base p-2 m-1">ID: ${intern.id}</p>
                        <p class="bg-indigo-200 text-indigo-900 text-base p-2 m-1">Email: ${intern.email}</p>
                        <p class="bg-indigo-200 text-indigo-900 text-base p-2 m-1">School: ${intern.school}</p>
                    </div>
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
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
                integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="     crossorigin="anonymous" 
                referrerpolicy="no-referrer"
            />
            <!-- CSS file -->
            <link rel="stylesheet" href="./assets/css/style.css" />
            <title>Team Creator</title>
        </head>

        <body class="bg-indigo-200">
            <div class="bg-indigo-500 mx-auto text-center py-12">
                <h1 class="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">My Team</h1>
            </div>

            <div class="flex flex-row flex-wrap justify-center pt-8">
                ${generateTeam(team)}
            </div>
        </body>
    </html>
    `
}
// */