/*  */

console.log('1. Furniture');

function furniture(arr = []) {
    /* let regex = /(\>{2})(?<product>\w+)(\<{2})(?<price>(?:\d+|\d+\.\d+))(\!)(?<quantity>\d+)/g; */
    /* let regex = /\>{2}(?<product>\w+)\<{2}(?<price>\d+\d+.?\d+)\!(?<quantity>\d+)/g; */
    /* let regex = />>(?<product>[a-zA-Z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/gm; */
    /* let regex = />>(?<product>[a-zA-Z]+)<<(?<price>\d+|\d+\.\d+)!(?<quantity>\d+)/g; */
    let regex = />>(?<product>[a-zA-Z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/g;

    let sum = 0;

    let furniture = [];

    let copyArr = arr.slice(0, arr.indexOf('Purchase'));

    let str = copyArr.join(' ');

    let currMatch = regex.exec(str);

    while (currMatch !== null) {
        furniture.push(currMatch.groups['product']);
        let price = Number(currMatch.groups['price']);
        let quantity = Number(currMatch.groups['quantity']);
        sum += price * quantity;
        currMatch = regex.exec(str);
    }

    console.log('Bought furniture:');
    for (let product of furniture) {
        console.log(product);
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);

console.log();

/*  */

console.log('2. Race');

function race(arr = []) {
    let copyArr = arr.slice(0);
    let namesInRace = copyArr.shift().split(', ');
    let arrWithoutEnd = copyArr.slice(0, copyArr.indexOf('end of race'));

    let racersObj = {};

    for (let line of arrWithoutEnd) {
        let name = line.split(/[^a-zA-Z]/).join('');
        let distance = line.split(/[^\d]/).join('').split('').map(a => a = Number(a)).reduce((acc, curr) => {
            return acc + curr;
        }, 0);
        if (namesInRace.includes(name)) {
            if (!racersObj.hasOwnProperty(name)) {
                racersObj[name] = distance;
            } else {
                let currDistance = racersObj[name];
                let newDistance = currDistance + distance;
                racersObj[name] = newDistance;
            }
        }
    }

    let sortedRacers = Object.keys(racersObj).sort((racer1, racer2) => racersObj[racer2] - racersObj[racer1]);
    sortedRacers.length = 3;
    console.log(`1st place: ${sortedRacers[0]}`);
    console.log(`2nd place: ${sortedRacers[1]}`);
    console.log(`3rd place: ${sortedRacers[2]}`);
}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]
);

console.log();

/*  */

console.log('3. SoftUni Bar Income');

/* function softuniBarIncome(arr = []) {
    let regex = /\%(?<name>[A-Z][a-z]+)\%<(?<product>\w+)>\|(?<quantity>\d+)\|(?<price>\d+|\d+\.\d+)\$/g;

    let copyArr = arr.slice(0);
    let arrWithoutEnd = copyArr.slice(0, copyArr.indexOf('end of shift'));
    let str = arrWithoutEnd.join(' ');

    let currMatch = regex.exec(str);

    let income = 0;

    while(currMatch !== null) {
        let name = currMatch.groups['name'];
        let product = currMatch.groups['product'];
        let quantity = +currMatch.groups['quantity'];
        let price = +currMatch.groups['price'];

        console.log(`${name}: ${product} - ${(price * quantity).toFixed(2)}`);

        income += quantity * price;

        currMatch = regex.exec(str);
    }

    console.log(`Total income: ${income.toFixed(2)}`);
} */

function softuniBarIncome(arr = []) {
    let copyArr = arr.slice(0);
    let arrWithoutEnd = copyArr.slice(0, copyArr.indexOf('end of shift'));

    let income = 0;

    for (let line of arrWithoutEnd) {
        if ((/\%([A-Z][a-z]+)\%/).test(line) === true &&
            (/<(\w+)>/).test(line) === true &&
            (/\|(\d+)\|/).test(line) === true &&
            (/(\d+|\d+\.\d+)\$/).test(line) === true) {

            let name = line.match(/\%([A-Z][a-z]+)\%/)[1];
            let product = line.match(/<(\w+)>/)[1];
            let quantity = +line.match(/\|(\d+)\|/)[1];
            let price = +line.match(/(\d+|\d+\.\d+)\$/)[1];
            /* let arr = line.split(/[^\w\.]/).filter(a => a != ''); */
            console.log(`${name}: ${product} - ${(price * quantity).toFixed(2)}`);

            income += quantity * price;

        }
    }

    console.log(`Total income: ${income.toFixed(2)}`);
}

softuniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]
);
softuniBarIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]
);

console.log();

/*  */

console.log('4. Star Enigma');

function starEnigma(arr = []) {
    let copyArr = arr.slice(0);
    let numberOfMssggs = +copyArr.shift();

    let newArr = [];
    let planetariumObj = {
        'A': [],
        'D': []
    };

    for (let message of copyArr) {
        let count = message.split(/[^starSTAR]+/).filter(a => a !== '').join('').split('').length;
        let messageArr = message.split('')
        message = messageArr.map(a => {
            a = a.charCodeAt(0) - count;
            return a = String.fromCharCode(a);
        }).join('');
        newArr.push(message);
    }

    for (let line of newArr) {

        if ((/@([a-zA-Z]+)/).test(line) === true &&
            (/:(\d+)/).test(line) === true &&
            (/!([AD])!/).test(line) === true &&
            (/->\b(\d+)/).test(line) === true) {

            let planet = (/@([a-zA-Z]+)/).exec(line)[1];
            let population = +(/:(\d+)/).exec(line)[1];
            let attackType = (/!([AD])!/).exec(line)[1];
            let soldiersCount = +(/->\b(\d+)/).exec(line)[1];

            planetariumObj[attackType].push(planet);
        }
    }

    let orderedPlanetA = planetariumObj['A'].sort((a, b) => a.localeCompare(b));
    console.log(`Attacked planets: ${orderedPlanetA.length}`);
    for (let planet of orderedPlanetA) {
        console.log(`-> ${planet}`);
    }

    let orderedPlanetD = planetariumObj['D'].sort((a, b) => a.localeCompare(b));
    console.log(`Destroyed planets: ${orderedPlanetD.length}`);
    for (let planet of orderedPlanetD) {
        console.log(`-> ${planet}`);
    }

}

starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);
starEnigma([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]
);

console.log();

/*  */

console.log('1. Furniture');



console.log();

/*  */

console.log('1. Furniture');



console.log();

/*  */

console.log('1. Furniture');



console.log();