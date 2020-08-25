/* Add or Substract */

function addOrSubstract(data = []) { // Това е от ектмаскрипт 6
    let resultArray = [];
    let originalSum = 0;
    let resultSum = 0;

    for (let i = 0; i < data.length; i++) {
        let currentNumber = data[i];

        originalSum += currentNumber;

        if (currentNumber % 2 === 0) {
            currentNumber += i;
            resultSum += currentNumber;
            resultArray.push(currentNumber);
        } else {
            currentNumber -= i;
            resultSum += currentNumber;
            resultArray.push(currentNumber);
        }
    }
    console.log(resultArray);
    console.log(originalSum);
    console.log(resultSum);
}

addOrSubstract([5, 15, 23, 56, 35]);

/* Common Elements */

function commonElements(firstArray = [], secondArray = []) {
    for (let i = 0; i < firstArray.length; i++) {
        let element = firstArray[i];

        for (let j = 0; j < secondArray.length; j++) {
            let secondElement = secondArray[j];

            if (element === secondElement) {
                console.log(element);
            }
        }
    }
}

commonElements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);

/* Merge Arrays */

function mergeArrays(arrayOne = [], arrayTwo = []) {
    let resultArray = [];

    for (let i = 0; i < arrayOne.length; i++) {
        let element = arrayOne[i];

        if (i % 2 === 0) {
            element = Number(element);
            resultArray.push(element + Number(arrayTwo[i]));
        } else {
            resultArray.push(element + arrayTwo[i]);
        }
    }

    console.log(resultArray.join(' - '));
}

mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);

/* Array Rotation */

function arrayRotation(array = [], rotations) {
    let copyArray = array.slice();

    console.log(copyArray);
    for (let i = 0; i < rotations; i++) {
        let element = copyArray.shift();
        copyArray.push(element);
    }
    console.log(copyArray.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);


/* Max Number */

function maxNumber(array = []) {
    let resultArray = [];
    let isTopInt;

    for (let i = 0; i < array.length; i++) {
        isTopInt = true;
        let currentElement = array[i];
        let rightElement = array.slice(i + 1); 

        for (let j = 0; j < rightElement.length; j++) {
            if (currentElement <= rightElement[j]) {
                isTopInt = false;
                break;
            }
        }
        if (isTopInt) {
            resultArray.push(currentElement);
        }
    }
    console.log(resultArray.join(' '));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);

/* Equal Sums */

function equalSums(array = []) {
    let rightSum = 0;
    let leftSum = 0;
    isEqual = false;
    for (let i = 0; i < array.length; i++) {
        rightSum = 0;
        let number = array[i];

        for (let j = array.length - 1; j > i; j--) { // right sum
            let current = array[j];
            rightSum += current;  
        }
        leftSum = 0;
        for (let b = 0; b < i; b++) { // left sum
            let current = array[b];
            leftSum += current;
        }

        if (leftSum === rightSum) {
            console.log(i);
            isEqual = true;
            break;
        }
    }
    if (!isEqual) {
        console.log('no');
    }
}

/* equalSums([1, 2, 3, 3]);
equalSums([1, 2]); */
equalSums([1]);
/* equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]); */