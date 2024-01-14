//* Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.
//* Facade pattern hides the complexities of the system and provides an interface to the client using which the client can access the system. 

class Complaints {
    constructor() {
        this.complaints = [];
    }

    reply(complaint) {

    }

    add(complaint) {
        this.complaints.push(complaint);
        return this.reply(complaint);
    }
}

class ProductComplaints extends Complaints {
    reply({ id, customer, details }) {
        return `Product: ${id}: ${customer} (${details})`;
    }
}

class ServiceComplaints extends Complaints {
    reply({ id, customer, details }) {
        return `Service: ${id}: ${customer} (${details})`;
    }
}

class ComplainRegistry {
    register(customer, type, details) {
        const id = Date.now();
        let complaint;

        if (type === 'service') {
            complaint = new ServiceComplaints();
        } else {
            complaint = new ProductComplaints();
        }

        return complaint.add({ id, customer, details });
    }
}

const registry = new ComplainRegistry();

console.log(registry.register('Ivan', 'service', 'Kakaiata oshibka'))