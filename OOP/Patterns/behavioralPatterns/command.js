//* In object-oriented programming, the command pattern is a behavioral design pattern in which an object is used to encapsulate all information needed to perform an action or trigger an event at a later time. 

class myMath {
    constructor(initialValue = 0) {
        this.number = initialValue;
    }

    square() {
        return this.number ** 2;
    }

    cube() {
        return this.number ** 3;
    }
}

class Command {
    constructor(subject) {
        this.subject = subject;
        this.commandsExecuted = [];
    }

    execute(command) {
        this.commandsExecuted.push(command);
        return this.subject[command]();
    }
}

const x = new Command(new myMath(2))

console.log(x.execute('square'));
console.log(x.execute('cube'));