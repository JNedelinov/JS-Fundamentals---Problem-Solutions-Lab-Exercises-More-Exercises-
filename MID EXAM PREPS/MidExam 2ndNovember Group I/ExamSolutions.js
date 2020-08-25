/* Biscuits Factory */

function biscuitsFactory(arr = []) {
    let copyArr = arr.slice(0);

    let biscuitsPerDay = +copyArr.shift();
    let workers = +copyArr.shift();
    let cookiesOfOthers = +copyArr.shift();

    let ourSum = 0;

    for (let i = 1; i <= 30; i++) {
        let currentCookie = biscuitsPerDay;
        if (i % 3 === 0) {
            currentCookie *= .75;
        }
        ourSum += currentCookie;

    }

    /* ourSum = Math.floor(ourSum); */
    let cookiesWithEmployees = ourSum * workers;
    let diff = Math.abs(cookiesWithEmployees - cookiesOfOthers);

    console.log(`You have produced ${cookiesWithEmployees} biscuits for the past month.`);
    if (cookiesWithEmployees > cookiesOfOthers) {
        console.log(`You produce ${((diff / cookiesOfOthers) * 100).toFixed(2)} percent more biscuits.`);
    } else if (cookiesWithEmployees < cookiesOfOthers) {
        console.log(`You produce ${((diff / cookiesOfOthers) * 100).toFixed(2)} percent less biscuits.`);
    }

}

biscuitsFactory(['78', '8', '16000']);
biscuitsFactory(['65', '12', '26000']);

/* Weaponsmith */

function weaponsmith(arr = []) {
    let copyArr = arr.slice(0);
    let weapon = copyArr.shift().split('|');

    for (let line of copyArr) {
        let command = line.split(' ')[0];

        if (command === 'Done') {
            console.log(`You crafted ${weapon.join('')}!`);
        }

        switch (command) {
            case 'Move': {
                let index = +line.split(' ')[2];
                let way = line.split(' ')[1];
                if (way === 'Left') {
                    if (index >= 0 && index < weapon.length) {
                        if (index - 1 >= 0) {
                            let currentStr = weapon[index];
                            weapon.splice(index, 1);
                            weapon.splice(index - 1, 0, currentStr);
                        }
                    }
                } else if (way === 'Right') {
                    if (index >= 0 && index < weapon.length) {
                        if (index + 1 <= weapon.length - 1) {
                            let currentStr = weapon[index];
                            weapon.splice(index, 1);
                            weapon.splice(index + 1, 0, currentStr);
                        }
                    }
                }
            }; break;
            case 'Check': {
                let bonusCommand = line.split(' ')[1];
                let bArr = [];
                if (bonusCommand === 'Even') {
                    for (let index in weapon) {
                        index = Number(index);
                        if (index % 2 === 0) {
                            bArr.push(weapon[index]);
                        }
                    }
                    console.log(bArr.join(' '));
                } else if (bonusCommand === 'Odd') {
                    for (let index in weapon) {
                        index = Number(index);
                        if (index % 2 !== 0) {
                            bArr.push(weapon[index]);
                        }
                    }
                    console.log(bArr.join(' '));
                }
            }; break;
        }

    }
}

weaponsmith([
    'ha|Do|mm|om|er',
    'Move Right 0',
    'Move Left 3',
    'Check Odd',
    'Move Left 2',
    'Move Left 10',
    'Move Left 0',
    'Done'
]
);


/* Wizard Poker */

function wizardPoker(arr = []) {
    let copyArr = arr.slice(0);
    let cards = copyArr.shift().split(':');

    let newDeck = [];

    for (let line of copyArr) {
        let currentArr = line.split(' ');
        let command = currentArr.shift();

        if (command === 'Ready') {
            console.log(newDeck.join(' '));
            break;
        }

        switch (command) {
            case 'Add': {
                let cardName = currentArr.shift();
                if (!cards.includes(cardName)) {
                    console.log('Card not found.');
                } else {
                    newDeck.push(cardName);
                }
            }; break;
            case 'Insert': {
                let cardName = currentArr.shift();
                let index = +currentArr.shift();
                if (!cards.includes(cardName) || (index < 0 || index > cards.length)) {
                    console.log('Error!');
                } else {
                    newDeck.splice(index, 0, cardName);
                }
            }; break;
            case 'Remove': {
                let cardName = currentArr.shift();
                if (!newDeck.includes(cardName)) {
                    console.log('Card not found.');
                } else {
                    let index = newDeck.indexOf(cardName);
                    newDeck.splice(index, 1);
                }
            }; break;
            case 'Swap': {
                let cardOne = currentArr.shift();
                let cardTwo = currentArr.shift();
                let indexOfOne = newDeck.indexOf(cardOne);
                let indexOfTwo = newDeck.indexOf(cardTwo);
                newDeck.splice(indexOfOne, 1, cardTwo);
                newDeck.splice(indexOfTwo, 1, cardOne);
            }; break;
            case 'Shuffle': {
                newDeck.reverse();
            }; break;
        }
    }
}

wizardPoker([
    'Innervate:Moonfire:Pounce:Claw:Wrath:Bite',
    'Add Moonfire',
    'Add Pounce',
    'Add Bite',
    'Add Wrath',
    'Insert Claw 0',
    'Swap Claw Moonfire',
    'Remove Bite',
    'Shuffle deck',
    'Ready'
]
);
wizardPoker([
    'Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop',
    'Add Pop',
    'Add Exodia',
    'Add Aso',
    'Remove Wrath',
    'Add SineokBqlDrakon',
    'Shuffle deck',
    'Insert Pesho 0',
    'Ready'
]
);
wizardPoker([
    'Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop',
    'Remove Pounce',
    'Add Pounce',
    'Remove Pounce',
    'Add Wrath',
    'Ready'
]
);