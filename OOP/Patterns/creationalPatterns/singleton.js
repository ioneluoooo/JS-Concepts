//* The Singleton Pattern is a design pattern used in software engineering to ensure that a class has only one instance and provides a global point of access to that instance.

class Database {
    constructor(data) {

        if(Database.exists) {
            return Database.instance
        }
            Database.instance = this;
            Database.exists = true;
            this.data = data;
    }

    getData() {
        return this.data;
    }
}

const mongo = new Database('MongoDB');
console.log(mongo.getData()); // returns MongoDB

const mysql = new Database('MySql');
console.log(mysql.getData()); // returns MongoDB