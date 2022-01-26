/*
Prototype

*/

function workshop(teacher){
    this.teacher = teacher;
}


workshop.prototype.ask = function(question){
    // this.teacher -> deepJS.teacher
    console.log(this.teacher, question);
}

var deepJS = new workshop("Kyle");

deepJS.ask("Is 'prototype' a class?");
