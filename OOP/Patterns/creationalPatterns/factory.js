//* Factory Pattern - a creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created.


// Example 
class SimpleMembership {
    constructor(name) {
        this.name = name;
        this.cost = 50;
    }
}

class StandartMembership {
    constructor(name) {
        this.name = name;
        this.cost = 150;
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name;
        this.cost = 500;
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandartMembership,
        premium: PremiumMembership
    }

    create(name, type = 'simple') {
        const MemberShip = MemberFactory.list[type] || MemberFactory.list.simple;
        const member = new MemberShip(name);
        member.type = type
        member.define = function() {
            console.log(`${this.name} ${this.type}: ${this.cost}`)
        }

        return member;
    }
}

const factory = new MemberFactory();

const members = [
    factory.create('Vladilen', 'simple'),
    factory.create('Elena', 'premium'),
    factory.create('Vasilisa', 'standard')
];

members.forEach(m => {
    m.define();
})