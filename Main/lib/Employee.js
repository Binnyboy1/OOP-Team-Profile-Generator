class Employee {

    constructor(arg1, arg2, arg3) {
        this.name = arg1;
        this.id = arg2;
        this.email = arg3;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }

}

module.exports = Employee;