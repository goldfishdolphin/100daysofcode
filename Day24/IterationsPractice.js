// Study the following for loops and determine what they are designed to achieve
// You'll need to make an amendment to each one - either the start, stop and step conditions or the logic within the loop body
// Uncomment each console.log when you're ready to move onto each challenge
// Be wary of causing an infinite loop!

const greeting = 'hello';
for (let i = 0; i < greeting.length; i++) {
  // console.log(i);
  // Each character in the greeting string should be logged to the console in order
}

let shoutedGreeting = '';
for (let i = greeting.length - 1; i >=0; i--) {
  shoutedGreeting += greeting[i].toUpperCase();
}
// console.log(shoutedGreeting);
// shoutedGreeting should be a capitalised version of the original greeting variable

let alternateCaseGreeting = '';
for (let i = 0; i < greeting.length; i++) {
  alternateCaseGreeting += greeting[i].toUpperCase();
}
// console.log(alternateCaseGreeting);
// alternateCaseGreeting should have every OTHER letter capitalised - HeLlO

const sentence = 'sixty zippers were quickly picked from the woven jute bag';
let vowels = '';
let consonants = '';

for (let i = 0; i < sentence.length; i++) {
vowels = sentence.match(/[aeiou]/gi); 
consonants = sentence.match(/[^aeiou]/gi);   
}
console.log(vowels);
// This should log a string containing all of the vowels found in the sentence variable in the order they were found
consonants = consonants.filter(s => s.replace(/\s+/g, '').length !== 0);
 console.log(consonants);
// This should log a string containing all of the consonants found in the sentence variable in the order they were found

// Neither the vowels or consonants variables should contain any spaces
