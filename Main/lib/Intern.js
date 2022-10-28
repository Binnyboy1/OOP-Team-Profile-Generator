const Employee = require('./Employee');

class Intern extends Employee {

    constructor(arg1) {
        const name = 1;
        const id = 2;
        const email = 3;
        super(name, id, email);

        this.school = arg1;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }

}