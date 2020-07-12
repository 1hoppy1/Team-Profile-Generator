const Manager = require('../lib/manager')
const manager = new Manager("bob", 1, "bobemail", 8, "Manager" )
test('test all the Manager paramaters', () => {
    expect(manager.getName()).toBe("bob");
    expect(manager.getId()).toBe(1);
    expect(manager.getEmail()).toBe("bobemail");
    expect(manager.getOfficeNumber()).toBe(8);
    expect(manager.getRole()).toBe("Manager");
  });