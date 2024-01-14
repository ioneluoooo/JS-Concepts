// Inheritance - nasledovanie

function Student(firstName, lastName, grade){
    Person.call(this, firstName, lastName)
    this.grade = grade
}

// V1
Student.prototype = Object.create(Person.prototype, {
    constructor: {
        value: Student,
        enumerable: false,
        writable: true
    }
})

// V2
Object.setPrototypeOf(Student.prototype, Person.prototype)

Student.prototype.isGraduated = function() {
    return this.grade === 0
}

const student = new Student('Judy', 'Doe',7)