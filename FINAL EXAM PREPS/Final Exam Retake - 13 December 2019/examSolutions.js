console.log("Warrior's Quest\n");

function warriorsQuest(arr = []) {
    arr.pop();

    let str = arr.shift();

    for (let line of arr) {
        let currArr = line.split(' ');

        let command = currArr[0].toLowerCase();

        switch (command) {
            case 'gladiatorstance': {
                str = str.toUpperCase();
                console.log(str);
            }; break;
            case 'defensivestance': {
                str = str.toLowerCase();
                console.log(str);
            }; break;
            case 'dispel': {
                let index = +currArr[1];
                if (index >= 0 && index <= str.length - 1) {
                    let letter = currArr[2];
                    newArr = str.split('');
                    newArr.splice(index, 1, letter);
                    str = newArr.join('');
                    console.log("Success!");
                } else {
                    console.log('Dispel too weak.');
                }
            }; break;
            case 'target': {
                let bonusCommand = currArr[1].toLowerCase();
                let subString = currArr[2];
                if (str.includes(subString)) {
                    if (bonusCommand === 'change') {
                        let secondSubString = currArr[3];
                        str = str.replace(subString, secondSubString);
                        console.log(str);
                    } else if (bonusCommand === 'remove') {
                        str = str.replace(subString, '');
                        console.log(str);
                    }
                }
            }; break;
            default: {
                console.log("Command doesn't exist!");
            }; break;
        }
    }
}

warriorsQuest([
    'fr1c710n',
    'GladiatorStance',
    'Dispel 2 I',
    'Disel 4 T',
    'Dispel 6 O',
    'Dispel 5 I',
    'Dispel 10 I',
    'Target Change RICTION riction',
    'For Azeroth'
]
)

console.log('\n');

console.log('Boss Rush\n');

function bossRush(arr = []) {
    arr.shift();

    let regex = /\|([A-Z]{4,})\|:#([a-zA-Z]+ [a-zA-Z]+)#/;

    for (let line of arr) {
        if (regex.test(line)) {
            let bossName = regex.exec(line)[1];
            let title = regex.exec(line)[2];

            console.log(`${bossName}, The ${title}`);
            console.log(`>> Strength: ${bossName.length}`);
            console.log(`>> Armour: ${title.length}`);
        } else {
            console.log("Access denied!");
        }
    }
}

bossRush([
    '3',
    '|GEORGI|:#Lead architect#',
    '|Hristo|:#High Overseer#',
    '|STEFAN|:#Assistant Game Developer#'
]
);

console.log('\n');

console.log('Hero Recruitment\n');

function heroRecruitment(arr = []) {
    arr.pop();

    let heroes = {};

    for (let line of arr) {
        let [command, name, spell] = line.split(' ');

        switch (command) {
            case 'Enroll': {
                if (heroes[name]) {
                    console.log(`${name} is already enrolled.`);
                } else {
                    heroes[name] = [];
                }
            }; break;
            case 'Learn': {
                if (!heroes[name]) {
                    console.log(`${name} doesn't exist.`);
                } else {
                    if (heroes[name].includes(spell)) {
                        console.log(`${name} has already learnt ${spell}.`);
                    } else {
                        heroes[name].push(spell);
                    }
                }
            }; break;
            case 'Unlearn': {
                if (!heroes[name]) {
                    console.log(`${name} doesn't exist.`);
                } else {
                    if (!heroes[name].includes(spell)) {
                        console.log(`${name} doesn't know ${spell}.`);
                    } else {
                        let index = heroes[name].indexOf(spell);
                        heroes[name].splice(index, 1);
                    }
                }
            }; break;
        }
    }

    let sortedHeroes = Object.keys(heroes).sort((a, b) => {
        if (heroes[a].length - heroes[b].length === 0) {
            return a.localeCompare(b);
        } else {
            return heroes[b].length - heroes[a].length;
        }
    })
    
    console.log('Heroes:');
    sortedHeroes.forEach(hero => {
        console.log(`== ${hero}: ${heroes[hero].join(', ')}`);
    })
}

heroRecruitment([
    'Enroll Stefan',
    'Enroll Pesho',
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn Stamat ItShouldNotWork',
    'Unlearn Gosho Dispel',
    'Unlearn Stefan ItShouldWork',
    'End'
]
);


// 1h 10m

// 167th - 280 points only