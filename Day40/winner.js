function pickWinners(numbers) {
    // Your code goes here...
    let winner=[];
    let object;
    for (let i=0; i<numbers.length; i++)
    {
      if (numbers[i]%2===1 && numbers.indexOf(numbers[i])%2===1)
      {
      let seat =numbers.indexOf(numbers[i])
     
    
    object= {"seat": seat, "ticketCost":numbers[i]}
    
    winner.push(object)
    
         }
       
       
      } 
    return winner; 
    
    }
    