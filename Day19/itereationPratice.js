// Study the following for loops and determine what they are designed to achieve
// You'll need to make an amendment to each one - either the start, stop and step conditions or the logic within the loop body
// Uncomment each console.log when you're ready to move onto each challenge
// Be wary of causing an infinite loop!

for (let i = 1; i <= 4; i++) {
    console.log('hello');
    // This console.log should only trigger *4* times
  }
  
  for (let i = 1; i < 10; i=i+2) {
    console.log(i);
    // Only the ODD numbers between 1 and 10 should be logged to the console
  }
  
  let sum = 0;
  for (let i = 5; i >= 1; i--) {
    sum += i;
  }
  console.log(sum);
  // Should log the sum of numbers between 1 and 5 (both inclusive)
  
  let sumOfOdds = 0;
  let sumOfEvens = 0;
  for (let i = 1; i <= 10; i=i+2) {
    sumOfOdds += i;
    sumOfEvens += i+1;
  }
   console.log(sumOfOdds);
  // Should log the sum of all ODD numbers between 1 and 10 (both inclusive)
  console.log(sumOfEvens);
  // Should log the sum of all EVEN numbers between 1 and 10 (both inclusive)