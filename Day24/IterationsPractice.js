// Declare a for loop to complete all of the following challenges
for (let i=0; i<=5; i++);
// 1 - Declare a variable storing your first name in lower case and log each character individually to the console
const firstName="Naureen"
for (let i=0; i<firstName.length; i++){
  let lettersinFirstName =firstName[i].toLowerCase();
  
console.log(lettersinFirstName);
}


// 2 - Create a variable that will eventually hold a capitalised version of your first name variable (consider an appropriate initial value for this)

for (let i=0; i<firstName.length; i++){
  let lettersinFirstNameCapital =firstName[i].toUpperCase();
  
console.log(lettersinFirstNameCapital);
}

//   - Iterate over your ORIGINAL first name variable to achieve this and log to the console when complete

// 3 - Log each character from your capitalised first name variable individually in reverse order

for (let i=firstName.length-1;i>=0; i--){
  let lettersinFirstNameCapital =firstName[i].toUpperCase();
  
console.log(lettersinFirstNameCapital);
}
// 4 - Declare a new string variable and iterate over the sentence below adding each vowel to the end of your new variable and each consonant to the start (ignoring spaces)

const sentence = 'the quick brown fox jumps over a lazy dog';
const vowels = sentence.match(/[aeiou]/gi); 
const consonants = sentence.match(/[^aeiou]/gi);   
console.log(vowels)

 console.log(consonants)