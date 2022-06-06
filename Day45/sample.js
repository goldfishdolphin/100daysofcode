// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let stack =  S.split(' ')
   console.log(stack)
   let operationArray= [];

   for (let i=0; i<stack.length; i++)
   {
       if (typeof parseInt(stack[i])=== "number")
       
           {
            operationArray.push(parseInt(stack[i]))
           }
           else if (stack[i]==="DUP"){
               operationArray.push(stack[i-1]);

           }
           else if (stack[i]==='+'){
               operationArray.push(stack[i-1]+stack[i-2]);
           }
           
         
       
       console.log(operationArray)
   }
}
