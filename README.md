# modern-javascript

## A closer look at Objects

### Module Introduction

Alot of things in JavaScript are objects. Some created by the browser, others created by us.

### What are Objects

Objects are core data structure in JavaScript. They help us tyoically reflect "real-world" entities. Objects are made up of properties and methods. We store data in properties and actions in methods. Objects allow us to group related data together and split your code into logical pieces.

In Objects, we have two types of values:
+ Primitive Values: String, Boolean, null, Number, Undefined, Symbol.
+ Reference Values: Objects {...}, Arrays [...], Dom nodes.

Note: Never assign undefind to any object value. It's bad code. Use "null" value instead.

### Special key names & Square Brcket Property Access
Anything we can use as a variable name, can be used as a key name. They are even flexible than variable. The vice-versa is not true.

We can use any string as key in object.

### Property Types & Property Order
We can use +intgers only as object keys. Dot notation is not used or allowed to access the value of the key +integer only bracket notation.

In JS objects notations are ordered in the order of how we create it. There's an exception though, if your object keys are numbers, it will be sorted.