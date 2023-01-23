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


// How Passing Arguements works
const flight = "LH234";
const joshua = {
    name: "Joshua Alhasan",
    passpost: 2345566677892,
};

const checkIn = function(flightNum, passenger) {
    flightNum = "LH999";
    passenger.name = "Mr. " + passenger.name;

    if (passenger.passport === 2345566677892) {
        console.log("Checked In")
    } else {
        console.log("Wrong passport!")
    }
};

checkIn(flight, joshua);
console.log(joshua)

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000);
}

newPassport(joshua)
checkIn(flight, joshua)

// First class and higher order function
const oneWord = function(str) {
    return str.replace(/ /g, '');
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// HIgher Order Function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);

    console.log(`Transformed by : ${fn.name}`)
}

transformer(`JavaScript is the best:`, upperFirstWord);
transformer(`JavaScript is the best:`, oneWord)