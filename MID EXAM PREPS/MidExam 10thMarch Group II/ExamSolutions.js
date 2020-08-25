/* The Hunting Games */

function theHuntingGames(arr = []) {
    let copyArr = arr.slice(0);

    let daysOfAdventure = +copyArr.shift();
    let playersCount = +copyArr.shift();
    let groupsEnergy = +copyArr.shift();
    let waterPerDay = +copyArr.shift();
    let foodPerDay = +copyArr.shift();

    let totalWater = waterPerDay * playersCount * daysOfAdventure;
    let totalFood = foodPerDay * playersCount * daysOfAdventure;

    let notEnough = false;

    for (let i = 1; i <= daysOfAdventure; i++) {
        let dailyEnergyLoss = +copyArr.shift();
        // every day chopping
        groupsEnergy -= dailyEnergyLoss;
        if (groupsEnergy <= 0) {
            notEnough = true;
            break;
        }
        // every second day
        if (i % 2 === 0) {
            groupsEnergy += groupsEnergy * .05;
            totalWater -= totalWater * .30;
        }
        // every third day
        if (i % 3 === 0) {
            let eatenFood = totalFood / playersCount;
            totalFood -= eatenFood;
            groupsEnergy += groupsEnergy * .10;
        }
    }

    if (!notEnough) {
        console.log(`You are ready for the quest. You will be left with - ${groupsEnergy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
    }
}

theHuntingGames([
    '10', '7', '5035.5',
    '11.3', '7.2', '942.3',
    '500.57', '520.68', '540.87',
    '505.99', '630.3', '784.20',
    '321.21', '456.8', '330',
    ''
]
);
theHuntingGames([
    '12', '6', '4430',
    '9.8', '5.5', '620.3',
    '840.2', '960.1', '220',
    '340', '674', '365',
    '345.5', '212', '412.12',
    '258', '496', ''
]
);

/* Seize the Fire */

function seizeTheFire(arr = []) {
    let copyArr = arr.slice(0);

    let fires = copyArr.shift().split('#');
    let water = +copyArr.shift();

    let totalEffort = 0;
    let totalFire = 0;

    for (let i = 0; i < fires.length; i++) {
        let [currentCell, currentCellValue] = fires[i].split(' = ');
        currentCellValue = Number(currentCellValue);

        if (water - currentCellValue <= 0) {
            if (i + 1 < fires.length) {
                fires.splice(i, 1);
                i--;
                continue;
            } else {
                fires.splice(i, 1);
                break;
            }
        }

        switch (currentCell) {
            case 'High': {
                if (currentCellValue >= 81 && currentCellValue <= 125) {
                    water -= currentCellValue;
                    totalEffort += currentCellValue * .25;
                    totalFire += currentCellValue;
                } else {
                    fires.splice(i, 1);
                    i--;
                }
            }; break;
            case 'Medium': {
                if (currentCellValue >= 51 && currentCellValue <= 80) {
                    water -= currentCellValue;
                    totalEffort += currentCellValue * .25;
                    totalFire += currentCellValue;
                } else {
                    fires.splice(i, 1);
                    i--;
                }
            }; break;
            case 'Low': {
                if (currentCellValue >= 1 && currentCellValue <= 50) {
                    water -= currentCellValue;
                    totalEffort += currentCellValue * .25;
                    totalFire += currentCellValue;
                } else {
                    fires.splice(i, 1);
                    i--;
                }
            }; break;
        }
    }

    console.log('Cells:');
    for (let cell of fires) {
        console.log(` - ${cell.split(' = ')[1]}`);
    }
    console.log(`Effort: ${totalEffort.toFixed(2)}`);
    console.log(`Total Fire: ${totalFire}`);

}

seizeTheFire(['High = 89#Low = 28#Medium = 77#Low = 23', '1250']);
seizeTheFire(['High = 150#Low = 55#Medium = 86#Low = 40#High = 110#Medium = 77', '220']);

/* The Final Quest */

function theFinalQuest(arr = []) {
    let copyArr = arr.slice(0);
    let riddle = copyArr.shift().split(' ');

    for (let line of copyArr) {
        let currentArr = line.split(' ');
        let command = currentArr.shift();

        if (command === 'Stop') {
            console.log(riddle.join(' '));
            break;
        }

        switch (command) {
            case 'Delete': {
                let index = +currentArr.shift();
                if (index >= 0 && index < riddle.length) {
                    if (index + 1 < riddle.length) {
                        riddle.splice(index + 1, 1);
                    }
                }
            }; break;
            case 'Swap': {
                let wordOne = currentArr.shift();
                let wordTwo = currentArr.shift();
                if (riddle.includes(wordOne) && riddle.includes(wordTwo)) {
                    let indexWordOne = riddle.indexOf(wordOne);
                    let indexWordTwo = riddle.indexOf(wordTwo);
                    riddle.splice(indexWordOne, 1, wordTwo);
                    riddle.splice(indexWordTwo, 1, wordOne);
                }
            }; break;
            case 'Put': {
                let word = currentArr.shift();
                let index = +currentArr.shift();
                if (index >= 0 && index < riddle.length) {
                    if (index === riddle.length - 1) {
                        riddle.push(word);
                        break;
                    }
                    if (index - 1 >= 0) {
                        riddle.splice(index - 1, 0, word);
                    }
                }
            }; break;
            case 'Sort': {
                riddle.sort((a, b) => b.localeCompare(a));
                /* riddle.sort((a, b) => b.length - a.length); */
            }; break;
            case 'Replace': {
                let wordOne = currentArr.shift();
                let wordTwo = currentArr.shift();
                if (riddle.includes(wordTwo)) {
                    let indexWordTwo = riddle.indexOf(wordTwo);
                    riddle.splice(indexWordTwo, 1, wordOne);
                }
            }; break;
        }
    }
}

theFinalQuest([
    'Congratulations! You last also through the have challenge!',
    'Swap have last',
    'Replace made have',
    'Delete 2',
    'Put it 4',
    'Stop',
    ''
]
);
theFinalQuest([
    'This the my quest! final',
    'Put is 2',
    'Swap final quest!',
    'Delete 2',
    'Stop',
    ''
]
);