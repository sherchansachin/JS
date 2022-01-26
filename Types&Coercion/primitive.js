// everything in js is object, False

// symbol
// null? function? array?

// in js, variables don't have types, values do

var greeting = "Hello, js";

var s = greeting / 3;

console.log(s);

console.log(Number.isNaN(s));

// Don't use new

// String()
// Number()
// Boolean()

var yes = new Date("March 28, 2020");
console.log(yes.toUTCString());


// converting types: the way to convert from one type to another: coercion

var ms1 = "there are ";
var num = 12;
var ms2 = " students.";

console.log( ms1 + num + ms2);

var n = 13;

console.log(
    `There are ${n+""} students`
)

// equality

// == allows coercion (type different)

// === disallows coercion (types same)

var s = "fran ky";
var s2 = `${s}`;

s == s2;
s2 === s;
console.log(s);
console.log(s2);