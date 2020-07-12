const Engineer = require('../lib/engineer')
const engineer = new Engineer("bob", 1, "bobemail", "bobgit", "Engineer")
test('test all the Engineer paramaters', () => {
    expect(engineer.getName()).toBe("bob");
    expect(engineer.getId()).toBe(1);
    expect(engineer.getEmail()).toBe("bobemail");
    expect(engineer.getGitHub()).toBe("bobgit");
    expect(engineer.getRole()).toBe("Engineer");
  });