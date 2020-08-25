/* Add or Substract */

function addOrSubstract(data = []) {
    let resultArray = [];
    let originalSum = 0;
    let resultSum = 0;

    data.map((number, index) => {
        number % 2 === 0 ? number += index : number -= index;
        resultArray.push(number);
    });
    console.log(resultArray);
    console.log(originalSum = data.reduce((a, b) => {
        a += b;
        return a;
    }, 0));
    console.log(resultSum = resultArray.reduce((a, b) => a + b, 0));
}

addOrSubstract([5, 15, 23, 56, 35]);

/* Common Elements */

function commonElements(firstArray = [], secondArray = []) {
    firstArray.map((element) => {
        if (secondArray.includes(element)) {
            console.log(element);
        }
    });
}

commonElements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);

/* Demo for array.prototype.map(); */

function solve(arrayOfNums = []) {
    let output = arrayOfNums
        .map(Number) // if we have string elements
        .map(number => number + 2)
        .join(' '); // chaining the methods

    console.log(output, typeof output);
}

solve([1, 2, 3, 4, 5, 6]);

/* Merge Arrays */

function mergeArrays(arrayOne = [], arrayTwo = []) {
    let resultArray = [];

    arrayOne.map((element, i) => {
        i % 2 === 0 ?
            resultArray.push(Number(element) + Number(arrayTwo[i])) :
            resultArray.push(element + arrayTwo[i]);
    });

    console.log(resultArray.join(' - '));
}

mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);

/* Array Rotation */

function arrayRotation(array = [], rotations) {
    let resultArray = array.slice();
    resultArray.map((element, index) => {
        if (index < rotations) {
            resultArray.shift();
            resultArray.push(element);
        }
    });
    console.log(resultArray.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);