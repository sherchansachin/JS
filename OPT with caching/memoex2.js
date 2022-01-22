const times10 = (n) => (n * 10);

// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.

const memoizedClosureTimes10 = () => {
    // local version of cache| private
    let cache = {};

    //returning the function as| this is being rendered
    return (n) =>{
        if (n in cache){
            console.log("Fetching from cache:", n);
            return cache[n];
        }else{
            console.log('Calculating results');
            let result = n *10;
            cache[n] = result;
            return result;
        }
    };

};

// returned funtion from memoizedAdd
const memoClosureTimes10 = memoizedClosureTimes10();
console.log('~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~');
try {
  console.log('Task 3 calculated value:', memoClosureTimes10(9));	// calculated
  console.log('Task 3 cached value:', memoClosureTimes10(9));	// cached
} catch(e) {
  console.error('Task 3:', e);
}