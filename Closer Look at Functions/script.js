'use strict' 

const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
    const booking = {
        flight,
        numPassengers,
        price,
    };

    console.log(booking);
    bookings.push(booking);
}

console.log("LH123");
console.log("LH123", 2, 800)
console.log("LH123", 5)
console.log("LH213", undefined, 1000)