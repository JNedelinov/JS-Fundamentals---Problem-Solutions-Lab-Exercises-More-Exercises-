// LAB 

function stringRepeater(randomString = '', repetitions) {
    return (randomString.repeat(repetitions));
}

console.log(stringRepeater('cic', 3));

//

let gradeTester = (grade => {
    if (grade >= 2.00 && grade <= 2.49) {
        return 'Fail';
    } else if (grade >= 2.50 && grade <= 3.49) {
        return 'Poor';
    } else if (grade >= 3.50 && grade <= 4.49) {
        return 'Good';
    } else if (grade >= 4.50 && grade <= 5.49) {
        return 'Very good';
    } else if (grade >= 5.50 && grade <= 6.00) {
        return 'Excellent';
    }
});

console.log(gradeTester(6));

//

function numberPower(randomNumber, power) {
    return Math.pow(randomNumber, power);
}

console.log(numberPower(2, 8));

// 

function totalPriceCalculation(product, quantity) {
    let totalPrice = 0;
    switch (product) {
        case 'coffee': totalPrice = quantity * 1.50; break;
        case 'water': totalPrice = quantity * 1.00; break;
        case 'coke': totalPrice = quantity * 1.40; break;
        case 'snacks': totalPrice = quantity * 2.00; break;
        default: console.log('Invalid product!'); break;
    }
    return totalPrice.toFixed(2);
}

console.log(totalPriceCalculation('water', 5));

//

let simpleCalculator = (numOne, numTwo, operator) => {
    switch (operator) {
        case 'multiply': return (numOne * numTwo);
        case 'divide': return (numOne / numTwo);
        case 'add': return (numOne + numTwo);
        case 'subtract': return (numOne - numTwo);
    }
}

console.log(simpleCalculator(5, 5, 'multiply'));

//

let wrongResult = (numOne, numTwo, numThree) => {
    if (numOne >= 0 && numTwo >= 0 && numThree >= 0) {
        return 'Positive';
    } else if (numOne <= 0 && numTwo >= 0 && numThree >= 0) {
        if (numOne == 0 || numTwo == 0 || numThree == 0) {
            return 'Positive';
        } else {
            return 'Negative';
        }
    } else if (numOne <= 0 && numTwo <= 0 && numThree >= 0) {
        return 'Positive';
    } else if (numOne <= 0 && numTwo <= 0 && numThree <= 0) {
        if (numOne == 0 || numTwo == 0 || numThree == 0) {
            return 'Positive';
        } else {
            return 'Negative';
        }
    } else if (numOne <= 0 && numTwo >= 0 && numThree <= 0) {
        return 'Positive';
    } else if (numOne >= 0 && numTwo >= 0 && numThree <= 0) {
        if (numOne == 0 || numTwo == 0 || numThree == 0) {
            return 'Positive';
        } else {
            return 'Negative';
        }
    }
}

console.log(wrongResult(-1, 0, 1));

// EXERCISE

function smallestOfThreeNums(numOne, numTwo, numThree) {
    /* 
    
    let min = 0;

    if (numOne >= numTwo) {
        min = numOne;
    } else {
        if (numOne > numTwo) {
            min = numTwo;
        } else {
            min = numOne;
        }
    }

    if (min > numThree) {
        min = numThree;
    }

    return min; 
    
    */

    return Math.min(numOne, numTwo, numThree);
}

console.log(smallestOfThreeNums(600, 341, 123));

// 

function addAndSubtract(numOne, numTwo, numThree) {
    let sum = (randomNumOne, randomNumTwo) => {
        return randomNumOne + randomNumTwo;
    }

    let sumResult = sum(numOne, numTwo);

    let subtract = (randomSum, randomNum) => {
        return randomSum - randomNum;
    }

    return subtract(sumResult, numThree);
}

console.log(addAndSubtract(1, 17, 30));

//

