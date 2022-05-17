// Study the following for loops and determine what they are designed to achieve
// You'll need to make an amendment to each one - either the start, stop and step conditions or the logic within the loop body
// Uncomment each console.log when you're ready to move onto each challenge
// Be wary of causing an infinite loop!

const names = ['maddie', 'dave', 'sam', 'poonam', 'christian'];
for (let i = 0; i <= names.length; i++) {
  // console.log(i);
  // This console.log should only trigger *5* times
  // Each log should be a name from the array
}

const numbers = [7, 23, 6, 99, 402, 5, 14, 88, 724];
const evenNumbers = [];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}
 console.log(evenNumbers);
// This should log an array of only the even numbers from the original numbers array

const words = ['tree', 'window', 'Egypt', 'curtain', 'Leeds', 'Manchester', 'squirrel', 'antique', 'Birmingham', 'India', 'table'];

for (let i = 0; i < words.length; i++) {
  
   if(/^[A-Z]/.test( words[i][0]))
   {
     console.log(words[i])
   }
  // Only the words starting with a capital letter should be logged to the console
}

const people = [
  {name: 'maddie', birthYear: 1994},
  {name: 'dave', birthYear: 1992},
  {name: 'steve', birthYear: 1983},
  {name: 'carol', birthYear: 1997},
  {name: 'charles', birthYear: 1972},
  {name: 'august', birthYear: 1992},
  {name: 'bob', birthYear: 1981},
  {name: 'megan', birthYear: 2002},
];

for (let i = 0; i < people.length; i++) {

people[i].age= 2022-people[i].birthYear;

if (people[i].age%10===0)
{
  people[i].isHavingParty = true;
}
else{
  people[i].isHavingParty = false;
}

console.log(people[i]);}
// Each person object in the array should be given an age property set to the age they will turn this year (2022)
// They should also be provided an isHavingParty boolean set to true if their age ends with a 0, and false