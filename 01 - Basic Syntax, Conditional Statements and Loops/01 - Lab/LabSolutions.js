console.log('01. Multiply Number by 2\n');

function multiplicationByTwo(number) {
    // short way 

    console.log(number * 2);

    // longer way

    let sum = number * 2;
    console.log(sum);
}

multiplicationByTwo(4);

console.log('\n02. Excellent Grade\n');

function excellentGrade(grade) {
    if (grade >= 5.50 && grade <= 6.00) {
        console.log('Excellent');
    } else if (grade >= 2.00 && grade <= 5.49) {
        console.log('Not excellent');
    }
}

excellentGrade(5.50);

console.log('\n03. Numbers from 1 to 5\n');

function numbersFrom1to5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

numbersFrom1to5();

console.log('\n04. Numbers from N to 1\n');

function numbersFromNto1(n) {
    for (let i = n; i >= 1; i--) {
        console.log(i);
    }
}

numbersFromNto1(5);

console.log('\n05. Numbers from M to N\n');

function numbersFromMtoN(m, n) {
    for (let i = m; i >= n; i--) {
        console.log(i);
    }
}

numbersFromMtoN(6, 2);

console.log('\n06. Student Information\n');

function studentInfo(name, age, avgGrade) {
    console.log(`Name: ${name}, Age: ${age}, Grade: ${avgGrade.toFixed(2)}`);
}

studentInfo('John', 15, 5.54678);

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

console.log('\n09. Theatre Promotions\n');

function excellentGrade() {

}

excellentGrade();

console.log('\n\n');

function excellentGrade() {

}

excellentGrade();

console.log('\n\n');

function excellentGrade() {

}

excellentGrade();
