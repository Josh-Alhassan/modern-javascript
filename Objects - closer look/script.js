const person = {
    name: "Joshua",
    age: 24,
    hubbies: ["Sports", "Cooking"],
    greet: function() {
        alert("Hello, there!!")
    }
}

person.greet()

// Adding property
person.isAdmin = true;

// Modifying property
person.age = 25;
console.log(person)
// Deleting property
delete person.hubbies;

console.log(person)