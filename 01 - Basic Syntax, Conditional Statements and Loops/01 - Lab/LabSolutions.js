// MULTIPLICATION BY TWO

console.log('01. Multiply Number by 2\n');

function multiplicationByTwo(number) {
    // short way 

    console.log(number * 2);

    // longer way

    let sum = number * 2;
    console.log(sum);
}

multiplicationByTwo(4);

// EXCELLENT GRADE

console.log('\n02. Excellent Grade\n');

function excellentGrade(grade) {
    if (grade >= 5.50 && grade <= 6.00) {
        console.log('Excellent');
    } else if (grade >= 2.00 && grade <= 5.49) {
        console.log('Not excellent');
    }
}

excellentGrade(5.50);

// NUMBERS FROM 1 TO 5

console.log('\n03. Numbers from 1 to 5\n');

function numbersFrom1to5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

numbersFrom1to5();

// NUMBERS FROM N TO 1

console.log('\n04. Numbers from N to 1\n');

function numbersFromNto1(n) {
    for (let i = n; i >= 1; i--) {
        console.log(i);
    }
}

numbersFromNto1(5);

// NUMBERS FROM M TO N

console.log('\n05. Numbers from M to N\n');

function numbersFromMtoN(m, n) {
    for (let i = m; i >= n; i--) {
        console.log(i);
    }
}

numbersFromMtoN(6, 2);

// STUDENT INFORMATION

console.log('\n06. Student Information\n');

function studentInfo(name, age, avgGrade) {
    console.log(`Name: ${name}, Age: ${age}, Grade: ${avgGrade.toFixed(2)}`);
}

studentInfo('John', 15, 5.54678);

// MONTH PRINTER

console.log('\n07. Month Printer\n');

function monthPrinter(monthInNumber) {
    switch (monthInNumber) {
        case 1: console.log('January'); break;
        case 2: console.log('February'); break;
        case 3: console.log('March'); break;
        case 4: console.log('April'); break;
        case 5: console.log('May'); break;
        case 6: console.log('June'); break;
        case 7: console.log('July'); break;
        case 8: console.log('August'); break;
        case 9: console.log('September'); break;
        case 10: console.log('October'); break;
        case 11: console.log('November'); break;
        case 12: console.log('December'); break;
        default: console.log('Error'); break;
    }
}

monthPrinter(2);

// FOREIGN LANGUAGES

console.log('\n08. Foreign Languages\n');

function excellentGrade(country) {
    switch (country) {
        case 'USA':
        case 'England': console.log('English');
        case 'Spain':
        case 'Argentina':
        case 'Mexico': console.log('Spanish');
        default: console.log('unknown');
    }
}

excellentGrade('USA');

// THEATRE PROMOTIONS

console.log('\n09. Theatre Promotions\n');

function theatrePromotions(day, age) {
    switch (day) {
        case 'Weekday': {
            if (age >= 0 && age <= 18) {
                console.log('12$');
            } else if (age >= 18 && age <= 64) {
                console.log('18$');
            } else if (age >= 64 && age <= 122) {
                console.log('12$');
            } else {
                console.log('Error!');
            }
        }; break;
        case 'Weekend': {
            if (age >= 0 && age <= 18) {
                console.log('15$');
            } else if (age >= 18 && age <= 64) {
                console.log('20$');
            } else if (age >= 64 && age <= 122) {
                console.log('15$');
            } else {
                console.log('Error!');
            }
        }; break;
        case 'Holiday': {
            if (age >= 0 && age <= 18) {
                console.log('5$');
            } else if (age >= 18 && age <= 64) {
                console.log('12$');
            } else if (age >= 64 && age <= 122) {
                console.log('10$');
            } else {
                console.log('Error!');
            }
        }; break;
        default: {
            console.log('Error!');
        }; break;
    }
}

theatrePromotions('Weekdy', 2);

// DIVISIBLE BY 3

console.log('\n10. Divisible by 3\n');

function divisibleBy3() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0 && i % 3 === 0) {
            console.log(i);
        }
    }
}

divisibleBy3();

// SUM OF ODD NUMBERS

console.log('\n11. Sum Of Odd Numbers\n');

function sumOfOddNumbers(n) {
    let sum = 0;
    for (let i = 1, j = 0; j !== n; i++) {
        if (i % 2 !== 0) {
            console.log(i);
            sum += i;
            j++;
        }
    }
    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);
