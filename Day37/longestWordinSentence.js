function findLongestWordLength(str) {
  let newArray = str.split(' ')
  let arrayLength=[];
  //console.log(newArray)
  for (let i=0; i<newArray.length; i++){
arrayLength.push(newArray[i].length)

  }
  //console.log(arrayLength)
let maxStringLength= Math.max(...arrayLength);
  return maxStringLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");