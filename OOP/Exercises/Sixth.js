class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    annualSalary() {
        return this.salary * 12
    }
}

class Manager extends Employee {
    constructor(name, salary, bonuses, departament) {
        super(name, salary)
        this.bonuses = bonuses
        this.departament = departament
    }

    annualSalary() {
        return this.salary * 12 + this.bonuses * 12
    }
}


const manager = new Manager('John', 12000, 123, 'Marketing')

console.log(manager.name)
console.log(manager.annualSalary())