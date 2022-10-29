// Bring in Engineer
const Engineer = require("../lib/Engineer");

describe("EngineerTest", () => {
    // Test for instantiating an Engineer instance
    test("Can instantiate Engineer instance", () => {
        const e = new Engineer();
        expect(typeof(e)).toBe("object");
    });


    /* TESTS FOR SETTERS */
    test("Can set name via constuctor arguments", () => {
        // Variable for name
        const testValue = "example name";
        // Variable for new Engineer(passing in the variable for name here)
        const e = new Engineer(testValue);
        // Set up your expect and toBe
        expect(e.name).toBe(testValue);
    });

    test("Can set id via constructor argument", () => {
        // Variable for the test value, in this case a number since it's an id
        const testValue = 100;
        // Varibale for new Engineer("example name as a string", testValue)
        const e = new Engineer("example name", testValue);
        // Set up your expect and toBe
        expect(e.id).toBe(testValue);
    });

    test("Can set email via constructor argument", () => {
        // Variable for test value
        const testValue = "sampleEmail";
        // Variable for new Engineer("example name", example number, test value)
        const e = new Engineer("example name", 100, testValue);
        // Set up your expect and toBe
        expect(e.email).toBe(testValue);
    });

    test("Can set GitHub via constructor argument", () => {
        // Variable for test value
        const testValue = "greatCode";
        // Variable for new Engineer("example name", example number, test value)
        const e = new Engineer("example name", 100, "sampleEmail", testValue);
        // Set up your expect and toBe
        expect(e.github).toBe(testValue);
    });


    /* TEST FOR GETTERS */
    test("getGithub() should return GitHub via local variables", () => {
        // testValue
        const testValue = "greatCode";
        // new Engineer("example name", testValue)
        const e = new Engineer("example name", 100, "sampleEmail", testValue);
        // expect and toBe
        expect(e.getGithub()).toBe(testValue);
    });

    test("getRole() should return \"Engineer\"", () => {
        // testValue
        const testValue = "Engineer";
        // new Engineer("example name", testValue)
        const e = new Engineer("Alice", testValue);
        // expect and toBe
        expect(e.getRole()).toBe(testValue);
    });
});