//* Encapsulation means containing all important information inside an object, and only exposing selected information to the outside world.

class Dog {
    constructor(name, race) {
        this.name = name
        this.race = race
    }

    getRace() {
        return this.race
    }

    bark() {
        return console.log('Barking')
    }
}

const rufus = new Dog('name', 'beagle')

console.log(rufus.getRace())