/* Experience Gaining */

function experienceGaining(arr = []) {
    let copyArr = arr.slice(0).map(x => x = Number(x));

    let experienceNeed = copyArr.shift();
    let battles = copyArr.shift();

    let sumOfExperienceAfterBatttles = 0;

    let battlesCount = 0;

    for (let i = 0; i < battles; i++) {
        let currentExp = copyArr[i];

        if ((i + 1) % 3 === 0) {
            currentExp += currentExp * .15;
        } else if ((i + 1) % 5 === 0) {
            currentExp -= currentExp * .10;
        }

        sumOfExperienceAfterBatttles += currentExp;
        battlesCount++;

        if (sumOfExperienceAfterBatttles >= experienceNeed) {
            break;
        }
    }

    if (sumOfExperienceAfterBatttles >= experienceNeed) {
        console.log(`Player successfully collected his needed experience for ${battlesCount} battles.`);
    } else {
        console.log(`Player was not able to collect the needed experience, ${Math.abs(sumOfExperienceAfterBatttles - experienceNeed).toFixed(2)} more needed.`);
    }
}

experienceGaining([
    '500', '5',
    '50', '100',
    '200', '100',
    '30'
]
);

/* Friend List Maintenance */

function friendListMaintenance(arr = []) {
    let friendList = arr.slice(0);
    let allFriends = friendList.shift().split(', ');

    let blacklisted = 0;
    let lost = 0;

    for (let line of friendList) {
        line = line.split(' ');
        let command = line[0];

        if (command === 'Report') {
            for (let currentName of allFriends) {
                if (currentName === 'Blacklisted') {
                    blacklisted++;
                } else if (currentName === 'Lost') {
                    lost++;
                }
            }
            console.log(`Blacklisted names: ${blacklisted}`);
            console.log(`Lost names: ${lost}`);
            console.log(allFriends.join(' '));
            break;
        }

        switch (command) {
            case 'Blacklist': {
                let name = line[1];
                if (allFriends.includes(name)) {
                    let index = +allFriends.indexOf(name);
                    allFriends.splice(index, 1, 'Blacklisted')
                    console.log(`${name} was blacklisted.`);
                } else {
                    console.log(`${name} was not found.`);
                }
            }; break;
            case 'Error': {
                let index = +line[1];
                if (allFriends[index] !== 'Blacklisted' && allFriends[index] !== 'Lost') {
                    console.log(`${allFriends[index]} was lost due to an error.`);
                    allFriends.splice(index, 1, 'Lost');
                }
            }; break;
            case 'Change': {
                let index = +line[1];
                let newName = line[2];
                if (index >= 0 && index < allFriends.length) {
                    let currentName = allFriends[index];
                    allFriends.splice(index, 1, newName);
                    console.log(`${currentName} changed his username to ${newName}.`);
                }
            }; break;
        }
    }
}

friendListMaintenance([
    'Mike, John, Eddie',
    'Blacklist Mike',
    'Error 0',
    'Error 1',
    'Change 2 Mike123',
    'Report'
]);

/* Tanks Collector */

function tanksCollector(arr = []) {
    let copyArr = arr.slice(0);
    let ownedTanks = copyArr.shift().split(', ');
    let commandsCount = copyArr.shift();

    for (let i = 0; i < commandsCount; i++) {
        let line = copyArr[i].split(', ');
        let command = line[0];

        switch (command) {
            case 'Add': {
                let tankName = line[1];
                if (!ownedTanks.includes(tankName)) {
                    ownedTanks.push(tankName);
                    console.log('Tank successfully bought');
                } else {
                    console.log('Tank is already bought');
                }
            }; break;
            case 'Remove': {
                let tankName = line[1];
                if (ownedTanks.includes(tankName)) {
                    let index = ownedTanks.indexOf(tankName);
                    ownedTanks.splice(index, 1);
                    console.log('Tank successfully sold');
                } else {
                    console.log('Tank not found');
                }
            }; break; 
            case 'Remove At': {
                let index = +line[1];
                if (index >= 0 && index < ownedTanks.length) {
                    ownedTanks.splice(index, 1);
                    console.log(`Tank successfully sold`);
                } else {
                    console.log('Index out of range');
                }
            }; break;
            case 'Insert': {
                let index = +line[1];
                let tankName = line[2];
                if (index >= 0 && index < ownedTanks.length) {
                    if (!ownedTanks.includes(tankName)) {
                        ownedTanks.splice(index, 0, tankName);
                        console.log('Tank successfully bought');
                    } else {
                        console.log('Tank is already bought');
                    }
                } else {
                    console.log('Index out of range');
                }
            }
        }
    }
    console.log(ownedTanks.join(', '));
}

tanksCollector([
    'T-34-85 Rudy, SU-100Y, STG',
    '3',
    'Add, King Tiger(C)',
    'Insert, 2, IS-2M',
    'Remove, T-34-85 Rudy'
]
)

// 64 minutes - 1h and 04 minutes 
// Place - 132nd