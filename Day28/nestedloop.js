// 5 - Iterate over the below object and modify each property
//   - If the property value is an array of strings, convert each string in the array to upper case and add an exclamation mark
//   - If the property value is an object with numerical property values, increment each number by 1

const data = {
    a: ['hello', 'howdy', 'hi'],
    b: {
      a: 1,
      b: 2,
      c: 3
    },
    c: {
      a: 4,
      b: 5,
      c: 6
    },
    d: ['warm', 'cosy', 'snug'],
    e: ['javascript', 'html', 'css']
  };
  for (let key in data){
  
    if (Array.isArray(data[key])){
      for (let i=0; i<data[key].length; i++)
      {
        data[key][i]=data[key][i].toUpperCase()};
  
    }else{
      for (let key1 in data[key]){
        data[key][key1]= data[key][key1]+1;
      }
      
    
    }
  
  }
  // Does the object appear as expected?
  console.log(data)
  
  