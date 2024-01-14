class Vehicles {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }

    getDetails() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`
    }
}

class Car extends Vehicles {
    constructor(make,model,year,doors) {
        super(make,model,year)
        this.doors = doors
    }

    getDetails(){
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Number of doors: ${this.doors}`
    }
}

const Dodge = new Car('Dodge', 'Challenger', '1990', '2')

console.log(Dodge.getDetails())