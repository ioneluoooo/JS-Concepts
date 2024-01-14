//* Adapter - a pattern that allows objects with incompatible interfaces to collaborate
//* An adapter is a special object that converts the interface of one object so that another object can understand it.


class OldCalc {
    operation(t1, t2, operation) {
        switch (operation) {
            case 'add': return t1 + t2;
            case 'substract': return t1 - t2;
            default : return NaN;
        }
    }
}

class NewCalc {
    add(t1, t2) {
        return t1 + t2;
    }

    substract(t1, t2) {
        return t1 - t2;
    }
}

class CalcAdapter {
    constructor()  {
        this.calc = new NewCalc();
    }

    operation(t1, t2, operation) {
        switch (operation) {
            case 'add': return this.calc.add(t1, t2);
            case 'substract': return this.calc.substract(t1, t2);
            default : return NaN;
        }
    }
}

const oldCalc = new OldCalc();
console.log(oldCalc.operation(10, 5, 'add'));

const newCalc = new NewCalc();
console.log(newCalc.add(10, 5));

const adapter = new CalcAdapter();
console.log(adapter.operation(25, 10, 'substract'))