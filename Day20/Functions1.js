// For this task, there will be no coding required
// You are instead expected to assess the following functions to determine what will be logged to the console
// Uncomment each function invocation in turn before running the code to check your prediction

function sayHello () {
    console.log('hello');
  }
  
  sayHello();
   //sayHello; //- did this log anything to the console? Why?
  
  function countInTens () {
    let number = 0;
    for (let i = 0; i < 5; i++) {
      number += 10;
      console.log(number);
    }
  }
  
   countInTens();
  
  const friend = 'maddie';
  
  function greetFriend () {
    const friend = 'dave';
    console.log(`hello ${friend}`);
  }
  
  greetFriend();
  
  console.log(friend);
  // After checking your prediction for greetFriend(), uncomment the above console.log. Does it appear as you expected?
  
  function squareNumber (number) {
    console.log(number * number);
  }
  
   squareNumber(3);
   squareNumber(4);
   squareNumber(5);
  
  function echo (string) {
    console.log(string);
  }
  
   echo('hello');
   echo('goodbye');
   echo(); //- did this appear as you expected?
  
  function sum (a, b) {
    console.log(a + b);
  }
  
   sum(3, 5);
   sum(-2, 7);
   sum(5, 6);
   sum(1); //- did this appear as you expected?
  
  function concatenate (firstString, secondString) {
    console.log(`${firstString} ${secondString}`);
  }
  
   concatenate('hello', 'world');
   concatenate('world', 'hello');
   concatenate('hello', 'there', 'world');
   concatenate(1, 2);
  
  // console.log(firstString);
  // console.log(secondString);
  // Did the above console.logs execute correctly? Why? No because they are parameters of a function
  // (Make sure to comment these lines back out before moving on)
  
  const myFunction = 'hello'
  
   //console.log(myFunction()) //- What error do you see when you try to run this code?
  // 'myFunction is not a function' as it is defined as a variable but is called as a function.