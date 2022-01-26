/*
"this" 

A function's this reference the execution context for that call,
determined entirely by how the function was called.

it's all about the call

this: dynamic content

A this-aware function can thus have a different context each time it's called,
which makes it more flexible and reusable
*/


var workshop = {
    teacher: "kyle",
    ask(question){
        console.log(this.teacher, question);
    },
};

// this is the implicit binding of workship as the this keyword
workshop.ask("What is implicit binding?");

function ask(question){
    console.log(this.teacher, question);
}

function otherClass(){
    //object
    var myContext = {teacher: "Suzy"};
    ask.call(myContext, "why");
}

otherClass();