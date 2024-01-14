//* Method overrinding allows a subclass to provide a specialized version of a method inherited from its superclass.


class Dog {
    constructor(name, breed) {
        this.name = name
        this.breed = breed
    }

    bark() {
        return console.log('Woof')
    }
}

class Rufus extends Dog {
    constructor(name) {
        super(name)
    }

    bark() {
        return console.log('Not woof')
    }
}