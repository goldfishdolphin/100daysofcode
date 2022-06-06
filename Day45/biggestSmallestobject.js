function findBiggestAndSmallest(numbers) {

    let biggestNumber = Math.max(...numbers);
    let lowestNumber = Math.min(...numbers);

    return {'biggest':biggestNumber, 'lowest': lowestNumber}
}
console.log(findBiggestAndSmallest([1, 2, 99, 100]))