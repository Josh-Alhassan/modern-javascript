const person = {
    name: "Joshua",
    "last name": 'Alhassan',
    age: 24,
    hubbies: ["Sports", "Cooking"],
    greet: function() {
        alert("Hello, there!!")
    },
    1.5: "it's a +ve integer",
}

// person.greet()

// Adding property
person.isAdmin = true;

// Modifying property
person.age = 25;
console.log(person)
// Deleting property
delete person.hubbies;

console.log(person)
console.log(person['last name']);
console.log(person[1.5]);