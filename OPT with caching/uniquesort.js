//Task: Transform this simple sorting algorithm into a unique sort. 
// It should not return any duplicate values in the sorted array.

// breadcrumbs, a way of caching values to keep track of values already seen

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]

const uniqSort = function(arr) {
    // cache
    const breadcrumbs = {};
    // result array
    const result = [];
    
    // loop through length of list
    for(let i=0; i< arr.length; i++){ 
        if(!breadcrumbs[arr[i]]){
            result.push(arr[i]);
            // cache the pushed element value into the object breadcrumbs
            // keeps track of values that we've seen in the past
            breadcrumbs[arr[i]] = true
        }
    }
    //[4,2,3] {2:true}
    // console.log(result.sort());
    return arr.sort((a, b) => a - b);
    
    // return arr.sort((a, b) => b - a);
    
};

uniqSort([4,2,2,3,2,2,2]); // => [2,3,4]