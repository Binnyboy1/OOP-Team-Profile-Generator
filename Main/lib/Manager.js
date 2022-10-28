const Employee = require('./Employee');

class Manager extends Employee {

    constructor(arg1) {
        const name = 1;
        const id = 2;
        const email = 3;
        super(name, id, email);

        this.officeNumber = arg1;
    }

    getRole() {
        return "Manager";
    }

}