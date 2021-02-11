// JavaScript -- this -- keyword

var person = {
    firstName: "ilia", 
    lastName: "Doe", 
    id: 3102, 
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.firstName);
console.log(person.id);
console.log(person.lastName);
console.log(person.fullName());

// JS -- this -- keyword refers to the object it belongs to.
// In a method, this refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), and apply() can refer this to any object.

// In this example this refers to person2, even if it is a method of person1:

var person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

var person2 = {
    firstName: "ilia",
    lastName: "archer"
};
console.log(person1.fullName.call(person2));

// JS Arrow Function
// before
var hello = function() {
    return "Hello World";
};
console.log(hello());

// after
var hello1 = () => {
    return "Hello wonderful World!";
};
console.log(hello1());

 // JSON Data
// it is written as name/value pairs

//  "firstname":"ilia"

// JSON objects
// {"firstName":"ilia", "lastName":"archer"}

// JSON Arrays
"employees":[
    {"firstName":"ilia", "lastName":"archer"},
    {"firstName":"salome", "lastName":"leshka"},
    {"firstName":"gio", "lastName":"dara"}
]
