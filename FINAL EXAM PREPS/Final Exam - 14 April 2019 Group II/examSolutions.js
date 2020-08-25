console.log('The Isle of Man TT Race\n');

function solve(arr = []) {
    let regex = /([#$%*&])([A-Za-z]+)\1=(\d+)!!(.+)/;

    for (let line of arr) {
        if (regex.test(line)) {

            let currMatch = regex.exec(line);

            let nameOfRacer = currMatch[2];
            let lengthOfGeohashcode = +currMatch[3];
            let encryptedGeohashCode = currMatch[4];
            if (lengthOfGeohashcode === encryptedGeohashCode.length) {
                encryptedGeohashCode = encryptedGeohashCode.split('').map(char => char = String.fromCharCode((char.charCodeAt(0) + lengthOfGeohashcode))).join('');
                console.log(`Coordinates found! ${nameOfRacer} -> ${encryptedGeohashCode}`);
            } else {
                console.log('Nothing found!');
            }
        } else {
            console.log('Nothing found!');
        }
    }
}

solve([
    '%GiacomoAgostini%=7!!hbqw',
    '&GeoffDuke*=6!!vjh]zi',
    'JoeyDunlop=10!!lkd,rwazdr',
    'Mike??Hailwood=5!![pliu',
    '#SteveHislop#=16!!df%TU[Tj(h!!TT[S'
]
);

console.log('\nPractice sessions\n');

function practiceSesh(arr = []) {
    arr.pop();

    let raceObj = {};

    for (let line of arr) {
        let [command, road, racer, nextRoad] = line.split('->');

        switch (command) {
            case 'Add': {
                if (!raceObj[road]) {
                    raceObj[road] = [];
                }

                raceObj[road].push(racer)
            }; break;
            case 'Move': {
                if (raceObj[road].includes(racer)) {
                    let index = raceObj[road].indexOf(racer);
                    raceObj[road].splice(index, 1);
                    raceObj[nextRoad].push(racer);
                }
            }; break;
            case 'Close': {
                if (raceObj[road]) {
                    delete raceObj[road];
                }
            }; break;
        }
    }

    console.log('Practice sessions:');

    let sortedRoads = Object.keys(raceObj).sort((r1,r2) => {
        if (raceObj[r1].length - raceObj[r2].length === 0) {
            return r1.localeCompare(r2);
        } else {
            return raceObj[r2].length - raceObj[r1].length;
        }
    });

    sortedRoads.forEach(road => {
        console.log(road);
        raceObj[road].forEach(racer => console.log(`++${racer}`))
    })
}

practiceSesh([
    'Add->Glencrutchery Road->Giacomo Agostini',
    'Add->Braddan->Geoff Duke',
    'Add->Peel road->Mike Hailwood',
    'Add->Glencrutchery Road->Guy Martin',
    'Move->Glencrutchery Road->Giacomo Agostini->Peel road',
    'Close->Braddan',
    'END'
]
);