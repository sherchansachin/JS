console.log(typeof(42))
3.14

"Hello, Friend."

true 
false

null
undefined

console.log(typeof([ 1,2,3 ]))
console.log(typeof({ name: "Ram" }))


// Operations

1 + 2

32 - 1

"Kylie " + "Saili"

!false 

console.log(3.0 == 3)

true || false

// variable

var name = "Simpson";

var age;
age = 12;

age++;
age += 2;

console.log(age);

var friends = ["Luke", "Marc"];

console.log( friends.length);
console.log( friends[1]);


// expressions

var age = 17;

age = 1 + (age *2);

console.log(age);

// if & else

// if(isEnrolled()){
//     takeClass();
// }
// else{
//     enrollFirst();
// }

// Loops

var stds = [ 'Ram', 'Kylie', 'Saili'];

for(let i =0; i<stds.length; i++){
    geetStudent(stds[i]);
}

for(let std of stds){
    welcomeStudent(std);
}

//while 

var stds = [ 'Ram', 'Kylie', 'Saili'];

while(stds.length > 0){
    let student = stds.shift();
    console.log(`Hello, ${student}! Welcome`);
}


// fun functions 

// `` interpolated string

function geetStudent(student) {
    console.log(
        `Hello, ${student.name}`
    );
}

function welcomeStudent(student) {
    console.log(
        `Welcome, ${student.name}`
    );
}
