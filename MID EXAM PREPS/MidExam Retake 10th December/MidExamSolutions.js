/* Disneyland Journey */

function disneylandJourney(arr = []) {
    let copyArr = arr.slice(0);
    let neededMoney = copyArr.shift();
    let monthsToCollectTheMoney = copyArr.shift();

    let moneyThatCouldBeSaved = neededMoney * .25;

    let collectedMoney = 0;

    for (let i = 1; i <= monthsToCollectTheMoney; i++) {
        if (i % 2 !== 0 && i !== 1) {
            collectedMoney -= collectedMoney * .16;
        } else if (i % 4 === 0) {
            collectedMoney += collectedMoney * .25;
        }
        collectedMoney += moneyThatCouldBeSaved;
    }

    if (collectedMoney - neededMoney > 0) {
        console.log(`Bravo! You can go to Disneyland and you will have ${(collectedMoney - neededMoney).toFixed(2)}lv. for souvenirs.`);
    } else {
        console.log(`Sorry. You need ${Math.abs(collectedMoney - neededMoney).toFixed(2)}lv. more.`);
    }
}

disneylandJourney(['1000', '4']);

/* Archery Tournament */

function archeryTournament(arr = []) {
    let copyArr = arr.slice(0);
    let targets = copyArr.shift().split('|');

    let iskrenPoints = 0;

    for (let commandStr of copyArr) {
        let command = commandStr.split(' ')[0];

        if (command === 'Game' && commandStr.split(' ')[1] === 'over') {
            console.log(targets.join(' - '));
            console.log(`Iskren finished the archery tournament with ${iskrenPoints} points!`);
            break;
        }

        switch (command) {
            case 'Shoot': {
                let leftOrRight = commandStr.split(' ')[1].split('@')[0];
                let startIndex = +commandStr.split(' ')[1].split('@')[1];
                let length = +commandStr.split(' ')[1].split('@')[2];
                if (startIndex >= 0 && startIndex < targets.length) {
                    if (leftOrRight === 'Left') {
                        let indexAfterTravers = traverseFromLeft(targets, startIndex, length) + 1;
                        if (Number(targets[indexAfterTravers]) > 0) {
                            let newValue = Number(targets[indexAfterTravers]) - 5;
                            targets.splice(indexAfterTravers, 1, newValue.toString());
                            iskrenPoints += 5;
                        }
                    } else if (leftOrRight === 'Right') {
                        let indexAfterTravers = traverseFromRight(targets, startIndex, length);
                        if (Number(targets[indexAfterTravers]) > 0) {
                            let newValue = Number(targets[indexAfterTravers]) - 5;
                            targets.splice(indexAfterTravers, 1, newValue.toString());
                            iskrenPoints += 5;
                        }
                    }
                }

            }; break;
            case 'Reverse': {
                targets.reverse();
            }; break;
        }
    }

    function traverseFromLeft(randomArr = [], index, rotations) {
        let traverseCount = 0;
        let i = index;

        if (i + 1 > randomArr - 1) {
            i = 0;
            traverseCount++;
        }
        while (traverseCount !== rotations) {
            if (i + 1 > randomArr.length - 1) {
                i = 0;
            } else {
                i++
            }
            traverseCount++;
        }
        return i;
    }

    function traverseFromRight(randomArr = [], index, rotations) {
        let i = index;
        if (i - 1 < 0) {
            i = randomArr.length - 1;
        }
        while (rotations !== 0) {
            if (i - 1 < 0) {
                i = randomArr.length - 1;
            } else {
                i--;
            }
            rotations--;
        }
        return i;
    }
}

archeryTournament([
    '10|10|10|10|10',
    'Shoot Left@0@2',
    'Shoot Right@4@5',
    'Shoot Right@6@5',
    'Reverse',
    'Game over',
    ''
]
);
archeryTournament([
    '20|30|40|50|60',
    'Shoot Left@0@12',
    'Shoot Right@4@15',
    'Shoot Left@6@5',
    'Reverse',
    'Game over',
    ''
]
);

/* School Library */

function schoolLibrary(arr = []) {
    let booksArray = arr.slice(0);
    let shelfOfBooks = booksArray.shift().split('&');

    for (let strElement of booksArray) {
        let command = strElement.split(' | ')[0].split(' ')[0];

        if (command === 'Done') {
            console.log(shelfOfBooks.join(', '));
            break;
        }

        switch (command) {
            case 'Add': {
                let bookName = strElement.split(' | ')[1];
                if (!shelfOfBooks.includes(bookName)) {
                    shelfOfBooks.splice(0, 0, bookName);
                }
            }; break;
            case 'Take': {
                let bookName = strElement.split(' | ')[1];
                if (shelfOfBooks.includes(bookName)) {
                    shelfOfBooks = shelfOfBooks.filter(word => word !== bookName);
                }
            }; break;
            case 'Swap': {
                let firstBook = strElement.split(' | ')[1];
                let secondBook = strElement.split(' | ')[2];
                if (shelfOfBooks.includes(firstBook) && shelfOfBooks.includes(secondBook)) {
                    let fBookIndex = shelfOfBooks.indexOf(firstBook);
                    let sBookIndex = shelfOfBooks.indexOf(secondBook);
                    shelfOfBooks.splice(fBookIndex, 1, secondBook);
                    shelfOfBooks.splice(sBookIndex, 1, firstBook);
                }
            }; break;
            case 'Insert': {
                let bookName = strElement.split(' | ')[1];
                shelfOfBooks.push(bookName);
            }; break; 
            case 'Check': {
                let index = +strElement.split(' | ')[1];
                if (index >= 0 && index < shelfOfBooks.length - 1) {
                    console.log(shelfOfBooks[index]);
                }
            }
        }
    }
}

schoolLibrary([
    'Anna Karenina&Heart of Darkness&Catch-22& The Stranger',
    'Add Book | David Copperfield',
    'Add Book | One Thousand and One Nights',
    'Swap Books | One Thousand and One Nights | Catch-22',
    'Take Book | David Copperfield',
    'Insert Book | The Stories of Anton Chekhov',
    'Check Book | 17',
    'Done',
    ''
]

);
schoolLibrary([
    'Don Quixote&The Great Gatsby&Moby Dick&Hamlet',
    'Add Book | The Odyssey',
    'Take Book | Don Quixote',
    "Insert Book | Alice's Adventures in Wonderland",
    'Check Book | 3',
    'Done',
    '',
    '',
    ''
]
);