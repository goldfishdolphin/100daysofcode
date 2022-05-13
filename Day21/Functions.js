function switchCase(string, shouldUpperCase) {
 
    if (shouldUpperCase === string) {
      return string.toUpperCase();
    }
    return string.toLowerCase();
  }
  console.log(switchCase('hello'))
  console.log(switchCase('HELLO'))
  
  // Invoke switchCase to generate the following outputs:
  // 'HELLO'
  // 'goodbye'
  // 'CODING RULES'
  // 'nice to meet you'
  // '1234'