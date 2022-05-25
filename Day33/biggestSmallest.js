function findBiggestAndSmallest(numbers) {
    // Your code goes here...
    
    let biggestNumber =Math.max(...numbers)
    let smallestNumber = Math.min(...numbers)
    
    return  { "biggest": biggestNumber, "smallest" : smallestNumber} 
    }