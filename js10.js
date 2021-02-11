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
