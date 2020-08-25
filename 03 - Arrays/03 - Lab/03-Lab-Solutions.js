//

function sumFirstLastElOfArr(arr = []) {
    arr = arr.map(a => a = Number(a));
    console.log(arr[0] + arr[arr.length - 1]);
}

sumFirstLastElOfArr(['20', '30', '40']);

//

function daysOfWeek(day) {
    let arr = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (day >= 1 && day <= 7) {
        console.log(arr[day]);
    } else {
        console.log('Invalid day!');
    }
}

daysOfWeek(0);

//

function reverseAnArrOfNumbers(newArrLength, arr) {
    let newArr = arr.slice(0, newArrLength);
    console.log(newArr.reverse().join(' '));
}

reverseAnArrOfNumbers(3, [10, 20, 30, 40, 50]);

// 

function reverseAnArrOfStrings(arr = []) {
    console.log(arr.reverse().join(' '));
}

reverseAnArrOfStrings(['abc', 'def', 'hig', 'klm', 'nop']);

//

function sumEvenNumbers(arr = []) {
    arr = arr.map(a => a = Number(a)).filter(a => a % 2 === 0);
    console.log(arr.reduce((sum, curr) => sum += curr, 0));
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);

// 

function evenOddSubstraction(arr = []) {
    arr = arr.map(a => a = Number(a));
    let oddSum = arr.filter(a => a % 2 !== 0).reduce((sum, curr) => sum += curr, 0);
    let evenSum = arr.filter(a => a % 2 === 0).reduce((sum, curr) => sum += curr, 0);
    console.log(evenSum - oddSum);
}

evenOddSubstraction([3, 5, 7, 9]);

//

function equalArrays(arr1 = [], arr2 = []) {
    arr1 = arr1.map(a => a = Number(a));
    arr2 = arr2.map(a => a = Number(a));
    let sum1 = arr1.reduce((sum, curr) => sum += curr, 0);

    let notIdentical = false;
    let difference = 0;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            notIdentical = true;
            difference = i;
            break;
        }
    }

    if (notIdentical) {
        console.log(`Arrays are not identical. Found difference at ${difference} index`);
    } else {
        console.log(`Arrays are identical. Sum: ${sum1}`);
    }
}

equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);

//

function condensedArr(arr = []) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let condensed = arr[i] + arr[i + 1] || 0;
        sum += condensed;
    }

    console.log(sum);
}

condensedArr([2, 10, 3]);

//

function addOrSubtract(arr = []) {
    let originalArrSum = arr.reduce((acc, curr) => acc += curr, 0);
    let newArr = arr.map(number => {
        let indexOfCurrNumber = arr.indexOf(number);
        if (number % 2 === 0) {
            return number += indexOfCurrNumber;
        } else {
            return number -= indexOfCurrNumber;
        }
    });
    let newArrSum = newArr.reduce((acc, curr) => acc += curr, 0);
    console.log(newArr);
    console.log(originalArrSum);
    console.log(newArrSum);
}

addOrSubtract([5, 15, 23, 56, 35]);

//

function commonElements(arr1 = [], arr2 = []) {
    arr1.forEach(el => {
        if (arr2.includes(el)) {
            console.log(el);
        }
    });
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);

//

function mergeArrays(arr1 = [], arr2 = []) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            arr3.push(Number(arr1[i]) + Number(arr2[i]));
        } else {
            arr3.push(arr1[i] + arr2[i]);
        }
    }
    console.log(arr3.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])

//

function arrayRotation(arr = [], rotations) {
    for (let i = 1; i <= rotations; i++) {
        let firstEl = arr.shift();
        arr.push(firstEl);
    }
    console.log(arr.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([2, 4, 15, 31], 5);

// 

function maxNumber(arr = []) {
    let topNumArr = [];
    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];
        let bigger = true;
        for (let j = i + 1; j < arr.length; j++) {
            let checkNum = arr[j];
            if (currNum <= checkNum) {
                bigger = false;
                break;
            }
        }
        if (bigger) {
            topNumArr.push(currNum);
        }
    }
    console.log(topNumArr.join(' '));
}

maxNumber([49, 27, 19, 42, 2, 13, 45, 48]);

//

function equalSums(arrOfNums) {
    let isEqual = false;
    if (arrOfNums.length < 2) {
        console.log(0);
    } else {
        for (let i = 0; i < arrOfNums.length; i++) {
            let sumRight = 0;
            let sumLeft = 0;
            if (i < 1) {
                sumLeft = 0;
            } else {
                for (let j = i + 1; j < arrOfNums.length; j++) {
                    sumRight += arrOfNums[j];
                }
                for (let l = i - 1; l >= 0; l--) {
                    sumLeft += arrOfNums[l];
                }

                if (sumLeft === sumRight) {
                    isEqual = true;
                    console.log(i);
                    break;
                }
            }
        }
        if (!isEqual) {
            console.log('no');
        }
    }
}

