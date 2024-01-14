//* Decorator - design pattern that allows behavior to be added to individual objects dynamically, without affecting the behavior of other objects from the same class.


class Server {
    constructor(ip, port) {
        this.ip = ip;
        this.port = port;
    }

    get url() {
        return  `https://${this.ip}:${this.port}`
    }
}

function aws(server) {
    server.isAWS = true;
    server.awsInfo = function() {
        return server.url;
    }
    return server;
}

function azure(server) {
    server.isAZURE = true;
    server.port += 500;

    return server;
}

const s1 = aws(new Server('12.34.56.78', 8080));
// aws() is the decorator, we are setting new behavior to an object
console.log(s1.isAWS);
console.log(s1.awsInfo());

const s2 = azure(new Server('98.87.76.65', 1000));
// azure() is the decorator
console.log(s2.isAZURE);
console.log(s2.port);