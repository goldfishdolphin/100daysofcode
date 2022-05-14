const person = {
    name: 'Maddie', 
    age: 27,
     dogs: [
       {
         fullName: 'callie ann', 
         age: 2, 
         breeds: {
           main: 'lurcher', 
           second: 'greyhound', 
           third: 'staffordshire bull terrier'
         }
       },
       {
         fullName: 'enormous ethel', 
         age: 1, 
         breeds: {
           main: 'minuature dachshund' 
         }
       }
     ]
   };
   // 1 - Log Ethel's full name to the console
   console.log(person.dogs[1].fullName);
   // 2 - Log Callie's main breed to the console
   console.log(person.dogs[0].breeds.main);
   // 3 - Log the combined age of the owner and both dogs to the console
   
   console.log(person.age);
   console.log(person.dogs[0].age)
   console.log(person.dogs[1].age)
   
   //   - You may wish to assign these ages to variables first, to keep your code readable
   //   - Make sure you access each value from the above object