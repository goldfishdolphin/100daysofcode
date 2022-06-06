function isThisAPalindrome(str1) {
    let newString;
    newString = str1.split('').reverse().join('')

    if (newString===str1)
    {
        return true;
    }
    return false;
}
console.log(isThisAPalindrome('no'))