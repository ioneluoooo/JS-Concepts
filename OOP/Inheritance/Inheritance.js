//* Inheritance allows classes to inherit features of other classes

class Dog {
    constructor(name, race) {
        this.name = name
        this.race = race
    }

    getName() {
        return this.name
    }
    
    getRace() {
        return this.race
    }

    eat() {
        return console.log('The dog is eating')
    }
}

class SittingDog extends Dog {
    constructor(name, race) {
        super(name, race)
    }

    sit() {
        return console.log('The dog is siting')
    }
}

const Flufy = new SittingDog('flufy', 'Shepard')

console.log(Flufy.getRace())
Flufy.eat()
Flufy.sit()