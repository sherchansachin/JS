// 1. Identify base case(s).
// 2. Identify recursive case(s).
// 3. Return where appropriate.
// 4. Write procedures for each case that bring you closer to the base case(s).

// var callMyself = function() {

//     if() {
//       // base case
//       return;
//     } else {
//       // recursive case
//       callMyself();
//     }
      
//     return;
//   };

//recursive loop
const loopNTime = (n) =>{

    console.log('n ==', n);

    //base case
    if(n <= 1){
        return 'complete';
    }
    return loopNTime(n-1);
};



loopNTime(5);