// 1 - You have been provided two variables, num1 and num2
//   - Write two if statements. One that will trigger if the values are equal and will log the sum of the values
//   - Another that will trigger if the values are not equal and will log the product of the values
//   - In each of the following challenges, only one of your if statements should trigger

const num1 = 53;
const num2 = 17;

// if statements here...
if (num1 ===num2){
  console.log(num1+num2)
}
{
console.log(num1*num2)
}
// 2 - Using the variables representing the heights of the Eiffel Tower and Empire State Building in metres, write two if statements along with conditions that when triggered, console.log a string stating which building is taller

const eiffelTowerHeight = 300;
const empireStateBuildingHeight = 381;

// if statements here...
if (eiffelTowerHeight>empireStateBuildingHeight )
{
  console.log(" Eiffel Tower is taller.")
}
{
  console.log(" Empire State Building is taller.")
}


// 3 - Write two if statements that will help determine the location of today's activity. Using the variables provided, if it is not raining or you have an umbrella, the activityLocation should become the string 'outdoors'
//  - If it is raining and you don't have an umbrella, the activityLocation should become the string 'indoors'
//  - Has your activityLocation variable been correctly reassigned before it was logged?

let activityLocation = 'TBC';
const isRaining = false;
const hasUmbrella = true;

// if statements here...
if (isRaining===false || hasUmbrella===true){
activityLocation = 'outdoor'};

if (isRaining===true|| hasUmbrella===false){
activityLocation = 'indoor'};



console.log(activityLocation);



// 4 - Head back through the above code and alter the values of the variables you've been provided to cause your other if statements to now trigger - did this happen as you expected?

// Note: You may have been able to easily predict which of your if statements will have triggered based on knowing the values you're working with ahead of time. This is however good practise for using dynamic values in your code that can't be predicted prior to execution