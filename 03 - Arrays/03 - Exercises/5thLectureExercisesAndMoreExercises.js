/* Add or Substract */

function addOrSubstract(arrOFNums) {
    let modifiedArr = [];
    let sumModArr = 0;
    let sumOldArr = 0;
    for (let i = 0; i < arrOFNums.length; i++) {
        let currentNum = arrOFNums[i];
        sumOldArr += currentNum;
        if (currentNum % 2 === 0) {
            modifiedArr[i] = currentNum + i;
        } else {
            modifiedArr[i] = currentNum - i;
        }
        sumModArr += modifiedArr[i];
    }
    console.log(modifiedArr);
    console.log(sumOldArr);
    console.log(sumModArr);
}

addOrSubstract([5, 15, 23, 56, 35]);

/* Common Elements */

function commonElements(firstMixedArr, secondMixedArr) {
    let lengthOfFirstArr = firstMixedArr.length;
    let lengthOfSecondArr = secondMixedArr.length;

    for (let i = 0; i < lengthOfFirstArr; i++) {
        let currentElement = firstMixedArr[i];
        for (let j = 0; j < lengthOfSecondArr; j++) {
            if (currentElement === secondMixedArr[j]) {
                console.log(currentElement);
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);

/* Merge Arrays */

function mergeArrays(firstArr, secondArr) {
    let thirdArr = [];
    for (let i = 0; i < firstArr.length; i++) {
        let elFromFirstArr = firstArr[i];
        let elFromSecondArr = secondArr[i];
        if (i % 2 === 0) {
            thirdArr.push(Number(elFromFirstArr) + Number(elFromSecondArr));
        } else {
            thirdArr.push(elFromFirstArr + elFromSecondArr)
        }
    }
    console.log(thirdArr.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])

/* Array Rotation */

function arrayRotation(arrOfNums, rotations) {
    let rotatedArr = [];
    let counter = 0;
    while (counter !== rotations) {
        for (let i = 1; i < arrOfNums.length; i++) {
            rotatedArr.push(arrOfNums[i]);
        }
        rotatedArr.push(arrOfNums[0]);
        arrOfNums = rotatedArr;
        rotatedArr = [];
        counter++;
    }
    console.log(arrOfNums.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);

/* Max Number */

function maxNumber(arrOfNums) {
    let newNewArr = [];
    let isBigger = false;
    for (let i = 1; i < arrOfNums.length; i++) {
        let firstCheckNum = arrOfNums[i - 1];
        for (let j = i; j < arrOfNums.length; j++) {
            if (firstCheckNum > arrOfNums[j]) {
                isBigger = true;
            } else {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            newNewArr.push(firstCheckNum);
        }
    }
    let lastElement = arrOfNums[arrOfNums.length - 1];
    newNewArr.push(lastElement);
    console.log(newNewArr.join(' '));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);

/*     
    let newArrOfNums = [];
    for (let i = 0; i < arrOfNums.length; i++) {
        let numToCheck = arrOfNums[i];
        for (let j = i + 1; j <= arrOfNums.length; j++) {
            if (numToCheck <= arrOfNums[j]) {
                break;
            } else {
                newArrOfNums.push(arrOfNums[j - 1]);
                break;
            }
        }
        if (newArrOfNums[newArrOfNums.length - 1] === arrOfNums[arrOfNums.length - 1]) {
            break;
        }
    }
    console.log(newArrOfNums.join(' ')); 
*/

/* Equal Sums */

function equalSums(arrOfNums) {
    let sumRight = 0;
    let sumLeft = 0;
    let isEqual = false;
    if (arrOfNums.length < 2) {
        console.log(0);
    } else {
        for (let i = 0; i < arrOfNums.length; i++) {
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
                } else {
                    sumLeft = 0;
                    sumRight = 0;
                    continue;
                }
            }
        }
        if (!isEqual) {
            console.log('no');
        }
    }
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
equalSums([0,1,1,1,0]);

/* Max Sequence of Equal Elements */

function maxSequenceOfEqualEl(arrOfNums) {
    let leftestArr = [];
    let flexibleArr = [];

    for (let i = 0; i < arrOfNums.length; i++) { // за всеки индекс;
        if (i !== arrOfNums.length - 1) {
            currentNum = arrOfNums[i];
            flexibleArr.push(currentNum); // последователността винаги започва от стойността на индекс i
            for (let j = i + 1; j < arrOfNums.length; j++) {
                let numToCheck = arrOfNums[j];
                if (currentNum !== numToCheck) {
                    break;
                } else {
                    flexibleArr.push(numToCheck);
                }
            }
            if (leftestArr.length < flexibleArr.length) {
                leftestArr = flexibleArr;
            }
            flexibleArr = [];
        } else {
            break;
        }
    }
    console.log(leftestArr.join(' '));
}

maxSequenceOfEqualEl([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualEl([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualEl([4, 4, 4, 4]);
maxSequenceOfEqualEl([0, 1, 1, 5, 2, 2, 6, 3, 3]);
maxSequenceOfEqualEl([1]);

/* Magic Sum */

function magicSum(arrOfNums, searchedSum) {
    for (let i = 0; i < arrOfNums.length; i++) {
        if (i !== arrOfNums.length - 1) {
            for (let j = i + 1; j < arrOfNums.length; j++) {
                if (arrOfNums[i] + arrOfNums[j] === searchedSum) {
                    console.log(`${arrOfNums[i]} ${arrOfNums[j]}`);
                }
            }
        } else {
            break;
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);

/* Dungeonest Dark */

function dungeonestDark(dungeostString) {

    let dungeon = dungeostString[0].split('|');

    let initialHealth = 100;
    let initialCoins = 0;
    let monster = '';
    let nums = '';
    let bestRoom = 0;

    let isDead = false;

    let stringArr = [];
    let numsArr = [];

    let strElement = '';
    let numElement = '';

    let dungeonestArr = dungeostString;

    /* console.log(dungeonestArr);
    console.log(dungeonestArr.length); */

    for (let i = 0; i < dungeonestArr.length; i++) {
        if (dungeonestArr[i] !== ' ' && dungeonestArr[i] !== '|') {
            if (Number(dungeonestArr[i]) >= 0 && Number(dungeonestArr[i]) <= Number.MAX_SAFE_INTEGER) {
                numElement += `${dungeonestArr[i]}`;
            } else {
                strElement += `${dungeonestArr[i]}`;
            }
        } else {
            if (dungeonestArr[i] === ' ') {
                strElement += ',';
            }
            if (dungeonestArr[i] === '|') {
                numElement += ',';
            }
        }
    }

    /* console.log(strElement);
    console.log(numElement); */

    for (let i = 0; i < strElement.length; i++) {
        if (strElement[i] !== ',') {
            monster += `${strElement[i]}`;
        } else {
            stringArr.push(monster);
            monster = '';
        }
    }

    for (let i = 0; i < numElement.length; i++) {
        if (numElement[i] !== ',') {
            nums += `${numElement[i]}`;
        } else {
            numsArr.push(nums);
            nums = '';
        }
        if (i === numElement.length - 1) {
            numsArr.push(nums);
            nums = '';
        }
    }

    /* console.log(stringArr);
    console.log(numsArr); */

    let newArr = [];
    for (let i = 0; i < stringArr.length; i++) {
        newArr.push(stringArr[i], numsArr[i]);
    }

    /* console.log(newArr); */

    for (let i = 0; i < newArr.length; i++) {
        if (i % 2 === 0) {
            if (newArr[i] === 'potion') {
                if (initialHealth + Number(newArr[i + 1]) <= 100) {
                    initialHealth += Number(newArr[i + 1]);
                    console.log(`You healed for ${Number(newArr[i + 1])} hp.`);
                    bestRoom++;
                } else {
                    console.log(`You healed for ${100 - initialHealth} hp.`);
                    initialHealth = (initialHealth + Number(newArr[i + 1])) - ((initialHealth + Number(newArr[i + 1]) - 100)); // 70 + 31 = 101 - ((70 + 31) - 100) = 100;
                    bestRoom++;
                }
                console.log(`Current health: ${initialHealth} hp.`);
            } else if (newArr[i] === 'chest') {
                console.log(`You found ${Number(newArr[i + 1])} coins.`);
                initialCoins += Number(newArr[i + 1]);
                bestRoom++;
            } else {
                initialHealth -= Number(newArr[i + 1]);
                if (initialHealth <= 0) {
                    console.log(`You died! Killed by ${newArr[i]}.`);
                    bestRoom++;
                    console.log(`Best room: ${bestRoom}`);
                    isDead = true;
                    break;
                } else {
                    console.log(`You slayed ${newArr[i]}.`);
                    bestRoom++;
                }
            }
        }
    }
    if (!isDead) {
        console.log("You've made it!");
        console.log(`Coins: ${initialCoins}`);
        console.log(`Health: ${initialHealth}`);
    }
}

dungeonestDark('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
dungeonestDark('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');


function solve(data) {
    let dungeon = data[0].split('|');
    let health = 100;
    let coins = 0;
    let rooms = 0;
    let encounter;
    let value;

    for (const room of dungeon) {
        let currentRoom = room.split(' ');
        rooms++
        for (let index = 0; index < currentRoom.length; index++) {
            encounter = currentRoom[0];
            value = Number(currentRoom[1]);
            if (encounter === 'potion') {
                if (health + value > 100) {
                    console.log(`You healed for ${100 - health} hp.`);
                    health = 100;
                } else {
                    console.log(`You healed for ${value} hp.`);
                    health += value;
                }
                console.log(`Current health: ${health} hp.`)
                break;
            } else if (encounter === 'chest') {
                coins += value;
                console.log(`You found ${value} coins.`);
                break;
            } else {
                health -= value;
                if (health > 0) {
                    console.log(`You slayed ${encounter}.`);
                    break;
                } else {
                    console.log(`You died! Killed by ${encounter}.`);
                    console.log(`Best room: ${rooms}`);
                    return;
                }
            }
        }
    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);

}

solve(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);

/* Ladybugs */

function ladybugs() {

}

ladybugs();

/* More Exercises */

/* Print N-th Element */

function prinNthElement(arrayOfStrings = []) {
    let copyArray = arrayOfStrings.slice();
    let newArray = [];
    let theNthElement = Number(copyArray[copyArray.length - 1]);

    for (let i = 0; i < copyArray.length; i += theNthElement) {
        if (i !== copyArray.length - 1) {
            newArray.push(copyArray[i]);
        }
    }
    console.log(newArray.join(' '));
}

prinNthElement(['5', '20', '31', '4', '20', '2']);
prinNthElement(['dsa', 'asd', 'test', 'test', '2']);
prinNthElement(['1', '2', '3', '4', '5', '6']);

/* Add and Remove */

/* function addAndRemove(arrayOfCommands = []) {
    let copyArray = arrayOfCommands.slice();
    let newArr = [];
    let index = 0;
    let number = 1;
    for (index = 0; index < copyArray.length; index++, number++) {
        let command = copyArray[index];
        switch (command) {
            case 'add': {
                newArr.push(number);
            }; break;
            case 'remove': {
                newArr.splice(index - number, 1);  */
/* 
    при -1 премахва последния елемент, при -2 предпоследния, 
    при -3 пред-предпоследния и т.н...
    Следователно някак си отрицателните стойности
    отговарят на масива наобратно (??)
*/
/*             }; break;
            default: console.log('Invalid Command!');
        }
    }
    if (newArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArr.join(' '));
    }
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']); 
addAndRemove(['add', 'remove']); 
addAndRemove(['remove']);
addAndRemove(['add']);
addAndRemove(['add', 'remove', 'add']); 
addAndRemove(['remove', 'add', 'remove']); */

/* With shift() / unshift() */

function addAndRemove(arrayOfCommands = []) {
    let copyArray = arrayOfCommands.slice();
    let newArr = [];
    let index = 0;
    let number = 1;
    for (index = 0; index < copyArray.length; index++ , number++) {
        let command = copyArray[index];
        switch (command) {
            case 'add': {
                newArr.push(number); // PLACES THE ELEMENT AT THE LAST POSITION OF AN ARRAY
            }; break;
            case 'remove': {
                newArr.pop(); // REMOVES THE LAST ELEMENT OF AN ARRAY
            }; break;
            default: console.log('Invalid Command!');
        }
    }
    if (newArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArr.join(' '));
    }
}

/* addAndRemove(['add', 'add', 'add', 'add']); */
addAndRemove(['add', 'add', 'remove', 'add', 'add']); /* 
addAndRemove(['remove', 'remove', 'remove']); 
addAndRemove(['add', 'remove']); 
addAndRemove(['remove']);
addAndRemove(['add']);
addAndRemove(['add', 'remove', 'add']); 
addAndRemove(['remove', 'add', 'remove']); */

/* Left Rotated Array */

function leftRotatedArray(arrayOfStrings = []) {
    let copyArray = arrayOfStrings.slice(); // makes a copy of the original array
    let rotations = Number(copyArray[copyArray.length - 1]);
    if (isNaN(rotations)) {
        console.log('Empty');
    } else {
        copyArray.pop();
        for (let index = 0; index < rotations; index++) {
            let firstElement = copyArray.shift(); // takes the first element of the array
            copyArray.push(firstElement); // puts the given element to the last poisiton of the array
        }
        console.log(copyArray.join(' '));
    }
}

leftRotatedArray(['1', '2', '3', '4', '2']);
leftRotatedArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
leftRotatedArray(['remove', 'remove', 'remove']);

/* Right Rotated Array */

function rightRotatedArray(arrayOfStrings = []) {
    let copyArray = arrayOfStrings.slice();
    let rotations = Number(copyArray.pop());
    if (isNaN(rotations)) {
        console.log('Empty');
    } else {
        for (let index = 0; index < rotations; index++) {
            let lastElement = copyArray.pop(); // takes the last element of the array
            copyArray.unshift(lastElement); // puts the given element at the first position (copyArray[0] position) of the array
        }
        console.log(copyArray.join(' '));
    }

}

rightRotatedArray(['1', '2', '3', '4', '2']);
rightRotatedArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
rightRotatedArray(['remove', 'remove', 'remove']);

/* Non-Decreasing Subsequence */

function nonDecreasingSubsequence(arrOfNums = []) {
    let copyArray = arrOfNums.slice();
    let newArr = [];

    while (copyArray.length > 0) {
        let firstElement = copyArray.shift();
        if (firstElement < copyArray[0]) {
            newArr.push(firstElement);
        } else {
            newArr.push(firstElement);
            while (firstElement > copyArray[0]) {
                copyArray.shift();
            }
        }
    }
    console.log(newArr.join(' '));
}

/* newArr.push(copyArray.shift()); */

nonDecreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubsequence([1, 2, 3, 4]);
nonDecreasingSubsequence([20, 3, 2, 15, 6, 1]);

function steamAcc(arrayOfStrings = []) {
    let copyArray = arrayOfStrings.slice();
    let newArr = copyArray.slice();
    let gamesStr = copyArray.shift();
    if (gamesStr === 'Play!') {
        let gamesArr = [];
        console.log(gamesArr);
    } else if (newArr.length < 2) {
        console.log(newArr.join(' '));
    } else {
        let gamesArr = [];
        gamesArr = gamesStr.split(' ');

        /* 
            the split() method turns a String into an array of string, 
            by separating the string  at each instance of a specified separator string - ' ' 
        */

        let everyFirstString = copyArray.shift();
        let commandArr = [];
        commandArr = everyFirstString.split(' ');
        let command = commandArr.shift();
        let gameOrExpansion = commandArr.shift();

        while (command !== 'Play!') {
            switch (command) {
                case 'Install': {
                    gamesArr.push(gameOrExpansion);
                }; break;
                case 'Uninstall': {
                    for (let i = 0; i < gamesArr.length; i++) {
                        if (gamesArr[i] === gameOrExpansion) {
                            gamesArr.splice(i, 1); // remove just 1 element from the position we have (index = i) we have inserted
                            break;
                        }
                    }
                }; break;
                case 'Update': {
                    for (let i = 0; i < gamesArr.length; i++) {
                        if (gamesArr[i] === gameOrExpansion) {
                            let gameInsertion = gamesArr[i];
                            gamesArr.splice(i, 1); // remove just 1 element from the position (index = i) we have inserted 
                            gamesArr.push(gameInsertion); // adding an element to the end of the array
                            break;
                        }
                    }
                }; break;
                case 'Expansion': {
                    let expansion = gameOrExpansion;
                    let expansionArr = expansion.split('-');
                    let theNameOfTheGame = expansionArr[0];
                    let theNameOfTheExpansion = expansionArr[1];

                    for (let i = 0; i < gamesArr.length; i++) {
                        if (gamesArr[i] === theNameOfTheGame) {
                            gamesArr.splice(i + 1, 0, `${theNameOfTheGame}:${theNameOfTheExpansion}`); // remove zero elements from the index after the element we want it positioned after (i+1)
                            break;
                        }
                    }
                }; break;
            }
            everyFirstString = copyArray.shift();
            commandArr = everyFirstString.split(' ');
            command = commandArr.shift();
            if (command === 'Play!') {
                break;
            } else {
                gameOrExpansion = commandArr.shift();
            }
        }
        console.log(gamesArr.join(' '));
    }
}

steamAcc(
    [
        'CS WoW Diablo',
        'Install LoL',
        'Uninstall WoW',
        'Update Diablo',
        'Expansion CS-Go',
        'Play!'
    ]
);

steamAcc(
    [
        'CS WoW Diablo',
        'Uninstall XCOM',
        'Update PeshoGame',
        'Update WoW',
        'Expansion Civ-V',
        'Play!'
    ]
);

steamAcc(
    [
        'Play!'
    ]
);

steamAcc(
    [
        'CS WoW Diablo'
    ]
);

function magicMatrices(array = []) {
    let copyArray = array.slice();
    let columnSum = 0;
    let rowSum = 0;
    let rowSumArr = [];
    let columnSumArr = [];

    let isEqual = false;

    for (let i = 0; i < copyArray.length; i++) {
        for (let j = 0; j < copyArray.length; j++) {
            rowSum += copyArray[i][j];
        }
        rowSumArr.push(rowSum);
        rowSum = 0;
    }
    let j = 0;
    for (let i = 0; j < copyArray.length;) {
        columnSum += copyArray[i][j];
        if (i === copyArray.length - 1) {
            columnSumArr.push(columnSum);
            j++;
            i = 0;
            columnSum = 0;
        } else {
            i++;
        }
    }
    for (let i = 0; i < columnSumArr.length; i++) {
        for (let b = 0; b < columnSumArr.length; b++) {
            if (columnSumArr[i] === rowSumArr[b]) {
                isEqual = true;
            } else {
                isEqual = false;
                break;
            }
        }
    }
    if (isEqual) {
        console.log('true');
    } else {
        console.log('false');
    }
}

magicMatrices(
    [
        [3, 5, 6],
        [6, 5, 4],
        [5, 5, 5]
    ]
)

magicMatrices(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]

)

magicMatrices(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]

)