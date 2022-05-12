// For the following challenges, some functions have been declared for you
// Your task will be to invoke these functions with appropriate arguments to achieve the desired outputs
// // Make sure to log your invocations to the console so you can check the results! You can do this directly or by first assigning them to variables

function sayHello (name) {
    return `hello ${name}`;
  }
  
  console.log(sayHello('maddie'));
  console.log(sayHello('dave'));
  console.log(sayHello());
  // Invoke sayHello to generate the following outputs:
  // 'hello maddie'
  // 'hello dave'
  // 'hello undefined'
  
  function difference (a, b) {
    return a - b;
  }
  console.log(difference(9,4));
  console.log(difference(8,1));
  console.log(difference(10,1));
  
  
  // Invoke difference to generate the following outputs:
  // 5
  // 7
  // 9
  
  function areValuesEqual (value1, value2) {
    return value1 === value2;
  }
  
  console.log(areValuesEqual(10, 10));
  console.log(areValuesEqual(9, 10));
  // Invoke areValuesEqual to generate the following outputs:
  // true
  // false
  
  function concatenate (string1, string2, string3) {
    if (string3 !== undefined) {
      return `${string1} ${string2} ${string3}`;
    }
    return string1 + ' ' + string2;
  }
  console.log(concatenate ('hey howdy' ,'hi'));
  console.log(concatenate('well' ,'hello there'));
  console.log(concatenate('coding', 'rules'));
  console.log(concatenate ('nice to', 'meet you'));
  console.log(concatenate('happy', 'birthday' ));
  // Invoke concatenate to generate the following outputs:
  // 'hey howdy hi'
  // 'well hello there'
  // 'coding rules'
  // 'nice to meet you'
  // 'happy birthday'
  