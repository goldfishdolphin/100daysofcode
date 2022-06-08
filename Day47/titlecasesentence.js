function titleCase(str) {
  
    str=str.split(' ')
 let newString=''
  for (let i=0; i<str.length; i++){
let firstLetter=str[i][0].toUpperCase();
let remainingString= str[i].slice(1).toLowerCase();
  
  newString +=`${firstLetter}${remainingString} `
  }
  
return newString
}

titleCase("I'm a little tea pot");