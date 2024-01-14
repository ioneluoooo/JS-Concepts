class Person {
    constructor(name,age,country) {
        this.name = name
        this.age = age
        this.country = country
    }

    getDetails() {
        return `Name ${this.name} age: ${this.age} country: ${this.country}`
    } 
}

const John = new Person('John', '37', 'New Zealand')
const Michael = new Person('Michael', '17', 'Russia')

console.log(John.getDetails())
console.log(Michael.getDetails())