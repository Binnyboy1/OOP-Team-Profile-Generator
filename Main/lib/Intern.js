const Employee = require('./Employee');

class Intern extends Employee {

    constructor(arg1, arg2, arg3, arg4) {
        const name = arg1;
        const id = arg2;
        const email = arg3;
        super(name, id, email);

        this.school = arg4;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }

}

module.exports = Intern;