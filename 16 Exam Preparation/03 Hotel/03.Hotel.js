class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;

        this.roomsPricing = {
            single: 50,
            double: 90,
            maisonette: 135
        };

        this.servicesPricing = {
            food: 10,
            drink: 15,
            housekeeping: 25
        };

        /*  from our hotel capacity which we get by USER, we
            see how much rooms of type we have
            -- The single rooms are 50 % of the given capacity
            -- The double rooms are 30 % of the given capacity
            -- The maisonette rooms are 20 % of the given capacity
            All rooms should be INTEGERS !!!
        */
        this.availables = {
            single: Math.floor(this.capacity * 0.5),
            double: Math.floor(this.capacity * 0.3),
            maisonette: Math.floor(this.capacity * 0.2)
        }
    }

    rentARoom(clientName, roomType, nights) {
        if (this.availables[roomType] <= 0) {
            const output = [];
            output.push(`No ${roomType} rooms available!`);

            // check for unoccupied rooms
            const keys = Object.keys(this.availables)
                .filter(value => this.availables[value] > 0);

            for (const room of keys) {
                output.push(`Available ${room} rooms: ${this.availables[room]}.`);
            }

            return output.join(' ');
        }

        const output = `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber}.`;
        const obj = {
            clientName,
            roomType,
            nights,
            currentBookingNumber: this.currentBookingNumber
        };
        this.bookings.push(obj);
        // this piece of code below will remove 1 room from availables rooms from given roomType
        this.availables[roomType]--;
        this.currentBookingNumber++;

        return output;
    }

    roomService(currentBookingNumber, serviceType) {
        const currentRoom = this.bookings.filter(x => x.currentBookingNumber === currentBookingNumber);

        if (currentRoom.length === 0) {
            return `The booking ${currentBookingNumber} is invalid.`;
        }

        if (!this.servicesPricing.hasOwnProperty(serviceType)) {
            return `We do not offer ${serviceType} service.`
        }

        if (!currentRoom[0].hasOwnProperty('services')) {
            currentRoom[0]['services'] = [];
        }

        currentRoom[0]['services'].push(serviceType);
        return `Mr./Mrs. ${currentRoom[0]['clientName']}, Your order for ${serviceType} service has been successful.`
    }

    checkOut(currentBookingNumber) {
        // get only the room number
        const currentRoom = this.bookings.filter(x => x.currentBookingNumber === currentBookingNumber)[0];

        if (!currentRoom) {
            return `The booking ${currentBookingNumber} is invalid.`;
        }

        let totalMoney = 0;
        const roomType = currentRoom['roomType'];
        // after checkOut we have free room and we add it to other free rooms from current type
        this.availables[roomType]++;

        this.bookings = this.bookings.filter(x => x.currentBookingNumber !== currentBookingNumber);

        totalMoney = this.roomsPricing[roomType] * currentRoom['nights'];

        if (!currentRoom['services']) {
            return `We hope you enjoyed your time here, Mr./Mrs. ${currentRoom['clientName']}. The total amount of money you have to pay is ${totalMoney} BGN.`
        }

        let totalServicesMoney = 0;

        for (const service of currentRoom['services']) {
            totalServicesMoney += this.servicesPricing[service];
        }

        return `We hope you enjoyed your time here, Mr./Mrs. ${currentRoom['clientName']}. The total amount of money you have to pay is ${totalMoney + totalServicesMoney} BGN. You have used additional room services, costing ${totalServicesMoney} BGN.`
    }

    report() {
        const output = [];

        output.push(`${this.name.toUpperCase()} DATABASE:`);
        output.push('-'.repeat(20));

        if (this.bookings.length === 0) {
            output.push('There are currently no bookings.');
            return output.join('\n');
        }

        const middleOutput = [];
        for (const room of this.bookings) {
            const current = [];
            current.push(`bookingNumber - ${room['currentBookingNumber']}`);
            current.push(`clientName - ${room['clientName']}`);
            current.push(`roomType - ${room['roomType']}`);
            current.push(`nights - ${room['nights']}`);

            if (room['services']){
                const services = [];

                for (const currentService of room['services']) {
                    services.push(currentService)
                }
                current.push('services: ' + services.join(', '));
            }

            middleOutput.push(current.join('\n'));
        }

        output.push(middleOutput.join('\n----------\n'));

        return output.join('\n');
    };
}


/* first test input */

// let hotel = new Hotel('HotUni', 10);
//
// console.log(hotel.rentARoom('Peter', 'vip', 4));
// console.log(hotel.rentARoom('Peter', 'single', 4));
// console.log(hotel.rentARoom('Robert', 'double', 4));
// console.log(hotel.rentARoom('Geroge', 'maisonette', 6));


/* second test input */

// let hotel = new Hotel('HotUni', 10);
//
// hotel.rentARoom('Peter', 'single', 4);
// hotel.rentARoom('Robert', 'double', 4);
// hotel.rentARoom('Geroge', 'maisonette', 6);
//
// console.log(hotel.roomService(3, 'housekeeping'));
// console.log(hotel.roomService(3, 'drink'));
// console.log(hotel.roomService(2, 'room'));
//
//
// console.log(hotel.checkOut(44));
// console.log(hotel.checkOut(3));


/* third test input */

let hotel = new Hotel('HotUni', 10);

hotel.rentARoom('Peter', 'single', 4);
hotel.rentARoom('Robert', 'double', 4);
hotel.rentARoom('Geroge', 'maisonette', 6);

hotel.roomService(3, 'housekeeping');
hotel.roomService(3, 'drink');
hotel.roomService(2, 'room');

console.log(hotel.report());
