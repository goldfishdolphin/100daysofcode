function findEvenLengthStrings(items) {
  
let evenStringArray=[];
for (let i=0; i< items.length; i++){
if (items[i].length%2===0 && typeof items[i]==='string'){
    evenStringArray.push(items[i])
}
}
return evenStringArray
}
console.log(findEvenLengthStrings(['hi', 'bye']))
console.log(findEvenLengthStrings([]))