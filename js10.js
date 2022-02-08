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
/*
"employees":[
    {"firstName":"ilia", "lastName":"archer"},
    {"firstName":"salome", "lastName":"leshka"},
    {"firstName":"gio", "lastName":"dara"}
]
*/ 

// JS Debugging

// Often, when programming code contains errors, nothing will happen. There are no error messages, and you will get no indications where to search for errors.
// Searching for (and fixing) errors in programming code is called code debugging.

// JSON - Introduction
// JSON stands for JavaScript Object Notation. 
// JSON is a text format for storing and transporting data
// JSON is "self-describing" and easy to understand

// This example is a JSON string:  '{"name":"John", "age":30, "car":null}'

/*
It defines an object with 3 properties:
 - name
 - age
 - car

 Each property has a value.
 If you parse the JSON string with a JavaScript program, you can access the data as an object:

*/

let personName = obj.name;
let personAge = obj.age;

/*
What is JSON?

- JSON stands for JavaScript Object Notation
- JSON is a lightweight data-interchange format
- JSON is plain text written in JavaScript object notation
- JSON is used to send data between computers
- JSON is language independent *

The JSON syntax is derived from JavaScript object notation, but the JSON format is text only.
Code for reading and generating JSON exists in many programming languages.

The JSON format was originally specified by Douglas Crockford.

*/

// Why Use JSON?

/* The JSON format is syntactically similar to the code for creating JavaScript objects. Because of this, a JavaScript program can easily convert JSON data into JavaScript objects.
Since the format is text only, JSON data can easily be sent between computers, and used by any programming language.
JavaScript has a built in function for converting JSON strings into JavaScript objects:
 --  JSON.parse()

JavaScript also has a built in function for converting an object into a JSON string:
-- JSON.stringify()

 -- You can receive pure text from a server and use it as a JavaScript object.
 -- You can send a JavaScript object to a server in pure text format.
 -- You can work with data as JavaScript objects, with no complicated parsing and translations.

*/

// Storing Data
// When storing data, the data has to be a certain format, and regardless of where you choose to store it, text is always one of the legal formats.
// JSON makes it possible to store JavaScript objects as text.


// JSON Syntax

/*
The JSON syntax is a subset of the JavaScript syntax.

JSON syntax is derived from JavaScript object notation syntax:
-Data is in name/value pairs
-Data is separated by commas
-Curly braces hold objects
-Square brackets hold arrays


JSON Data - A Name and a Value

JSON data is written as name/value pairs (aka key/value pairs).
A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:

- "name":"John"

JSON names require double quotes.

*/ 
// JSON - Evaluates to JavaScript Objects
// The JSON format is almost identical to JavaScript objects.
// In JSON, keys must be strings, written with double quotes:

/* 

{"name":"John"}
In JavaScript, keys can be strings, numbers, or identifier names:
{name:"John"}

*/ 

// JSON Values

/*
In JSON, values must be one of the following data types:

- a string
- a number
- an object
- an array
- a boolean
- null

In JavaScript values can be all of the above, plus any other valid JavaScript expression, including:

- a function
- a date
- undefined


In JSON, string values must be written with double quotes:

{"name":"John"}

In JavaScript, you can write string values with double or single quotes:

{name:'John'}



JavaScript Objects
Because JSON syntax is derived from JavaScript object notation, very little extra software is needed to work with JSON within JavaScript.

With JavaScript you can create an object and assign data to it, like this:

person = {name:"John", age:31, city:"New York"};

You can access a JavaScript object like this:

// returns John
person.name;

It can also be accessed like this:
// returns John
person["name"];



Data can be modified like this:
person.name = "Gilbert";

It can also be modified like this:
person["name"] = "Gilbert";


person.name and person["name"] are same accessing tools of object keys/names


*/ 


// JSON vs XML

//Both JSON and XML can be used to receive data from a web server.
// The following JSON and XML examples both define an employees object, with an array of 3 employees:

/*
JSON Example 
{"employees":[
  { "firstName":"John", "lastName":"Doe" },
  { "firstName":"Anna", "lastName":"Smith" },
  { "firstName":"Peter", "lastName":"Jones" }
]}

*/ 


/*
XML example

<employees>
  <employee>
    <firstName>John</firstName> <lastName>Doe</lastName>
  </employee>
  <employee>
    <firstName>Anna</firstName> <lastName>Smith</lastName>
  </employee>
  <employee>
    <firstName>Peter</firstName> <lastName>Jones</lastName>
  </employee>
</employees>

*/

// Incrementing example  Scrimba

let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}


// innerText and textContent

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
}

// reset data and start it agai

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

// Scrimba part 2 
// Blacj jack creation

let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard + 6 // 23

if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
} else {
    console.log("You're out of the game! 😭")
}


