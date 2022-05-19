
// 2 - Increment each of the property values in the below object and log to the console when complete

const obj = {
    a: 1,
    b: 2,
    c: 3
  };
  for (let key in obj){
  console.log(obj[key]+1);
  }
  
  // 3 - Flip the boolean value of each property in the below object and log to the console when complete
  
  const weather = {
    isSunny: true,
    isRaining: false,
    isWindy: false,
    isCloudy: true,
    isSnowing: false
  };
  for(let key in weather){
    if(weather[key]===true){
      weather[key]= false;
    }else{
      weather[key]= true;
    };
   
    };
    console.log(weather)
   
  
  // 4 - Modify the below object so that each property value becomes each property key and vice versa and log to the console when complete
  //   - The current properties should no longer be present
  
  const person = {
    dave: 'firstName',
    ridealgh: 'surname',
    pigeon: 'favouriteAnimal',
    blue: 'favouriteColour',
    leeds: 'residence',
  };
  
  for (let key in person){
    let convertedKey= key;
    let convertedValue = person[key];
    delete person[key];
  
  key =convertedValue;
  person[key]=convertedKey;
  
  }
  console.log(person)
  