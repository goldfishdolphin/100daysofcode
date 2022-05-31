function orderSupplies(supplies, guests) {
    // Your code goes here...
    let numberOfSupplies=[]
    for (let key in supplies){
    
    numberOfSupplies.push(supplies[key]*guests)
    
    }
    
    let totalCost=0
    for (let i=0; i<numberOfSupplies.length; i++){
      totalCost += numberOfSupplies[i]
    }
    return totalCost
    }
    