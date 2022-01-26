var t = "kyle";

function otherClass() {
    t ='hello';
    topic = "sheesh";
    console.log("Welcome");
}

otherClass();

console.log(t);
console.log(topic);

// undefined and undeclared

// function expression

var handler = function(){
    // anynomous 
};

var handle = function keyHandle(){
    // named function
};

// arrow function

// An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

// Differences & Limitations:

// Does not have its own bindings to this or super, and should not be used as methods.
// Does not have new.target keyword.
// Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
// Can not be used as constructors.
// Can not use yield, within its body.

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));
  // expected output: Array [8, 6, 7, 9]


  // IIFEs- Immediately Invoked function expression

var t = "kyle";

(function aT(){
    var t = "ram";
    console.log(t);
})();

console.log(t);

// block scoping using let

var te = 'ram';

{
    let te = "shay";
    console.log(te);
}

console.log(te);

// closure 

/*
Closure is when a function "remembers" the variables outside of it, even if you pass 
that function elsewhere.
*/


function ask(question){
    setTimeout(function waitASec(){
        console.log(question);
    },300);
}



ask("what is closure?");