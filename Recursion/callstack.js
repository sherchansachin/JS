// 1. Push called Fn on stack.
// 2. Execute Fn body.
// until...
// ... another fn is called:
//      Pause the current execution and start at step 1.
// ... a return is hit:
//      Pop the current Fn off the stack.
//      Resume executing the previous Fn.



// var callMe = function() {
//     callMe();
//     callMe();
//     callMe('anytime');
//   };

// callMe();

var tracker = 0;
var callMe = function(arg) {
  tracker++
  // base case
  if (tracker === 3) {
      
      return `loops! ${arg}`;
  }
  return callMe('anytime'); // => undefined
};







// stuck in the first frame
// return somewhere