const Intern = require('../lib/intern')
const intern = new Intern("bob", 1, "bobemail", "utah", "Intern")
test('test all the Intern paramaters', () => {
    expect(intern.getName()).toBe("bob");
    expect(intern.getId()).toBe(1);
    expect(intern.getEmail()).toBe("bobemail");
    expect(intern.getSchool()).toBe("utah");
    expect(intern.getRole()).toBe("Intern");
  });