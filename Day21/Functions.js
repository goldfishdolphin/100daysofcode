function switchCase(string, shouldUpperCase) {
 
    if (shouldUpperCase === 'hi') {
      return string.toUpperCase();
    }
    return string.toLowerCase();
  }
  console.log(switchCase('hello', 'hi'))
  console.log(switchCase('HELLO','hi'))
  
  // Invoke switchCase to generate the following outputs:
  // 'HELLO'
  // 'goodbye'
  // 'CODING RULES'
  // 'nice to meet you'
  // '1234'