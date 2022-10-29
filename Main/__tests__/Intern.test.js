// Bring in Intern
const Intern = require("../lib/Intern");

describe("InternTest", () => {
    // Test for instantiating an Intern instance
    test("Can instantiate Intern instance", () => {
        const e = new Intern();
        expect(typeof(e)).toBe("object");
    });


    /* TESTS FOR SETTERS */
    test("Can set name via constuctor arguments", () => {
        // Variable for name
        const testValue = "example name";
        // Variable for new Intern(passing in the variable for name here)
        const e = new Intern(testValue);
        // Set up your expect and toBe
        expect(e.name).toBe(testValue);
    });

    test("Can set id via constructor argument", () => {
        // Variable for the test value, in this case a number since it's an id
        const testValue = 100;
        // Varibale for new Intern("example name as a string", testValue)
        const e = new Intern("example name", testValue);
        // Set up your expect and toBe
        expect(e.id).toBe(testValue);
    });

    test("Can set email via constructor argument", () => {
        // Variable for test value
        const testValue = "sampleEmail";
        // Variable for new Intern("example name", example number, test value)
        const e = new Intern("example name", 100, testValue);
        // Set up your expect and toBe
        expect(e.email).toBe(testValue);
    });

    test("Can set School via constructor argument", () => {
        // Variable for test value
        const testValue = "Coding Academy";
        // Variable for new Intern("example name", example number, test value)
        const e = new Intern("example name", 100, "sampleEmail", testValue);
        // Set up your expect and toBe
        expect(e.school).toBe(testValue);
    });


    /* TEST FOR GETTERS */
    test("getSchool() should return School via local variables", () => {
        // testValue
        const testValue = "Coding Academy";
        // new Intern("example name", testValue)
        const e = new Intern("example name", 100, "sampleEmail", testValue);
        // expect and toBe
        expect(e.getSchool()).toBe(testValue);
    });

    test("getRole() should return \"Intern\"", () => {
        // testValue
        const testValue = "Intern";
        // new Intern("example name", testValue)
        const e = new Intern("Alice", testValue);
        // expect and toBe
        expect(e.getRole()).toBe(testValue);
    });
});