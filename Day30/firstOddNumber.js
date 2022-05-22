//Complete the function findFirstOdd, so that it takes an array of numbers and returns the first odd number.

//If there are no odd numbers, the function should return undefined.
function findFirstOdd(numbers) {
    // Your code goes here...
    let oddNumbers=[]
    for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2===1){
      oddNumbers.push(numbers[i])
    }}
    return oddNumbers[0]
    
    };