// TODO: Write code to define and export the Employee class 
// HINT: This class should be exported as an object.

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;

    }

    getRole() {
        return "Employee";
    }
}

// export the class
export default Employee;

