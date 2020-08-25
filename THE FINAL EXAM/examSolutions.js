console.log('0 \n');

function first(arr = []) {
    let str = arr.shift();

    for (let line of arr) {
        let currArr = line.split(' ');

        let command = currArr[0];

        if (command === 'Done') {
            console.log(`Your password is: ${str}`);
        }

        switch (command) {
            case 'TakeOdd': {
                let newStr = '';

                for (let i = 0; i < str.length; i++) {
                    if (i % 2 !== 0) {
                        newStr += str[i];
                    }
                }

                str = newStr;

                console.log(str);
            }; break;
            case 'Cut': {
                let index = +currArr[1];
                let length = +currArr[2];

                let string = str.substr(index, length);

                str = str.replace(string, '');

                console.log(str);
            }; break;
            case 'Substitute': {
                let substring = currArr[1];
                let substitute = currArr[2];

                if (str.includes(substring)) {
                    let regex = RegExp(substring, 'g');

                    str = str.replace(regex, substitute);

                    console.log(str);
                } else {
                    console.log('Nothing to replace!');
                }
            }; break;
        }
    }
}

first(
    [
        'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr',
        'TakeOdd',
        'Cut 15 3',
        'Substitute :: -',
        'Substitute | ^',
        'Done'
    ]
);

console.log('\n 0 \n');

console.log('0 \n');

function second(arr = []) {
    arr.shift();

    let regex = /(@#+)([A-Z]{1}[A-Za-z0-9]{4,}[A-Z]{1})(@#+)/;

    for (let line of arr) {
        if (regex.test(line)) {
            let match = regex.exec(line)[2];
            if (/[0-9]+/.test(match)) {
                let group = match.split('').filter(a => !isNaN(a)).join('');
                console.log(`Product group: ${group}`);
            } else {
                console.log('Product group: 00');
            }
        } else {
            console.log('Invalid barcode');
        }
    }
}


second(
    [
        '6',
        '@###Val1d1teM@###',
        '@#ValidIteM@#',
        '##InvaliDiteM##',
        '@InvalidIteM@',
        '@#Invalid_IteM@#',
        '@#ValiditeM@#',
        '@#FreshFisH@#',
        '@###Brea0D@###',
        '@##Che4s6E@##'


    ]
);

console.log('\n 0 \n');

console.log('0 \n');

function third(arr = []) {
    arr.pop();

    let playersNum = +arr.shift();

    let obj = {};

    for (let i = 0; i < playersNum; i++) {
        let [heroName, health, mana] = arr[i].split(' ');
        health = +health;
        mana = +mana;
        obj[heroName] = {
            'health': health,
            'mana': mana,
        }
    }

    for (let i = playersNum; i < arr.length; i++) {
        let currArr = arr[i].split(' - ');

        let command = currArr[0];

        let heroName = currArr[1];

        switch (command) {
            case 'CastSpell': {
                let mpNeeded = +currArr[2];
                let spell = currArr[3];

                if (obj[heroName]['mana'] >= mpNeeded) {
                    obj[heroName]['mana'] -= mpNeeded;
                    console.log(`${heroName} has successfully cast ${spell} and now has ${obj[heroName]['mana']} MP!`);
                } else if (obj[heroName]['mana'] < mpNeeded) {
                    console.log(`${heroName} does not have enough MP to cast ${spell}!`);
                }
            }; break;
            case 'TakeDamage': {
                let damage = +currArr[2];
                let attacker = currArr[3];

                if (obj[heroName]['health'] - damage >= 1) {
                    obj[heroName]['health'] -= damage;
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${obj[heroName]['health']} HP left!`);
                } else if (obj[heroName]['health'] - damage <= 0) {
                    delete obj[heroName];
                    console.log(`${heroName} has been killed by ${attacker}!`);
                }
            }; break;
            case 'Recharge': {
                let amount = +currArr[2];

                let recoveredAmount = 0;

                if (obj[heroName]['mana'] + amount > 200) {
                    let sum = obj[heroName]['mana'] + amount
                    recoveredAmount = Math.abs((sum) - (sum - 200) - obj[heroName]['mana'])
                    obj[heroName]['mana'] = 200;
                    console.log(`${heroName} recharged for ${recoveredAmount} MP!`);
                } else if (obj[heroName]['mana'] + amount <= 200) {
                    obj[heroName]['mana'] += amount;
                    console.log(`${heroName} recharged for ${amount} MP!`);
                }
            }; break;
            case 'Heal': {
                let amount = +currArr[2];

                let recoveredAmount = 0;

                if (obj[heroName]['health'] + amount > 100) {
                    let sum = obj[heroName]['health'] + amount
                    recoveredAmount = Math.abs((sum) - (sum - 100) - obj[heroName]['health'])
                    obj[heroName]['health'] = 100;
                    console.log(`${heroName} healed for ${recoveredAmount} HP!`);
                } else if (obj[heroName]['health'] + amount <= 100) {
                    obj[heroName]['health'] += amount;
                    console.log(`${heroName} healed for ${amount} HP!`);
                }
            }; break;
        }
    }

    let sortedHeroes = Object.keys(obj).sort((h1, h2) => {
        if (obj[h1]['health'] - obj[h2]['health'] === 0) {
            return h1.localeCompare(h2);
        } else {
            return obj[h2]['health'] - obj[h1]['health'];
        }
    });

    sortedHeroes.forEach(hero => {
        if (obj[hero]['health'] > 0) {
            console.log(hero);
            console.log(`  HP: ${obj[hero]['health']}`);
            console.log(`  MP: ${obj[hero]['mana']}`);
        }
    });
}


third(
    [
        '4',
        'Adela 90 150',
        'SirMullich 70 40',
        'Ivor 1 111',
        'Tyris 94 61',
        'Heal - SirMullich - 50',
        'Recharge - Adela - 100',
        'CastSpell - Tyris - 61 - Fireball',
        'TakeDamage - Tyris - 99 - Fireball',
        'TakeDamage - Ivor - 3 - Mosquito',
        'End'

    ]

);

// 175th place от top 40

// 2h 47m ...

console.log(Number('string'));