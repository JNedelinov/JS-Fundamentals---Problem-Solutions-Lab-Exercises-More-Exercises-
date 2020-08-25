// LAB

function phoneBook(arr = []) {
    let obj = {};
    for (let line of arr) {
        let [person, number] = line.split(' ');
        if (obj[person]) {
            obj[person] = number;
        } else {
            obj[person] = number;
        }
    }

    let newMap = new Map();
    for (let line of arr) {
        let [person, number] = line.split(' ');
        if (newMap.has(person)) {
            newMap.set(person, number);
        } else {
            newMap.set(person, number);
        }
    }

    Object.entries(obj).forEach(entry => console.log(`${entry[0]} -> ${entry[1]}`))
    Array.from(newMap.keys()).forEach(person => console.log(`${person} -> ${newMap.get(person)}`))
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)

//

function storage(arr = []) {
    let mapObj = new Map();
    for (let line of arr) {
        let [product, quantity] = line.split(' ');
        quantity = +quantity;
        if (!mapObj.has(product)) {
            mapObj.set(product, quantity);
        } else {
            let currQuantity = mapObj.get(product);
            mapObj.set(product, (quantity + currQuantity));
        }
    }

    Array.from(mapObj.entries()).forEach(entry => console.log(`${entry[0]} -> ${entry[1]}`))
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)

//

function schoolGrades(arr = []) {
    let mapObj = new Map();
    for (let line of arr) {
        let currArr = line.split(' ');
        let name = currArr.shift();
        let grades = currArr.slice(0).map(a => a = Number(a));
        if (!mapObj.has(name)) {
            mapObj.set(name, grades);
        } else {
            let currGrades = mapObj.get(name);
            grades.forEach(grade => currGrades.push(grade));
            mapObj.set(name, currGrades);
        }
    }

    let sortedStudent = Array.from(mapObj.keys()).sort((a, b) => {
        let aAverage = mapObj.get(a).reduce((acc, curr) => acc += curr, 0) / mapObj.get(a).length;
        let bAverage = mapObj.get(b).reduce((acc, curr) => acc += curr, 0) / mapObj.get(b).length;
        return aAverage - bAverage;
    });

    sortedStudent.forEach(student => console.log(`${student}: ${mapObj.get(student).join(', ')}`))
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);

//

function wordOccurrences(arr = []) {
    let mapObj = new Map();
    for (let word of arr) {
        if (!mapObj.has(word)) {
            let count = 1;
            mapObj.set(word, count);
        } else {
            let currCount = mapObj.get(word) + 1;
            mapObj.set(word, currCount);
        }
    }

    let sortedByCount = Array.from(mapObj.keys()).sort((a, b) => mapObj.get(b) - mapObj.get(a));

    sortedByCount.forEach(word => console.log(`${word} -> ${mapObj.get(word)} times`))
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);

//

function neighborhoods(arr = []) {
    let copyArr = arr.slice(0);
    let streets = copyArr.shift().split(', ');
    let mapObj = new Map();

    streets.forEach(street => mapObj.set(street, []));

    for (let line of copyArr) {
        let [street, name] = line.split(' - ');
        if (streets.includes(street)) {
            if (mapObj.has(street)) {
                mapObj.get(street).push(name);
            }
        }
    }

    let sortedNames = Array.from(mapObj.keys()).sort((a, b) => mapObj.get(b).length - mapObj.get(a).length);

    sortedNames.forEach(street => {
        console.log(`${street}: ${mapObj.get(street).length}`);
        for (let person of mapObj.get(street)) {
            console.log(`--${person}`);
        }
    })
}

neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
);

// EXERCISES

function wordsTracker(arr = []) {
    let copyArr = arr.slice(0);
    let givenWords = copyArr.shift().split(' ');
    let mapObj = new Map();

    givenWords.forEach(word => mapObj.set(word, 0));

    for (let word of copyArr) {
        if (givenWords.includes(word)) {
            let newValue = mapObj.get(word) + 1;
            mapObj.set(word, newValue);
        }
    }

    let sortedWords = Array.from(mapObj.keys()).sort((a, b) => mapObj.get(b) - mapObj.get(a));

    sortedWords.forEach(word => console.log(`${word} - ${mapObj.get(word)}`))
}

wordsTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)

//

function oddOccurrences(str = '') {
    str = str.toLowerCase().split(' ');
    let mapObj = new Map();

    for (let word of str) {
        if (!mapObj.has(word)) {
            mapObj.set(word, 1);
        } else {
            let currCount = mapObj.get(word) + 1;
            mapObj.set(word, currCount);
        }
    }

    let newArr = [];

    Array.from(mapObj.keys()).forEach(word => {
        if (mapObj.get(word) % 2 !== 0) {
            newArr.push(word);
        } else {
            mapObj.delete(word);
        }
    });

    console.log(newArr.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

//

function piccolo(arr = []) {
    let mapObj = new Map();
    for (let line of arr) {
        let [command, carNum] = line.split(', ');
        if (command === 'IN') {
            if (!mapObj.has(carNum)) {
                mapObj.set(carNum, '');
            }
        } else if (command === 'OUT') {
            if (mapObj.has(carNum)) {
                mapObj.delete(carNum);
            }
        }
    }

    let sortedCarnums = Array.from(mapObj.keys()).sort((a, b) => {
        return a.localeCompare(b);
    });

    let newArr = [];

    sortedCarnums.forEach(car => newArr.push(car));

    if (newArr.length > 0) {
        console.log(newArr.join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)

// 

function partyTime(arr = []) {
    let obj = {
        "VIP": [],
        "Regular": [],
    };

    let beforePartyArr = arr.slice(0, arr.indexOf('PARTY'));
    beforePartyArr.forEach(guy => {
        if (!isNaN(guy[0])) {
            obj["VIP"].push(guy);
        } else {
            obj["Regular"].push(guy);
        }
    })

    let afterPartyArr = arr.slice(arr.indexOf('PARTY') + 1);
    afterPartyArr.forEach(guy => {
        if (!isNaN(guy[0])) {
            obj["VIP"].splice(obj["VIP"].indexOf(guy), 1);
        } else {
            obj["Regular"].splice(obj["Regular"].indexOf(guy), 1);
        }
    })

    let count = obj["VIP"].length + obj["Regular"].length;
    console.log(count);

    for (let key in obj) {
        console.log(obj[key].join('\n'));
    }
}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
)