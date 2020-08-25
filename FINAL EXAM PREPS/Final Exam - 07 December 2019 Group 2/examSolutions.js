/* Nikulden's Charity */

console.log("Nikulden's charity\n");

function nikuldensCharity(arr = []) {
    let copyArr = arr.slice(0, arr.indexOf('Finish'));

    let str = copyArr.shift();

    for (let line of copyArr) {
        let currArr = line.split(' ');

        switch (currArr[0]) {
            case 'Replace': {
                let firstChar = currArr[1];
                let secondChar = currArr[2];

                let regex = new RegExp(firstChar, 'g');

                if (str.includes(firstChar)) {
                    str = str.replace(regex, secondChar);
                }

                console.log(str);
            }; break;
            case 'Cut': {
                let startIndex = +currArr[1];
                let endIndex = +currArr[2];

                if (startIndex >= 0 && endIndex <= str.length - 1) {
                    let subString = str.substring(startIndex, endIndex + 1);
                    str = str.replace(subString, '');
                    console.log(str);
                } else {
                    console.log('Invalid indexes!');
                }
            }; break;
            case 'Make': {
                let upLow = currArr[1];
                if (upLow === 'Upper') {
                    str = str.toUpperCase();
                } else if (upLow === 'Lower') {
                    str = str.toLowerCase();
                }
                console.log(str);
            }; break;
            case 'Sum': {
                let startIndex = +currArr[1];
                let endIndex = +currArr[2];

                if (startIndex >= 0 && endIndex <= str.length - 1) {
                    let subString = str.substring(startIndex, endIndex + 1);
                    let sum = 0;
                    for (let letter of subString) {
                        sum += letter.charCodeAt(0);
                    }
                    console.log(sum);
                } else {
                    console.log('Invalid indexes!');
                }
            }; break;
            case 'Check': {
                let subString = currArr[1];
                if (str.includes(subString)) {
                    console.log(`Message contains ${subString}`);
                } else {
                    console.log(`Message doesn't contain ${subString}`);
                }
            }; break;
        }
    }
}

nikuldensCharity([
    'ILikeSharan',
    'Replace a e',
    'Make Upper',
    'Check SHEREN',
    'Sum 1 4',
    'Cut 1 4',
    'Finish'
]
);

console.log('\n40-45 MINUTES\n');

/* Message Translator */

console.log("Message Translator\n");

function messageTranslator(arr = []) {
    let copyArr = arr.slice(0);
    let n = copyArr.shift();

    let regex = /!([A-Z][a-z]{2,})!:\[([A-Za-z]{8,})\]/;

    for (let line of copyArr) {
        if (regex.test(line)) {
            let match = regex.exec(line);

            let command = match[1];
            let name = match[2];

            let nameArr = name.split('');

            nameArr = nameArr.map(a => a = a.charCodeAt(0));

            console.log(`${command}: ${nameArr.join(' ')}`);
        } else {
            console.log('The message is invalid');
        }
    }
}

messageTranslator(['2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]']);

console.log('\n13 MINUTES\n');

/* Nikulden's Meals */

console.log("Nikulden's Meals\n");

function nikuldensMeals(arr = []) {
    let copyArr = arr.slice(0, arr.indexOf('Stop'));

    let guestMealsObj = {};

    let unlikedMeals = 0;

    for (let line of copyArr) {
        currArr = line.split('-');

        switch (currArr[0]) {
            case 'Like': {
                let guest = currArr[1];
                let meal = currArr[2];

                if (!guestMealsObj.hasOwnProperty(guest)) {
                    guestMealsObj[guest] = [];
                }

                if (!guestMealsObj[guest].includes(meal)) {
                    guestMealsObj[guest].push(meal);
                }

            }; break;
            case 'Unlike': {
                let guest = currArr[1];
                let meal = currArr[2];

                if (!guestMealsObj.hasOwnProperty(guest)) {
                    console.log(`${guest} is not at the party.`);
                } else {

                    if (guestMealsObj[guest].includes(meal)) {
                        console.log(`${guest} doesn't like the ${meal}.`);
                        let index = guestMealsObj[guest].indexOf(meal);
                        guestMealsObj[guest].splice(index, 1);
                        unlikedMeals++;
                    } else {
                        console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                    }
                }
            }; break;
        }
    }

    let sortedGuests = Object.keys(guestMealsObj).sort((guest1, guest2) => {
        if (guestMealsObj[guest1].length - guestMealsObj[guest2].length === 0) {
            return guest1.localeCompare(guest2);
        } else {
            return guestMealsObj[guest2].length - guestMealsObj[guest1].length;
        }
    });

    sortedGuests.forEach(guest => console.log(`${guest}: ${guestMealsObj[guest].join(', ')}`));

    console.log(`Unliked meals: ${unlikedMeals}`);
}

nikuldensMeals([
    'Like-Krisi-shrimps',
    'Like-Krisi-soup',
    'Like-Misho-salad',
    'Like-Pena-dessert',
    'Stop'
]
);
nikuldensMeals([
    'Like-Krisi-shrimps',
    'Unlike-Vili-carp',
    'Unlike-Krisi-salad',
    'Unlike-Krisi-shrimps',
    'Stop'
]
);
nikuldensMeals([
    'Like-Mike-frenchFries',
    'Like-Mike-salad',
    'Like-George-fruit',
    'Like-Steven-salad',
    'Unlike-Steven-salad',
    'Unlike-Steven-fruit',
    'Stop'
]
);

console.log();

// 1h 45-50 minutes

// 170th place