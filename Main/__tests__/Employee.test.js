// Bring in Employee
const Employee = require("../lib/Employee");

describe("EmployeeTest", () => {
    // Test for instantiating an Employee instance
    test("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });


    /* TESTS FOR SETTERS */
    test("Can set name via constuctor arguments", () => {
        // Variable for name
        const testValue = "example name";
        // Variable for new Employee(passing in the variable for name here)
        const e = new Employee(testValue);
        // Set up your expect and toBe
        expect(e.name).toBe(testValue);
    });

    test("Can set id via constructor argument", () => {
        // Variable for the test value, in this case a number since it's    an id
        const testValue = 100;
        // Varibale for new Employee("example name as a string", testValue)
        const e = new Employee("example name", testValue);
        // Set up your expect and toBe
        expect(e.id).toBe(testValue);
    });

    test("Can set email via constructor argument", () => {
        // Variable for test value
        const testValue = "sampleEmail";
        // Variable for new Employee("example name", example number, test   value)
        const e = new Employee("example name", 100, testValue);
        // Set up your expect and toBe
        expect(e.email).toBe(testValue);
    });


    /* TEST FOR GETTERS */
    test("Can get name via getName()", () => {
        // Variable for test value
        const testValue = "Alice";
        // Variable for new Employee(testValue)
        const e = new Employee(testValue);
        // Expect using the getter, and then your toBe
        expect(e.getName()).toBe(testValue);
    });

    test("Can get id via getId()", () => {
        // testValue
        const testValue = 1;
        // new Employee("example name", testValue)
        const e = new Employee("Alice", testValue);
        // expect and toBe
        expect(e.getId()).toBe(testValue);
    });

    test("Can get email via getEmail", () => {
        // testValue
        const testValue = "Alice@email.com";
        // new Employee("example name", testValue)
        const e = new Employee("Alice", 1, testValue);
        // expect and toBe
        expect(e.getEmail()).toBe(testValue);
    });

    test("getRole() should return \"Employee\"", () => {
        // testValue
        const testValue = "Employee";
        // new Employee("example name", testValue)
        const e = new Employee("Alice", testValue);
        // expect and toBe
        expect(e.getRole()).toBe(testValue);
    });
});