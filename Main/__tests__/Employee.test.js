// Bring in Employee
const { default: test } = require("node:test");
const Employee = require("../lib/Employee");

// Test for instantiating an Employee instance
test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});


/* TESTS FOR SETTERS */
test("Can set name via constuctor arguments", () => {
    // Variable for name
    // Variable for new Employee(passing in the variable for name here)
    // Set up your expect and toBe
});

test("Can set id via constructor argument", () => {
    // Variable for the test value, in this case a number since it's an id
    const testValue = 100;
    // Varibale for new Employee("example name as a string", testValue)
    const e = new Employee("Foo", testValue);
    // Set up your expect and toBe
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
    // Variable for test value
    // Variable for new Employee("example name", example number, test value)
    // Set up your expect and toBe
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
    // new Employee("example name", testValue)
    // expect and toBe
});

test("Can get email via getEmail", () => {
    // testValue
    // new Employee("example name", testValue)
    // expect and toBe
});

test("getRole() should return \"Employee\"", () => {
    // testValue
    // new Employee("example name", testValue)
    // expect and toBe
});