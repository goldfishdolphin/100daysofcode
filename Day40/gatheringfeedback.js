function gatherFeedback (feedbackArray) {
    // Your code goes here...
    let positiveFeedback=[];
    let negativeFeedback=[];
    let neutralFeedback=[];
    for (let i=0; i<feedbackArray.length; i++)
    if (feedbackArray[i][1] >=0 && feedbackArray[i][1] <=3 ){
      
    negativeFeedback.push(feedbackArray[i][1])
    
    }
    else if (feedbackArray[i][1] >=7 && feedbackArray[i][1] <=10){
      positiveFeedback.push(feedbackArray[i][1])
    }
    else if (feedbackArray[i][1] >=4 && feedbackArray[i][1] <=6)
    
    neutralFeedback.push(feedbackArray[i][1])
    
    
      let object= {"positive":positiveFeedback.length, "negative":negativeFeedback.length, "neutral": neutralFeedback.length}
      return object
    }
    
    