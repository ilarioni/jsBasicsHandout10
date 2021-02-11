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

