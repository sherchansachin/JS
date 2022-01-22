const times10 = (n) => (n * 10);
// Task 4: Make your memo function generic and accept the times10 function as a callback rather than defining the n * 10 logic inside the if/else or pulling it in from the global scope.

// protip: Take advantage of the fact that parameters are saved in the closure as well, just like the cache from the previous example.

// callback - cb
const memoize = (cb) => {
    let cache = {};

    //returning the function as| this is being rendered
    return (n) =>{
        if (n in cache){
            console.log("Fetching from cache:", n);
            return cache[n];
        }else{
            console.log('Calculating results');
            let result = cb(n);
            cache[n] = result;
            return result;
        }
    };
}

// returned function from memoizedAdd
const memoizedTimes10 = memoize(times10);
console.log('~~~~~~~~~~~~~~TASK 4~~~~~~~~~~~~~~');
try {
  console.log('Task 4 calculated value:', memoizedTimes10(9));	// calculated
  console.log('Task 4 cached value:', memoizedTimes10(9));	// cached
} catch(e) {
  console.error('Task 4:', e)
}