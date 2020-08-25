console.log('String Manipulator\n')

function stringManipulator(arr = []) {
    let copyArr = arr.slice(0, arr.indexOf('Done'));

    let str = copyArr.shift();

    for (let line of copyArr) {
        let currArr = line.split(' ');

        let command = currArr[0];

        switch (command) {
            case 'Change': {
                let char = currArr[1];
                let replacement = currArr[2];

                let regex = RegExp(char, 'g');

                str = str.replace(regex, replacement);

                console.log(str);
            }; break;
            case 'Includes': {
                let randomString = currArr[1];

                if (str.includes(randomString)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
            }; break;
            case 'End': {
                let randomString = currArr[1];

                if (str.endsWith(randomString)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
            }; break;
            case 'Uppercase': {
                str = str.toUpperCase();
                console.log(str);
            }; break;
            case 'FindIndex': {
                let char = currArr[1];

                if (str.includes(char)) {
                    console.log(str.indexOf(char));
                }
            }; break;
            case 'Cut': {
                let startIndex = +currArr[1];
                let length = +currArr[2];

                let subString = str.substr(startIndex, length);
                str = str.replace(subString, '');
                console.log(subString);
            }; break;
        }
    }
}

stringManipulator([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
]
);

console.log('\n');

console.log('Message Encrypter\n');

function messageEncrypter(arr = []) {
    let copyArr = arr.slice(1);

    /* let regex = /(\*|@)([A-Z][a-z]{2,})\1: \[([A-Za-z]+)\]\|\[([A-Za-z]+)\]\|\[([A-Za-z]+)\]\|/; */
    /* let regex = /(\*|@)([A-Z][a-z]{2,})\1: (\[([A-Za-z]+)\]\|){3}/; */
    let regex = /(\*|@)([A-Z][a-z]{2,})\1: \[([A-Za-z])\]\|\[([A-Za-z])\]\|\[([A-Za-z])\]\|$/;

    for (let line of copyArr) {
        if (regex.test(line)) {
            let currMatch = regex.exec(line);
            let command = regex.exec(line)[2];
            let firstChar = regex.exec(line)[3].charCodeAt(0);
            let secondChar = regex.exec(line)[4].charCodeAt(0);
            let thirdChar = regex.exec(line)[5].charCodeAt(0);

            console.log(`${command}: ${firstChar} ${secondChar} ${thirdChar}`);
        } else {
            console.log("Valid message not found!");
        }
    }
}

messageEncrypter([
    '3',
    '*Request*: [I]|[s]|[i]|',
    '*Taggy@: [73]|[73]|[73]|',
    'Should be valid @Taggy@: [v]|[a]|[l]|'
]
);

console.log('\n');

console.log('Battle Manager\n');

function battleManager(arr = []) {
    let copyArr = arr.slice(0, arr.indexOf('Results'));

    let battleManager = {};

    for (let line of copyArr) {
        let currArr = line.split(':');

        let command = currArr[0];

        switch (command) {
            case 'Add': {
                let person = currArr[1];
                let health = +currArr[2];
                let energy = +currArr[3];

                if (battleManager[person]) {
                    battleManager[person]["health"] += health;
                } else {
                    battleManager[person] = {
                        'health': health,
                        'energy': energy,
                    };
                }
            }; break;
            case 'Attack': {
                let attackerName = currArr[1];
                let defenderName = currArr[2];
                let damage = +currArr[3];

                if (battleManager[attackerName] && battleManager[defenderName]) {
                    battleManager[defenderName]['health'] -= damage;
                    if (battleManager[defenderName]['health'] <= 0) {
                        console.log(`${defenderName} was disqualified!`);
                        delete battleManager[defenderName];
                    }
                    battleManager[attackerName]['energy'] -= 1;
                    if (battleManager[attackerName]['energy'] === 0) {
                        console.log(`${attackerName} was disqualified!`);
                        delete battleManager[attackerName];
                    }
                }
            }; break;
            case 'Delete': {
                let username = currArr[1];
                if (username === 'All') {
                    Object.keys(battleManager).forEach(person => delete battleManager[person]);
                } else {
                    if (battleManager[username]) {
                        delete battleManager[username];
                    }
                }
            }; break;
        }
    }

    let pplCount = 0;

    Object.keys(battleManager).forEach(person => pplCount++);

    console.log(`People count: ${pplCount}`);

    let sortedPersons = Object.keys(battleManager).sort((p1, p2) => {
        if (battleManager[p1]['health'] - battleManager[p2]['health'] === 0) {
            return p1.localeCompare(p2);
        } else {
            return battleManager[p2]['health'] - battleManager[p1]['health'];
        }
    });

    sortedPersons.forEach(person => {
        console.log(`${person} - ${battleManager[person]['health']} - ${battleManager[person]['energy']}`);
    });
}

battleManager([
    'Add:Mark:1000:5',
    'Add:Clark:1000:3',
    'Attack:Clark:Mark:500',
    'Add:Allison:2500:5',
    'Attack:Clark:Mark:300',
    'Add:Charlie:4000:10',
    'Attack:Clark:Mark:500',
    'Results'
]
);
battleManager([
    'Add:Bonnie:3000:5',
    'Add:Johny:4000:10',
    'Delete:All',
    'Add:Bonnie:3333:3',
    'Results'
]

);

// 1h 20m (1h 12m offical time before the correction)

// 291/300 score (before the correction) - 300/300 after the correction 

// 356th place (before) - 320th place (after)