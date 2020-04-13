// AGES

function ages(age) {
    if (age >= 0 && age <= 2) {
        console.log('baby');
    } else if (age >= 3 && age <= 13) {
        console.log('child');
    } else if (age >= 14 && age <= 19) {
        console.log('teenager');
    } else if (age >= 20 && age <= 65) {
        console.log('adult');
    } else if (age > 65) {
        console.log('elder');
    } else {
        console.log('out of bounds');
    }
}

ages(20);

// ROUNDING

function rounding(number, rounder) {
    console.log(number.toFixed(rounder));
}

rounding(3.1546453453, 2);

// DIVISION 

function division(number) {
    let biggestDivision = 0;

    let numberInString = number.toString();

    let divBy7 = numberInString.split('').reverse().join('');

    let newNum = 0;
    let length = divBy7.length;
    let isSeven = false;

    for (let i = 0, j = 1; i < length; i++) {
        if (i % 6 === 0 && i > 0) {
            j = 1;
            length -= i;
            i = 0;
        } else {
            if (i === 0) {
                j = 1;
            } else if (i === 1) {
                j = 3;
            } else if (i === 2) {
                j = 2;
            } else if (i === 3) {
                j = 6;
            } else if (i === 4) {
                j = 4;
            } else if (i === 5) {
                j = 5;
            }
        }

        newNum += +divBy7[i] * j;
    }

    if (number % 2 === 0) {
        biggestDivision = 2;
    }

    if (number % 3 === 0) {
        biggestDivision = 3;
    }

    if (number % 2 === 0 && number % 3 === 0) {
        biggestDivision = 6;
    }

    if (newNum % 7 === 0) {
        biggestDivision = 7;
        isSeven = true;
    }

    if (number % 10 === 0) {
        biggestDivision = 10;
        isSeven = false;
    }

    if (isSeven) {
        console.log(`The number is divisible by ${biggestDivision}`);
    } else if (!isSeven) {
        if (biggestDivision > 0) {
            console.log(`The number is divisible by ${biggestDivision}`);
        } else {
            console.log('Not divisible');
        }
    }
}

division(133);

// VACATION 

function vacation(groupOfPeople, typeOfGroup, dayOfWeek) {
    let sumToPay = 0;

    let price = 0;

    switch (typeOfGroup) {
        case 'Students': {
            if (dayOfWeek === 'Friday') {
                price = 8.45;
            } else if (dayOfWeek === 'Saturday') {
                price = 9.80;
            } else if (dayOfWeek === 'Sunday') {
                price = 10.46;
            }
        }; break;
        case 'Business': {
            if (dayOfWeek === 'Friday') {
                price = 10.90;
            } else if (dayOfWeek === 'Saturday') {
                price = 15.60;
            } else if (dayOfWeek === 'Sunday') {
                price = 16;
            }
        }; break;
        case 'Regular': {
            if (dayOfWeek === 'Friday') {
                price = 15;
            } else if (dayOfWeek === 'Saturday') {
                price = 20;
            } else if (dayOfWeek === 'Sunday') {
                price = 22.50;
            }
        }; break;
    }

    sumToPay = groupOfPeople * price;

    if (groupOfPeople >= 30 && typeOfGroup === 'Students') {
        sumToPay *= 0.85;
    } else if (groupOfPeople >= 100 && typeOfGroup === 'Business') {
        sumToPay -= price * 10;
    } else if ((groupOfPeople >= 10 && groupOfPeople <= 20) && typeOfGroup === 'Regular') {
        sumToPay *= .95;
    }

    console.log(`Total price: ${sumToPay.toFixed(2)}`);
}

vacation(30, 'Students', 'Sunday');

// LEAP YEAR

function leapYear(year) {
    let yearInString = year.toString();
    let lastTwoDigits = +yearInString.substring(yearInString.length - 2);

    if (lastTwoDigits % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) {
        console.log('yes');
    } else {
        if (year % 100 === 0 && year % 400 === 0) {
            console.log('yes');
        } else {
            console.log('no');
        }
    }
}

leapYear(2000);

// PRINT AND SUM

function printAndSum(m, n) {
    let sum = 0;
    let result = '';
    while (m <= n) {
        result += `${m} `;
        sum += m;
        m++;
    }

    console.log(result.trim());
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);

// TRIANGLE OF NUMBERS

function triangleOfNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(`${i} `.repeat(i));
    }
}

triangleOfNumbers(5);

// MULTIPLICATION TABLE

function multiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} X ${i} = ${n * i}`);
    }
}

multiplicationTable(5);

// LOGIN

function login(arr = []) {
    let check = 0;
    for (let i = 1; i < arr.length; i++) {
        check++;
        let currWord = arr[i].split('').reverse().join('');
        if (arr[0] === currWord) {
            console.log(`User ${arr[0]} logged in.`);
        } else {
            if (check === 4) {
                console.log(`User ${arr[0]} blocked!`);
                break;
            } else {
                console.log('Incorrect password. Try again.');
            }
        }
    }
}

login([
    'Acer',
    'login',
    'go',
    'let me in',
    'sdsd',
    'recA'
]
);

// THE PYRAMID OF KING DJOSER

function pyramidOfKingDjoser(base, increment) {
    let stoneRequired = 0;
    let marbleRequired = 0;
    let lapisLazuliRequired = 0;
    let goldRequired = 0;

    let currBase = base;

    let row = 0;

    while (currBase > 2) {
        let marble = (currBase * 4) - 4;
        stoneRequired += (currBase * currBase) - marble;

        row++;

        if (row % 5 === 0) {
            lapisLazuliRequired += marble;
        } else {
            marbleRequired += marble;
        }

        currBase -= 2;
    }

    row++;

    goldRequired = currBase * currBase;

    console.log(`Stone required: ${Math.ceil(stoneRequired * increment)}`);
    console.log(`Marble required: ${Math.ceil(marbleRequired * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliRequired * increment)}`);
    console.log(`Gold required: ${Math.ceil(goldRequired * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(Math.floor(row * increment))}`);
}

/* pyramidOfKingDjoser(11, 1);
console.log();
pyramidOfKingDjoser(11, 0.75);
console.log();
pyramidOfKingDjoser(12, 1);
console.log(); */
pyramidOfKingDjoser(23, .5);

// BITCOIN MINING

function bitcoinMining(arr = []) {
    let sum = 0;
    let firstBought = false;
    let dayOfFirstBitcoin = 0;
    let boughtBitcoins = 0;
    for (let i = 0, d = 1; i < arr.length; i++, d++) {
        let grams = arr[i];
        if (d % 3 === 0) {
            grams *= .70;
        }

        sum += 67.51 * grams;

        if (sum >= 11949.16) {
            if (!firstBought) {
                firstBought = true;
                dayOfFirstBitcoin = d;
            }
            let amount = Math.floor(sum / 11949.16);
            sum -= 11949.16 * amount;
            boughtBitcoins += amount;
        }
    }

    console.log(`Bought bitcoins: ${boughtBitcoins}`);
    if (boughtBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }
    console.log(`Left money: ${sum.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
