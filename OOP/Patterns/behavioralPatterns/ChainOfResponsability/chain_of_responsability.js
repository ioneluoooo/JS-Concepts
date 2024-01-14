//* Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

class MySum {
    constructor(initialValue = 42) {
        this.sum = initialValue;
    }

    add(value) {
        this.sum += value;
        return this
    }
}

const sum1 = new MySum();
console.log(sum1.add(8).add(1).add(10).add(9));