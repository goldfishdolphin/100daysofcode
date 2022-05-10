// For this task you are presented with a series of if statements with a replaceMe variable provided as each condition
// You will need to replace the replaceMe variable using ONLY variable1 and variable2 to create conditional expressions using any operators seen earlier
// variable1 and variable2 will be intentionally reassigned between each if statement
// The if statements containing a console.log stating "I will appear in the console" should be provided a condition that evaluates to true - and false otherwise

const replaceMe = false;

let variable1 = true;
let variable2 = true;

if (variable1 && variable2) {
  console.log('1: I will appear in the console');
}

if (variable1 !== variable2) {
  console.log('1: I will NOT appear in the console');
}

variable1 = true;
variable2 = false;

if (variable1 !== variable2) {
  console.log('2: I will appear in the console');
}

if (variable1 === variable2) {
  console.log('2: I will NOT appear in the console');
}

variable1 = 'hello';
variable2 = 'goodbye';

if (variable1 !== variable2) {
  console.log('3: I will appear in the console');
}

if (variable1 === variable2) {
  console.log('3: I will NOT appear in the console');
}

variable1 = 'northcoders';
variable2 = 'northcoders';

if (variable1 === variable2) {
  console.log('4: I will appear in the console');
}

if (variable1 !== variable2) {
  console.log('4: I will NOT appear in the console');
}

variable1 = 12;
variable2 = 17;

if (variable1 < variable2) {
  console.log('5: I will appear in the console');
}

if (variable1 === variable2) {
  console.log('5: I will NOT appear in the console');
}

variable1 = true;
variable2 = 'true';

if (variable1 !== variable2) {
  console.log('6: I will appear in the console');
}

if (variable1 === variable2) {
  console.log('6: I will NOT appear in the console');
}

variable1 = undefined;
variable2 = null;

if (variable1 !== variable2) {
  console.log('7: I will appear in the console');
}

if (variable1 === variable2) {
  console.log('7: I will NOT appear in the console');
}