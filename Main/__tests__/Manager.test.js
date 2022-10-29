// Bring in Manager
const Manager = require("../lib/Manager");

describe("ManagerTest", () => {
    // Test for instantiating an Manager instance
    test("Can instantiate Manager instance", () => {
        const e = new Manager();
        expect(typeof(e)).toBe("object");
    });


    /* TESTS FOR SETTERS */
    test("Can set name via constuctor arguments", () => {
        // Variable for name
        const testValue = "example name";
        // Variable for new Manager(passing in the variable for name here)
        const e = new Manager(testValue);
        // Set up your expect and toBe
        expect(e.name).toBe(testValue);
    });

    test("Can set id via constructor argument", () => {
        // Variable for the test value, in this case a number since it's an id
        const testValue = 100;
        // Varibale for new Manager("example name as a string", testValue)
        const e = new Manager("example name", testValue);
        // Set up your expect and toBe
        expect(e.id).toBe(testValue);
    });

    test("Can set email via constructor argument", () => {
        // Variable for test value
        const testValue = "sampleEmail";
        // Variable for new Manager("example name", example number, test value)
        const e = new Manager("example name", 100, testValue);
        // Set up your expect and toBe
        expect(e.email).toBe(testValue);
    });

    test("Can set office number via constructor argument", () => {
        // Variable for test value
        const testValue = "sampleNumber";
        // Variable for new Manager("example name", example number, test value)
        const e = new Manager("example name", 100, "sampleEmail", testValue);
        // Set up your expect and toBe
        expect(e.officeNumber).toBe(testValue);
    });


    /* TEST FOR GETTERS */
    test("getRole() should return \"Manager\"", () => {
        // testValue
        const testValue = "Manager";
        // new Manager("example name", testValue)
        const e = new Manager("Alice", testValue);
        // expect and toBe
        expect(e.getRole()).toBe(testValue);
    });
});