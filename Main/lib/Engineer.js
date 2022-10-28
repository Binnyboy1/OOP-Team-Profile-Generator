const Employee = require('./Employee');

class Engineer extends Employee {

    constructor(arg1) {
        const name = 1;
        const id = 2;
        const email = 3;
        super(name, id, email);

        this.github = arg1;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

}