equalSums([0, 1, 1, 1, 0]);

//

function maxSequence(arr = []) {
    let maxSequenceArr = [];
    let leftestArr = [];

    for (let i = 0; i < arr.length; i++) {
        maxSequenceArr.push(arr[i]);
        for (let j = i + 1, matches = 0; j < arr.length; j++) {

            if (arr[i] === arr[j]) {
                maxSequenceArr.push(arr[j]);
                matches++;
            } else {
                i = j - 1;
                if (leftestArr.length < maxSequenceArr.length) {
                    leftestArr = maxSequenceArr.slice(0);
                }
                maxSequenceArr = [];
                break;
            }
        }
    }
    console.log(leftestArr.join(' '));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);

// 

function magicSum(arr = [], magicSum) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === magicSum) {
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8)

//

function dungeonestDark(arr = []) {
    let initialHP = 100;
    let initialCoins = 0;

    let copyArr = arr.slice(0);
    let newArr = copyArr.shift().split('|');

    let rooms = 0;

    let youDied = false;

    for (let line of newArr) {
        if (youDied) {
            break;
        }
        rooms++;
        let currArr = line.split(' ');
        let item = currArr[0];
        let number = +currArr[1];

        switch (item) {
            case 'potion': {
                if (initialHP + number > 100) {
                    console.log(`You healed for ${(Math.abs(initialHP - 100))} hp.`);
                    initialHP = 100;
                } else if (initialHP + number <= 100 && initialHP >= 1) {
                    initialHP += number;
                    console.log(`You healed for ${number} hp.`);
                }
                console.log(`Current health: ${initialHP} hp.`);
            }; break;
            case 'chest': {
                console.log(`You found ${number} coins.`);
                initialCoins += number;
            }; break;
            default: {
                if (initialHP - number <= 0) {
                    console.log(`You died! Killed by ${item}.`);
                    youDied = true;
                } else {
                    console.log(`You slayed ${item}.`);
                    initialHP -= number;
                }
            }; break;
        }
    }

    if (!youDied) {
        console.log("You've made it!");
        console.log(`Coins: ${initialCoins}`);
        console.log(`Health: ${initialHP}`);
    } else {
        console.log(`Best room: ${rooms}`);
    }

}

