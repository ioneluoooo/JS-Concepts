//* Constructor - a way to create and initialize objects using a constructor function

//* old method
// function Server(name, ip) {
//     this.name = name; 
//     this.ip = ip;
// }

// /
// Server.prototype.getUrl = function () {
//     return `https://${this.ip}:80`
// }

//* New Method

class Server{
    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }

    getUrl() {
        return `https://${this.ip}:80`
    }
}

const aws = new Server('AWS German', '82.21.21.32')
