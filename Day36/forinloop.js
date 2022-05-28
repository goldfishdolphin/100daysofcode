const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
  let result =[];
for (let key in usersObj){
  if (usersObj[key].online === true){
  result.push(usersObj[key]);
  
  }

}

 return result.length
  // Only change code above this line
}

console.log(countOnline(users));
