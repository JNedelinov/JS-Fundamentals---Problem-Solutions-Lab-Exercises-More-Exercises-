// LAB

function sumFirstLast(arr = []) {
    return (+arr[0] + +arr[arr.length - 1]);
}

console.log(sumFirstLast(['20', '30', '40']));

// 

function sortingArr(arr = []) {
    return arr.sort((a, b) => a - b).join('\n');
}

console.log(sortingArr([7, -2, 8, 2]));

//

function firstAndLastKNumbers(arr = []) {
    let k = arr.shift();
    let f = arr.slice(0, k);
    let s = arr.slice(arr.length - k);
    console.log(f.join(' '));
    console.log(s.join(' '));
}

firstAndLastKNumbers([3, 6, 7, 8, 9]);

//

function lastKnumbersSequence(n, k) {
    let newArr = [];
    newArr.push(1);
    for (let i = 0; i < n - 1; i++) {
        let sum = 0;
        for (let j = 0; j < k; j++) {
            sum += newArr[i - j] || 0;
        }
        newArr.push(sum);
    }

    console.log(newArr.join(' '));
}

lastKnumbersSequence(6, 3);

//

function processOddNumber(arr = []) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            newArr.push(arr[i] * 2);
        }
    }

    return (newArr.reverse().join(' '));
}

console.log(processOddNumber([10, 15, 20, 25]));

//

function smallestTwoNumbers(arr = []) {
    let newArr = arr.sort((a, b) => a - b);
    let twoFirstNums = newArr.slice(0, 2);
    return twoFirstNums.join(' ');
}

console.log(smallestTwoNumbers([30, 15, 50, 5]));

//

function listOfProducts(arr = []) {
    let sortedArr = arr.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < sortedArr.length; i++) {
        console.log(`${i + 1}. ${sortedArr[i]}`);
    }
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);

//

function arrayManipulation(arr = []) {
    let copyArr = arr.slice(0);

    let arrOfNumbers = copyArr.shift().split(' ');

    for (let line of copyArr) {
        let [command, number, index] = line.split(' ');
        switch (command) {
            case 'Add': arrOfNumbers.push(number); break;
            case 'Remove': {
                if (arrOfNumbers.includes(number)) {
                    let indexOfNumber = arrOfNumbers.indexOf(number);
                    arrOfNumbers.splice(indexOfNumber, 1);
                }
            }; break;
            case 'RemoveAt': {
                if (+number >= 0 && +number <= arrOfNumbers.length - 1) {
                    arrOfNumbers.splice(+number, 1);
                }
            }; break;
            case 'Insert': {
                if (+index >= 0 && +index <= arrOfNumbers.length - 1) {
                    arrOfNumbers.splice(+index, 0, number);
                }
            }; break;
        }
    }

    return arrOfNumbers.join(' ');
}

console.log(arrayManipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
));

// EXERCISES

function train(arr = []) {
    let copyArr = arr.slice(0);
    let wagonsArray = copyArr.shift().split(' ').map(x => x = +x);
    let maxCapacity = +copyArr.shift();

    for (let line of copyArr) {
        let currArr = line.split(' ');

        if (currArr.length > 1) {
            wagonsArray.push(+currArr[1]);
        } else if (currArr.length === 1) {
            let passengers = +currArr[0];
            for (let i = 0; i < wagonsArray.length; i++) {
                if (wagonsArray[i] + passengers <= maxCapacity) {
                    wagonsArray[i] += passengers;
                    break;
                }
            }
        }
    }

    return wagonsArray.join(' ');
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)

//

function distinctArray(arr = []) {
    let copyArr = arr.slice(0);

    for (let i = 0; i < copyArr.length; i++) {
        let currNum = copyArr[i];

        for (let j = i + 1; j < copyArr.length; j++) {
            if (currNum === copyArr[j]) {
                copyArr.splice(j, 1);
            }
        }
    }

    return copyArr.join(' ');
}

console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]));

//

function houseParty(arr = []) {
    let guestList = [];

    for (let line of arr) {
        let currArr = line.split(' ');
        let name = currArr[0];

        if (currArr.length > 3) {
            if (guestList.includes(name)) {
                let index = guestList.indexOf(name);
                guestList.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else if (currArr.length <= 3) {
            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestList.push(name);
            }
        }
    }

    return guestList.join('\n');
}

console.log(houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
));


//

function sortingArray(arr = []) {
    let copyArr = arr.slice(0).sort((a, b) => b - a);
    for (let i = 1; i < copyArr.length - 1; i += 2) {
        let currNum = copyArr[i];
        let lastNum = copyArr.pop();
        copyArr.splice(i, 1, lastNum);
        copyArr.splice(i + 1, 0, currNum);

    }
    console.log(copyArr.join(' '));
}

