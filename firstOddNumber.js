function findFirstOdd(numbers) {
    let oddNumbers=[];
    for (let i=0; i<numbers.length; i++){
        if (numbers[i]%2===1){
        oddNumbers.push(numbers[i])
    }
    }
    return oddNumbers[0];
}

console.log(findFirstOdd([1,4,5]))