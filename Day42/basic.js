// For the below tasks, use console.log to show the result of the following string combinations
// Use the MDN docs for template literals to learn how to build your strings *without* using concatenation operators 

// 1 - Create a name variable consisting of your first name in all lower case. Using template literals, log 'my name is <your name>' to the console 
const myName = 'naureen';
console.log(`my name is ${myName}`);

// 2 - Create two varaibles initialised to the strings 'hello' and 'world'. Using template literals, log these to the console with a space between
const greet = "hello";
const message = "world"
console.log(`${greet} ${message}`)
// 3 - Using template literals, log your previous 'hello' and 'world' variables to the console, but this time in all capital letters and again, accounting for the space
console.log(`${greet.toUpperCase()}  ${message.toUpperCase()}`)
// 4 - Using template literals, log your age to the console in the following format: 'I'm <your age here> years old!'. Use a seperate variable for each word
const age = 38
const var1 ='I\'m'
const var2 = 'years'
const var3 = 'old!'
console.log(`${var1} ${age} ${var2} ${var3} `)
// 5 - Log the string "2 + 3 = <answer here>" to the console. Calculate the result in line using template literals
const sum =2+3
console.log(`2+3 = ${sum} `)