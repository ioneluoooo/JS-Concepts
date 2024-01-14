//* Prototype - a design pattern that allows objects to inherit properties and methods from other objects.It allows us to create objects from skeletons of other objects.

const car = {
    wheels: 4,

    init() {
        console.log(`I have ${this.wheels} wheels, my owner is ${this.owner}`)
    }
}

const carWithOwner = Object.create(car, {
    // we used car's skeleton to create another object
    // the create method gets firstly the prototype and then additional properties 
    owner: {
        value: 'Ioneluos'
    }
})

console.log(carWithOwner.__proto__ === car)

carWithOwner.init()