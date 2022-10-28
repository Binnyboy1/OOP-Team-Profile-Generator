const Employee = require('./Employee');

class Engineer extends Employee {

    constructor(arg1, arg2, arg3, arg4) {
        const name = arg1;
        const id = arg2;
        const email = arg3;
        super(name, id, email);

        this.github = arg4;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

}

module.exports = Engineer;