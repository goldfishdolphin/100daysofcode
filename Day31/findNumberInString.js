//If string has a number , the function  should return true.
function findTicketPrices (emailString) {
    // Your code goes here...
    
    
    let numberString=/\d/.test(emailString)
    if (numberString=== true){
    
    return true;
    
    }
    return false;
    }