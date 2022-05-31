function isPartyViable(guests) {
    // Your code goes here...
    
    let pricePaid =[]
    
    for (let i=0; i< guests.length; i++)
    {
      for(let key in guests[i]){
        if(key==="paidForTicket"){
    pricePaid.push(guests[i][key]);
        }
      }
    }
    let totalAmountPaid=0;
    for (let i=0; i<pricePaid.length; i++) 
    {
    totalAmountPaid +=pricePaid[i]
    }
    
        console.log(totalAmountPaid)
    
    if (guests.length>=5 && totalAmountPaid>=100)
      {
        return true;
      }
      return false;
    
    }