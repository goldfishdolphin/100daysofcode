//kata 1
//return s for n times
function repeatStr (n, s) {
 return s.repeat(n)
  }

//kata 2

function isDivideBy(number, a, b) {
  // good luck
  if (number%a===0 && number%b===0){
    return true;}
  {
return false;
}
  }

  function positiveSum(arr) {
    let sumArray=0;
    let positiveArray = arr.filter(num => num > -1);
   for (let i=0; i<positiveArray.lenth; i++){
    
        sumArray=sumArray+positiveArray[i];
     }
    return sumArray
  }