dungeonestDark(['rat 100|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);

//

function ladyBugs(arr = []) {
    let copyArr = arr.slice();
    let fieldSize = copyArr.shift();
    let field = [];

    for (let i = 0; i < fieldSize; i++) {
        field.push(0);
    }

    let ladyBugIndexes = copyArr.shift().split(' ').map(a => a = Number(a))

    ladyBugIndexes.forEach(index => {
        if (index >= 0 && index <= field.length - 1) {
            field.splice(index, 1, 1);
        }
    });

    for (let line of copyArr) {
        let [ladyBugIndex, command, steps] = line.split(' ');

        ladyBugIndex = Number(ladyBugIndex);
        steps = Number(steps);

        if (steps < 0) {
            steps = Math.abs(steps);
            if (command === 'right') {
                command = 'left';
            } else if (command === 'left') {
                command = 'right';
            }
        }

        let startingIndex = ladyBugIndex;

        if (command === 'right' && (ladyBugIndex >= 0 && ladyBugIndex < field.length)) {
            ladyBugIndex += steps;
            if (ladyBugIndex >= 0 && ladyBugIndex < field.length) {
                if (field[ladyBugIndex]) {
                    ladyBugIndex += steps;
                    if (ladyBugIndex >= 0 && ladyBugIndex < field.length) {
                        field.splice(ladyBugIndex, 1, 1);
                        field.splice(startingIndex, 1, 0);
                    } else {
                        field.splice(startingIndex, 1, 0);
                    }
                } else {
                    field.splice(ladyBugIndex, 1, 1);
                    field.splice(startingIndex, 1, 0);
                }
            } else {
                field.splice(startingIndex, 1, 0);
            }
        } else if (command === 'left' && (ladyBugIndex >= 0 && ladyBugIndex < field.length)) {
            ladyBugIndex -= steps;
            if (ladyBugIndex >= 0 && ladyBugIndex < field.length) {
                if (field[ladyBugIndex]) {
                    ladyBugIndex -= steps;
                    if (ladyBugIndex >= 0 && ladyBugIndex < field.length) {
                        field.splice(ladyBugIndex, 1, 1);
                        field.splice(startingIndex, 1, 0);
                    } else {
                        field.splice(startingIndex, 1, 0);
                    }
                } else {
                    field.splice(ladyBugIndex, 1, 1);
                    field.splice(startingIndex, 1, 0);
                }
            } else {
                field.splice(startingIndex, 1, 0);
            }
        }
    }
    console.log(field.join(' '));
}

ladyBugs([3, '0 1',
    '2 left 1',
    '1 left 1']
)

ladyBugs([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1']
)

ladyBugs(
    [5, '3',
        '3 left 2',
        '1 left -2']
)


function ladyBugZ(arr) {
    let sizeOfField = arr[0];
    let ladybugsPositions = arr[1]
        .split(' ')
        .map(Number);
    let ladybugsArray = [];

    // fill the array with 0
    for (let i = 0; i < sizeOfField; i++) {
        ladybugsArray.push(0);
    }
    // mark starting ladybugs index
    for (let i = 0; i < sizeOfField; i++) {
        let ladybugIndex = ladybugsPositions[i];
        if (ladybugIndex >= 0 && ladybugIndex < sizeOfField) {
            ladybugsArray[ladybugIndex] = 1;
        }
    }

    for (let i = 2; i < arr.length; i++) {
        // JS destructuring
        let [ladybugIndex, command, jumpLength] = arr[i].split(' ');
        ladybugIndex = +ladybugIndex;
        jumpLength = +jumpLength;

        if (ladybugsArray[ladybugIndex] !== 1 || ladybugIndex < 0 || ladybugIndex >= ladybugsArray.length) {
            continue;
        }
        // check for negative steps
        if (jumpLength < 0) {
            jumpLength = Math.abs(jumpLength);
            if (command === 'right') {
                command = 'left';
            } else if (command === 'left') {
                command = 'right';
            }
        }
        // Free Position
        ladybugsArray[ladybugIndex] = 0;
        if (command === 'right') {
            // Ladybug jumps one time
            let newPosition = ladybugIndex + jumpLength;
            // Jump another time if there is a lady bug
            if (ladybugsArray[newPosition] === 1) {
                newPosition = newPosition + jumpLength;
            }
            if (newPosition <= ladybugsArray.length) {
                ladybugsArray[newPosition] = 1;
            }

        } else {
            // Lady bug jumps to the left
            let newPosition = ladybugIndex - jumpLength;
            // Jump another time if there is a lady bug
            if (ladybugsArray[newPosition] === 1) {
                newPosition = newPosition - jumpLength;
            }
            if (newPosition >= 0) {
                ladybugsArray[newPosition] = 1;
            }
        }

    }

    console.log(ladybugsArray.join(' '));

}
ladyBugZ([5, '3',
    '3 left 2',
    '1 left -2']
);

//

function printNthElement(arr = []) {
    let copyArr = arr.slice(0);
    let steps = +copyArr.pop();

    let newArr = [];

    for (let i = 0; i < copyArr.length; i += steps) {
        newArr.push(copyArr[i]);
    }

    console.log(newArr.join(' '));
}

printNthElement(['1', '2', '3', '4', '5', '6']);

//

function addAndRemove(arr = []) {
    let newArr = [];
    let num = 1;
    for (let command of arr) {
        if (command === 'add') {
            newArr.push(num);
        } else if (command === 'remove') {
            newArr.splice(newArr.length - 1, 1); // or newArr.pop() - which is easier solutions
        }
        num++;
    }

    if (newArr.length > 0) {
        console.log(newArr.join(' '));
    } else {
        console.log('Empty');
    }
}

addAndRemove(['add', 'add', 'remove', 'add', 'add']);

//

function rotateAnArrayByGivenSteps(arr = []) {
    let copyArr = arr.slice(0);
    let steps = +copyArr.pop();
    for (let i = 1; i <= steps; i++) {
        let lastEl = copyArr.pop();
        copyArr.unshift(lastEl);
    }
    console.log(copyArr.join(' '));
}

rotateAnArrayByGivenSteps([1, 2, 3, 4, 2]);

//

function nonDecreasingSubsequence(arr = []) {
    let max = Number.MIN_SAFE_INTEGER;
    let newArr = arr.filter(num => {
        if (num > max) {
            max = num;
            return true;
        } else {
            return false;
        }
    });

    console.log(newArr.join(" "));
};

nonDecreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24])
nonDecreasingSubsequence([1, 2, 3, 4])
nonDecreasingSubsequence([20, 3, 2, 15, 6, 1])