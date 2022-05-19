function isThisAPalindrome(str1) {
    // Your code goes here...
     
     
     var array= str1
      var reversedArray = array.split('').reverse().join('');
    
    
      return array===reversedArray
     
}
    console.log(isThisAPalindrome('madam'))

/*/
    function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
palindrome("A man, a plan, a canal. Panama");*/
    
    
    