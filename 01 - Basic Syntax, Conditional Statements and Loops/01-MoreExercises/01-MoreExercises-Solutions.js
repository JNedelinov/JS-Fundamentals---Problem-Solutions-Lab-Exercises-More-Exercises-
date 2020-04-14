// SORT NUMBERS

function sortNumbers(a, b, c) {
    let arr = [];
    arr.push(a, b, c);
    let sortedNumbers = arr.sort((num1, num2) => num2 - num1);
    sortedNumbers.forEach(number => console.log(number));
}

sortNumbers(10, 2423, 24);

// ENGLISH NAME OF THE LAST DIGIT

function lastDigitName(n) {
    let numInStr = n.toString();
    let lastDigit = +numInStr[numInStr.length - 1];
    switch (lastDigit) {
        case 0: console.log('zero'); break;
        case 1: console.log('one'); break;
        case 2: console.log('two'); break;
        case 3: console.log('three'); break;
        case 4: console.log('four'); break;
        case 5: console.log('five'); break;
        case 6: console.log('six'); break;
        case 7: console.log('seven'); break;
        case 8: console.log('eight'); break;
        case 9: console.log('nine'); break;
    }
}

lastDigitName(2322);

// NEXT DAY

function nextDay(year, month, day) {
    let date = new Date(year, month - 1, day)
    let oneDay = 24 * 60 * 60 * 1000;
    let nextDate = new Date(date.getTime() + oneDay);
    let nextDateDos = nextDate.getFullYear() + "-" + (nextDate.getMonth() + 1) + "-" + nextDate.getDate();
    console.log(nextDateDos);
}

nextDay(1951, 12, 24);

// REVERSE STRING

function reverseString(str = '') {
    console.log(str.split('').reverse().join(''));
}

reverseString('Hello');

// DISTANCE BETWEEN POINTS

function distanceBetweenPoints(x1, y1, x2, y2) {
    console.log(Math.sqrt(Math.pow(x2 - x1,2) + Math.pow(y2-y1, 2)));
}

distanceBetweenPoints(2, 4, 5, 0);
