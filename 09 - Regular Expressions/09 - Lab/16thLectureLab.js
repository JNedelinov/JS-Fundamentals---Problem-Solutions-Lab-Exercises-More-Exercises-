/*  */

console.log('1. Match Full Name');

function mathFullName(str = '') {
    let regex = /\b(?<firstName>[A-Z][a-z]+) (?<lastName>[A-Z][a-z]+)\b/g;
    let validNames = [];

    /* 
    let matchArr = str.match(regex);
    console.log(matchArr.join(' ')); 
    */

    let validName = regex.exec(str);

    while (validName !== null) {
        validNames.push(validName[0]);

        validName = regex.exec(str);
    }

    console.log(validNames.join(' '));
}

mathFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");

console.log();

/*  */

console.log('2. Match Phone Number');

function matchPhoneNumber(str = '') {
    let regex = /(\+359( |-))2\2(\d{3})\2(\d{4})\b/g;

    let validPhoneNumber = regex.exec(str);

    let validPhoneNumbersArr = [];

    while(validPhoneNumber !== null) {
        validPhoneNumbersArr.push(validPhoneNumber[0]);
        validPhoneNumber = regex.exec(str);
    }

    console.log(validPhoneNumbersArr.join(', '));
}

matchPhoneNumber("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222");

console.log();

/*  */

console.log('3. Match Dates');

function matchDates(str = '') {
    let regex = /\b(?<day>\d{2})(?<symbolSeparator>\/|-|\.)(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    let validDate = regex.exec(str);

    while (validDate !== null) {
        console.log(`Day: ${validDate.groups['day']}, Month: ${validDate.groups['month']}, Year: ${validDate.groups['year']}`);
        validDate = regex.exec(str);
    }
}

matchDates("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016");

console.log();