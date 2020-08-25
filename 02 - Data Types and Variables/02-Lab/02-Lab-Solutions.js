// CONCATENATE NAMES

function concNames(firstName, secondName, symbol) {
    console.log(`${firstName}${symbol}${secondName}`);
}

concNames('John', 'Smith', '->');

// RIGHT PLACE

function rightPlace(str1, char, str2) {
    if (str1.replace('_', char) === str2) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'o', 'Strong');

// INTEGER AND FLOAT

function integerAndFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;

    if (sum % 1 === 0) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}

integerAndFloat(9, 100, 1);

// AMAZING NUMBERS

function amazingNumbers(n) {
    let sum = 0;
    n.toString().split('').forEach(digit => sum += +digit);
    if (sum.toString().includes('9')) {
        console.log(`${n} Amazing? True`);
    } else {
        console.log(`${n} Amazing? False`);
    }
}

amazingNumbers(1233);

// GRAMOPHONE

function gramophone(band, album, song) {
    let seconds = ((band.length * album.length) * song.length) / 2;
    let rotations = seconds / 2.5;

    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');

// FUEL MONEY 

function fuelMoney(distanceTraveled, numOfPassengers, priceForOneLiter) {
    let neededFuel = (distanceTraveled / 100) * 7;
    neededFuel += numOfPassengers * .100; 
    let money = neededFuel * priceForOneLiter;
    console.log(`Needed money for that trip is ${money}lv.`);
}

fuelMoney(90, 14, 2.88);

// CENTURIES TO MINUTES 

function centuriesToMinutes(century) {
    let years = century * 100;
    let days = Math.floor(years * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;
    console.log(`${century} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}

centuriesToMinutes(1);

// SPECIAL NUMBERS

function specialNumbers(n) {
    for(let i = 1; i <= n; i++) {
        let sum = 0;
        i.toString().split('').forEach(digit => {
            sum += +digit;
        });
        if (sum === 5 || sum === 7 || sum  === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

specialNumbers(15);

// TRIPLES OF LATIN LETTERS

function triplesOfLatinLetters(n) {
    for (let i = 97; i < 97 + n; i++) {
        let fChar = String.fromCharCode(i)
        for (let j = 97; j < 97 + n; j++) {
            let sChar = String.fromCharCode(j);
            for (let k = 97; k < 97 + n; k++) {
                let tChar = String.fromCharCode(k);
                console.log(fChar + sChar + tChar);
            }
        }
    }
}

triplesOfLatinLetters(3);