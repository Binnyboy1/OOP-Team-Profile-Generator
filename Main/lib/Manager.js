const Employee = require('./Employee');

class Manager extends Employee {

    constructor(arg1, arg2, arg3, arg4) {
        const name = arg1;
        const id = arg2;
        const email = arg3;
        super(name, id, email);

        this.officeNumber = arg4;
    }

    getRole() {
        return "Manager";
    }

}

module.exports = Manager;