function charactersInRange(charOne = '', charTwo = '') {

    function charToASCII(char = '') {
        return char.charCodeAt();
    }

    let charOneInASCII = charToASCII(charOne);
    let charTwoInASCII = charToASCII(charTwo);

    let arr = [];

    for (let i = charOneInASCII + 1; i < charTwoInASCII; i++) {
        arr.push(String.fromCharCode(i));
    }

    return arr.join(' ');
}

console.log(charactersInRange('#', ':'));

//

function oddAndEvenSum(number) {
    let numberInString = number.toString();

    let evenSum = 0;
    let oddSum = 0;

    for (let digit of numberInString) {
        digit = +digit;
        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);

//

function palindromeIntegers(arr = []) {
    for (let number of arr) {
        let firstNum = number;
        let secondNum = Number(number.toString().split('').reverse().join(''));
        if (firstNum === secondNum) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindromeIntegers([123, 323, 421, 121]);

//

function passwordValidator(string = '') {

    function lengthChecker(password = '') {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function lettersAndDigitsChecker(password = '') {
        let regex = /\W/g;
        if (regex.test(password)) {
            return false;
        } else {
            return true;
        };
    }

    function atLeastTwoDigitsChecker(password = '') {
        let digitCount = 0;
        for (let char of password) {
            if (!isNaN(char)) {
                digitCount++;
            }
        }

        if (digitCount >= 2) {
            return true;
        } else {
            return false;
        }
    }

    if (lengthChecker(string) && lettersAndDigitsChecker(string) && atLeastTwoDigitsChecker(string)) {
        console.log('Password is valid');
    } else {
        if (lengthChecker(string) === false) {
            console.log('Password must be between 6 and 10 characters');
        }

        if (lettersAndDigitsChecker(string) === false) {
            console.log('Password must consist only of letters and digits');
        }

        if (atLeastTwoDigitsChecker(string) === false) {
            console.log('Password must have at least 2 digits');
        }
    }
}

passwordValidator('LogI#n3');

//

function NxNMatrics(n) {
    for (let i = 0; i < n; i++) {
        console.log((`${n} `.repeat(n)).trim());
    }
}

NxNMatrics(3);

//

function perfectNumber(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    if (sum === number) {
        return 'We have a perfect number!';
    } else {
        return "It's not so perfect.";
    }
}

console.log(perfectNumber(1236498));

//

function loadingBar(number) {
    if (number !== 0) {
        number /= 10;
    }

    if (number === 10) {
        console.log('100% Complete!');
        console.log(`[${'%'.repeat(number)}]`);
    } else {
        console.log(`${number * 10}% [${'%'.repeat(number)}${'.'.repeat(Math.abs(10 - number))}]`);
        console.log('Still loading...');
    }
}

loadingBar(100);

//

function factorialDivision(numOne, numTwo) {
    let numberFactorial = (randomNum) => {
        let sum = 1;
        for (let i = 1; i <= randomNum; i++) {
            sum *= i;
        }

        return sum;
    }

    return (numberFactorial(numOne) / numberFactorial(numTwo)).toFixed(2);
}

console.log(factorialDivision(5, 2));

//

function carWash(arr = []) {
    let clean = 0;

    for (let command of arr) {
        if (command === 'soap') {
            clean += 10;
        } else if (command === 'water') {
            clean += clean * 0.20;
        } else if (command === 'vacuum cleaner') {
            clean += clean * 0.25;
        } else if (command === 'mud') {
            clean -= clean * 0.10;
        }
    }

    console.log(`The car is ${clean.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);

//

function numberMod(num) {
    let sum = 0;

    let numInString = num.toString();

    for (let digit of numInString) {
        digit = +digit;
        sum += digit;
    }

    sum /= numInString.length;

    if (sum < 5) {
        while (sum < 5) {
            numInString += '9';
            sum = 0;
            for (let digit of numInString) {
                sum += +digit;
            }
            sum /= numInString.length;
        }
    }

    console.log(numInString);
}

numberMod(101);
numberMod(5835);

//

