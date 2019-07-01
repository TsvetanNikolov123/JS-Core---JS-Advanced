function solution(arr, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    // tickets can be {} or [];
    const tickets = {};
    for (const arrElement of arr) {
        let [destination, price, status] = arrElement.split('|');
        price = Number(price);

        const currentTicket = new Ticket(destination, price, status);
        tickets.push(currentTicket);
    }

    let sortedTickets = [];
    switch (sortingCriteria) {
        case 'destination':
            sortedTickets = tickets.sort((a, b) => {
                return a.destination.localeCompare(b.destination);
            });
            break;
        case 'price':
            sortedTickets = tickets.sort((a, b) => {
                return a.price - b.price;
            });
            break;
        case 'status':
            sortedTickets = tickets.sort((a, b) => {
                return a.status.localeCompare(b.status);
            });
            break;
    }

    return sortedTickets;
}

solution(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
);