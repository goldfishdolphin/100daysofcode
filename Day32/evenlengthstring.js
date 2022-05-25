let items=['jolly','hello','bye']
let newArray =[]
for(let i=0; i<items.length;i++)
  { 
    if(items[i].length%2===0 )
    {
   
  newArray.push(items[i]);
    }
  

}
console.log(newArray);