const Employee = require('../lib/employee')
const employee = new Employee("bob", 1, "bobemail", "Employee")
test('test all the Employee paramaters', () => {
    expect(employee.getName()).toBe("bob");
    expect(employee.getId()).toBe(1);
    expect(employee.getEmail()).toBe("bobemail");
    expect(employee.getRole()).toBe("Employee");
  });