sortingArray([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

//

function sortAnArrayBy2Criteria(arr = []) {
    let sortedArr = arr.sort((a, b) => {
        if (a.length - b.length !== 0) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    });

    console.log(sortedArr.join('\n'));
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);

//

function bombNumbers(mainArr = [], secondaryArr = []) {
    let copyMainArr = mainArr.slice(0);
    let copySecondaryArr = secondaryArr.slice(0);

    let specialNumber = copySecondaryArr.shift();
    let powerOfBomb = copySecondaryArr.shift();

    while (copyMainArr.includes(specialNumber)) {
        let indexOfSpecialNum = copyMainArr.indexOf(specialNumber);
        let startingIndex = indexOfSpecialNum - powerOfBomb || 0; // 1
        let endingIndex = (indexOfSpecialNum + powerOfBomb) + 1 || (copyMainArr.length - 1); // 5
        let bombedNumbersArr = copyMainArr.slice(startingIndex, endingIndex).length;
        copyMainArr.splice(startingIndex, bombedNumbersArr);
    }

    return copyMainArr.reduce((acc, curr) => acc += curr, 0);
}

console.log(bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]));
console.log(bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]));
console.log(bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]));
console.log(bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]));

// 

function searchForANumber(mainArr = [], secondaryArr = []) {
    let copyMainArr = mainArr.slice(0);
    let copySecondaryArr = secondaryArr.slice(0);

    let numberOfElFromFArr = copySecondaryArr.shift();
    let howManyToDelete = copySecondaryArr.shift();
    let searchedNum = copySecondaryArr.shift();

    let newArr = copyMainArr.slice(0, numberOfElFromFArr);
    newArr.splice(0, howManyToDelete);

    let count = 0;

    for (let digit of newArr) {
        if (digit === searchedNum) {
            count++;
        }
    }
    console.log(`Number ${searchedNum} occurs ${count} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);

//

function arrayManipulator(mainArr = [], secondaryArr = []) {
    let copyArr = mainArr.slice(0);
    for (let line of secondaryArr) {
        let currArr = line.split(' ');
        if (currArr.includes('addMany')) {
            currArr.shift();
            let index = +currArr.shift();
            if (index > copyArr.length) {
                index = copyArr.length;
            } else if (index < 0) {
                index = 0;
            }
            currArr.forEach(digit => {
                copyArr.splice(index, 0, +digit);
                index++;
            });
        } else if (currArr.includes('add')) {
            currArr.shift();
            let index = +currArr.shift();
            let element = +currArr.shift();
            if (index >= 0 && index <= copyArr.length - 1) {
                copyArr.splice(index, 0, element);
            }
        } else if (currArr.includes('contains')) {
            currArr.shift();
            let element = +currArr.shift();
            if (copyArr.includes(element)) {
                console.log(copyArr.indexOf(element));
            } else {
                console.log(-1);
            }
        } else if (currArr.includes('remove')) {
            currArr.shift();
            let index = +currArr.shift();
            if (index >= 0 && index <= copyArr.length - 1) {
                copyArr.splice(index, 1);
            }
        } else if (currArr.includes('shift')) {
            currArr.shift();
            let positions = +currArr.shift();
            for (let i = 1; i <= positions; i++) {
                let firstElement = copyArr.shift();
                copyArr.push(firstElement);
            }
        } else if (currArr.includes('sumPairs')) {
            currArr.shift();
            let newArr = [];
            for (let i = 0; i < copyArr.length; i += 2) {
                let firstEl = copyArr[i];
                let secondEl = copyArr[i + 1] || 0;
                newArr.push((firstEl + secondEl));
            }
            copyArr = newArr.slice(0);
        } else if (currArr.includes('print')) {
            return `[ ${copyArr.join(', ')} ]`
        }
    }
}

console.log(arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']));
console.log(arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']));
console.log(arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]));

//

function gladiatorInventory(arr = []) {
    let copyMainArr = arr.slice(0);

    let inventory = copyMainArr.shift().split(' ');

    for (let line of copyMainArr) {
        let [command, equipment, upgrade] = line.split(/[- ]/);

        switch (command) {
            case 'Buy': {
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
            }; break;
            case 'Trash': {
                if (inventory.includes(equipment)) {
                    let indexOfEl = inventory.indexOf(equipment);
                    inventory.splice(indexOfEl, 1);
                }
            }; break;
            case 'Repair': {
                if (inventory.includes(equipment)) {
                    let indexOfEl = inventory.indexOf(equipment);
                    inventory.splice(indexOfEl, 1);
                    inventory.push(equipment);
                }
            }; break;
            case 'Upgrade': {
                if (inventory.includes(equipment)) {
                    let indexOfEl = inventory.indexOf(equipment) + 1;
                    inventory.splice(indexOfEl, 0, `${equipment}:${upgrade}`);
                }
            }; break;
        }
    }

    return inventory.join(' ');
}

console.log(gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']));

//

function buildAWall(mainArr = []) {
    let copyArr = mainArr.slice(0);
    let crew = copyArr.length;
    let startCrew = crew;

    let sum = 0;
    let quantity = 0;
    let tempArr = [];

    let sortedArr = copyArr.sort((a, b) => a - b);
    copyArr = sortedArr.slice(0);

    while (copyArr.length !== 0) {
        quantity += startCrew * 195;
        if (quantity > 0) tempArr.push(quantity);
        quantity = 0;
        copyArr = copyOfCopy.slice(0);
    }
    
    sum = tempArr.reduce((acc, cur) => acc += cur, 0) * 1900;
    return `${tempArr.join(', ')}\n${sum} pesos`;
}

buildAWall([21, 25, 28]);