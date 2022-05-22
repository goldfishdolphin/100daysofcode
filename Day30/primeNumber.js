function checkIsPrime(num) {
    // Your code goes here...
    if (num<=1){
    return false}
    
    for (let i=2;i<num;i++){
    if(num%i===0){
      return false
    }
    return true
    }
    }