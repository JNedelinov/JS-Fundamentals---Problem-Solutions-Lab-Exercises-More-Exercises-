// SUM DIGITS

function sumDigits(num) {
    let sum = 0;
    num.toString().split('').forEach(digit => sum += +digit);
    console.log(sum);
}

sumDigits(245678);

// CHARS TO STRING

function charsToString(ch1, ch2, ch3) {
    let string = `${ch1}${ch2}${ch3}`;
    console.log(string);
}

charsToString('a', 'b', 'c');

// TOWN INFO

function townInfo(city, population, area) {
    console.log(`Town ${city} has population of ${population} and area ${area} square km.`);
}

townInfo('Sofia', 123241432, 492);

// CONVERT METERS TO KILOMETERS

function metersToKilometers(meters) {
    console.log((meters / 1000).toFixed(2));
}

metersToKilometers(1852);

// POUNDS TO DOLLARS

function poundsToDollars(pounds) {
    console.log((pounds * 1.31).toFixed(3));
}

poundsToDollars(80);

// REVERSED CHARS

function reversedChars(ch1, ch2, ch3) {
    console.log(`${ch3} ${ch2} ${ch1}`);
}

reversedChars('A', 'B', 'C');

// LOWER OR UPPER 

function lowerOrUpper(ch) {
    if (ch === ch.toUpperCase()) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}

lowerOrUpper('L');

// CALCULATOR

function calculator(num1, operation, num2) {
    switch (operation) {
        case '+': console.log((num1 + num2).toFixed(2)); break;
        case '-': console.log((num1 - num2).toFixed(2)); break;
        case '*': console.log((num1 * num2).toFixed(2)); break;
        case '/': console.log((num1 / num2).toFixed(2)); break;
    }
}

calculator(5, '+', 10);

// GLADIATOR EXPENSES

function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let gladiatorExpenses = 0;

    let trashedHelmet = 0;
    let trashedSword = 0;
    let trashedShield = 0;
    let trashedArmor = 0;

    let secondTime = false;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            trashedHelmet++;
        }

        if (i % 3 === 0) {
            trashedSword++;
        }

        if (i % 2 === 0 && i % 3 === 0) {
            trashedShield++;
            if (trashedShield % 2 === 0) {
                secondTime = true;
            }
        }

        if (trashedShield % 2 === 0 && trashedShield !== 0 && secondTime) {
            trashedArmor++;
        }

        secondTime = false;
    }

    gladiatorExpenses = (helmetPrice * trashedHelmet) + (swordPrice * trashedSword) + (shieldPrice * trashedShield) + (armorPrice * trashedArmor);

    console.log(`Gladiator expenses: ${gladiatorExpenses.toFixed(2)} aureus`);
}

gladiatorExpenses(23, 12.50, 21.50, 40, 200);

// SPICE MUST FLOW

function spiceMustFlow(yield) {
    let workersConsumption = 0;
    let spice = 0;
    let days = 0;

    while (yield > 99) {
        days++;
        spice += yield;
        if (workersConsumption + 26 <= spice) {
            workersConsumption += 26;
            spice -= 26;
        }
        yield -= 10;
    }

    if (workersConsumption + 26 <= spice) {
        workersConsumption += 26;
        spice -= 26;
    }

    console.log(days);
    console.log(spice);
}

spiceMustFlow(111);

// ------------------------------------------------------------------------------------------


// PRIME NUMBERS 

function primeNumbers(n) {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(primeNumbers(7));