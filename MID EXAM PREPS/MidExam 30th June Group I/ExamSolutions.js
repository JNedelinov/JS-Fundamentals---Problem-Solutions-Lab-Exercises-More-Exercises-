/* Distance Calculator */

function distanceCalculator(NumArr = []) {
    let copyArr = NumArr.slice(0);
    let madeSteps = +copyArr.shift();
    let lengthOfStep = +copyArr.shift();
    let goalDistanceToTravel = +copyArr.shift() * 100;

    /* every fifth step is 30% shorter than usual */

    let distanceTravelled = 0;

    for (let i = 1; i <= madeSteps; i++) {
        let temp = lengthOfStep;
        if (i % 5 === 0) {
            temp -= temp * .30;
        }
        distanceTravelled += temp;
    }

    let result = `You travelled ${(distanceTravelled / goalDistanceToTravel * 100).toFixed(2)}% of the distance!`;
    return result;
}

console.log(distanceCalculator(['100', '2', '1']));
console.log(distanceCalculator(['5000', '7.5', '500']));

/* Number Array */

function numberArray(numArr = []) {
    let copyArr = numArr.slice(0);
    let numbersLineArray = copyArr.shift().split(' ');

    for (let commandStr of copyArr) {
        let command = commandStr.split(' ')[0];

        if (command === 'End') {
            console.log(printAllPositiveNumber(numbersLineArray));
        }

        switch (command) {
            case 'Switch': {
                let index = +commandStr.split(' ')[1];
                if (index >= 0 && index < numbersLineArray.length) {
                    let switchedNumberOnIndex = +numbersLineArray[index] * -1;
                    numbersLineArray.splice(index, 1, switchedNumberOnIndex.toString());
                }
            }; break;
            case 'Change': {
                let index = +commandStr.split(' ')[1];
                let value = commandStr.split(' ')[2];
                if (index >= 0 && index < numbersLineArray.length) {
                    numbersLineArray.splice(index, 1, value);
                }
            }; break;
            case 'Sum': {
                let bonusCommand = commandStr.split(' ')[1];
                if (bonusCommand === 'Negative') {
                    console.log(negativeNumbersSum(numbersLineArray));
                } else if (bonusCommand === 'Positive') {
                    console.log(positiveNumbersSum(numbersLineArray));
                } else if (bonusCommand === 'All') {
                    console.log(allNumbersSum(numbersLineArray));
                }
            }
        }
    }

    function negativeNumbersSum(randomArr = []) {
        let sum = 0;
        for (let i = 0; i < randomArr.length; i++) {
            if (Number(randomArr[i]) < 0) {
                sum += Number(randomArr[i]);
            }
        }
        return sum;
    }

    function positiveNumbersSum(randomArr = []) {
        let sum = 0;
        for (let i = 0; i < randomArr.length; i++) {
            if (Number(randomArr[i]) >= 0) {
                sum += Number(randomArr[i]);
            }
        }
        return sum;
    }

    function allNumbersSum(randomArr = []) {
        let sum = 0;
        for (let i = 0; i < randomArr.length; i++) {
            sum += Number(randomArr[i]);
        }
        return sum;
    }

    function printAllPositiveNumber(randomArr = []) {
        let result = [];
        for (let i = 0; i < randomArr.length; i++) {
            if (Number(randomArr[i]) >= 0) {
                result.push(randomArr[i]);
            }
        }
        return result.join(' ');
    }

}

numberArray(['1 2 3 4 5', 'Switch 4', 'Change 0 -3', 'Sum Negative', 'End']);

/* Contact List */

function contactList(arr = []) {
    let copyArr = arr.slice(0);
    let contactsOnLine = copyArr.shift().split(' ');

    for (let commandStr of copyArr) {
        let command = commandStr.split(' ')[0];

        if (command === 'Print') {
            let result = '';
            let bonusCommand = commandStr.split(' ')[1];
            if (bonusCommand === 'Normal') {
                result = `Contacts: ${contactsOnLine.join(' ')}`;
            } else if (bonusCommand === 'Reversed') {
                result = `Contacts: ${contactsOnLine.reverse().join(' ')}`
            }
            return result;
        }

        switch (command) {
            case 'Add': {
                let contact = commandStr.split(' ')[1];
                let index = +commandStr.split(' ')[2];
                if (!contactsOnLine.includes(contact)) { //  && (index >= 0) && (index < contactsOnLine.length)
                    contactsOnLine.push(contact);
                } else if (contactsOnLine.includes(contact) && (index >= 0) && (index < contactsOnLine.length)) {
                    contactsOnLine.splice(index, 0, contact);
                }
            }; break;
            case 'Remove': {
                let index = +commandStr.split(' ')[1];
                if ((index >= 0) && (index < contactsOnLine.length)) {
                    contactsOnLine.splice(index, 1);
                }
            }; break;
            case 'Export': {
                let startIndex = +commandStr.split(' ')[1];
                let count = +commandStr.split(' ')[2];
                if (count >= contactsOnLine.length) {
                    let tempArr = contactsOnLine.slice(startIndex);
                    console.log(tempArr.join(' '));
                } else if (count < contactsOnLine.length) {
                    let tempArr = contactsOnLine.slice(startIndex, count);
                    console.log(tempArr.join(' '));
                }
            }; break;
        }
    }
}

console.log(contactList([
    'Alisson Bellamy Candace Tristan',
    'Remove 3',
    'Add Bellamy 2',
    'Print Normal'
]));
console.log(contactList([
    'Zayn Katy Ariana Avril Nick Mikolas',
    'Remove 3',
    'Add Jacob 0',
    'Export 0 3',
    'Export 3 8',
    'Print Reversed'
]));

// 1 hour and 20 minutes
// place: 374