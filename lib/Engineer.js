// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.role = "Engineer";
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
}
 // export the class
module.exports = Engineer;
