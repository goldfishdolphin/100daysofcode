// Study the following for...in loops and determine what they are designed to achieve
// You'll need to make an amendment to each one
// Uncomment each console.log when you're ready to move onto each challenge
// You won't need to worry about causing an infinite loop here, but why?

let obj = {
    a: 1,
    b: 2,
    c: 3
  };
  
  for (let key in obj) {
    console.log(obj[key]);
    // Each value should be logged to the console
  }
  
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  console.log(sum);
  // Should log 6 to the console
  
  const object = {
    x: 4,
    y: 5,
    z: 6
  }
  const objectKeys = [];
  for (let key in object) {
    objectKeys.push(key);
  }
   console.log(objectKeys);
  // Should log ['x', 'y', 'z'] to the console
  
  obj = {
    species: 'hedgehog',
    lengthInCm: 25,
    weightInKg: 0.7,
    lifeSpanInYears: 6,
    food: ['slugs', 'snails', 'caterpillars', 'beetles', 'earthworms']
  };
  
  const keyToLog = 'lifeSpanInYears';
  
  for (let key in obj) {
     console.log(obj[keyToLog]);
  }
  // Only the number 6 should be logged to the console
  // Make sure to use the keyToLog variable - it may need to be modified
  
  const pigeons = {
    'rock dove': {
      lengthInCm: 33,
      wingspanInCm: 66,
      weightInKg: 0.3,
      lifespanInYears: 3
    },
    woodpigeon: {
      lengthInCm: 41,
      wingspanInCm: 78,
      weightInKg: 0.45,
      lifespanInYears: 3
    },
    'turtle dove': {
      lengthInCm: 27,
      wingspanInCm: 50,
      weightInKg: 0.14,
      lifespanInYears: 2
    },
    'collared dove': {
      lengthInCm: 32,
      wingspanInCm: 51,
      weightInKg: 0.2,
      lifespanInYears: 3
    }
  }
  
  for (let pigeon in pigeons) {
    console.log(pigeons);
    // Should log the weight in KG of each pigeon
  }
  