// LAB

function personInfo(fName, sName, age) {
    let newObj = {
        firstName: fName,
        secondName: sName,
        age: age,
    }

    for (let key in newObj) {
        console.log(`${key}: ${newObj[key]}`);
    }
}

personInfo('Aston', 'Jr.', '23');

//

function city(name, area, population, country, postCode) {
    let cityObj = {
        name: name,
        area: area,
        population: population,
        country: country,
        postCode: postCode,
    };

    for (let key in cityObj) {
        console.log(`${key} -> ${cityObj[key]}`);
    }
}

city('Sofia', '492', '124355', 'Bulgaria', '1000');

//

function convertToObject(strInJSON = '') {
    let obj = JSON.parse(strInJSON);
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');

//

function convertToJSON(name = '', lastName = '', hairColor = '') {
    let obj = {
        name: name,
        lastName: lastName,
        hairColor: hairColor,
    }
    let strInJSON = JSON.stringify(obj);
    console.log(strInJSON);
}

convertToJSON('George', 'Jones', 'Brown');

//

function cats(arr = []) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let newArr = [];

    for (let cat of arr) {
        let [name, age] = cat.split(' ');
        let currCat = new Cat(name, age);
        newArr.push(currCat);
    }

    for (let curObj of newArr) {
        curObj.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);

//

function songs(arr = []) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let copyArr = arr.slice(0);

    copyArr.shift();
    let listToPrint = copyArr.pop();

    let newArr = [];

    for (let songStats of copyArr) {
        let [typeList, name, time] = songStats.split('_');
        let currSong = new Song(typeList, name, time);
        newArr.push(currSong);
    }

    for (let currObj of newArr) {
        if (currObj["typeList"] === listToPrint) {
            console.log(currObj["name"]);
        }
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)

// EXERCISES

function employees(arr = []) {
    let obj = {};

    for (let person of arr) {
        obj[person] = person.length;
    }

    for (let key in obj) {
        console.log(`Name ${key} -- Personal Number: ${obj[key]}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)

//

function towns(arr = []) {
    let newArr = [];

    for (let cityInfo of arr) {
        let [town, latitude, longitude] = cityInfo.split(' | ');

        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let townObj = {}

        townObj['town'] = town;
        townObj['latitude'] = latitude;
        townObj['longitude'] = longitude;
        newArr.push(townObj);
    }

    for (let curObj of newArr) {
        console.log(curObj);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])

//

function storeProvision(currStockArr = [], orderedProductsArr = []) {
    let obj = {};

    for (let i = 0; i < currStockArr.length; i += 2) {
        let product = currStockArr[i];
        let quantity = +currStockArr[i + 1];

        if (!obj.hasOwnProperty(product)) {
            obj[product] = quantity;
        } else {
            obj[product] += quantity;
        }
    }

    for (let i = 0; i < orderedProductsArr.length; i += 2) {
        let product = orderedProductsArr[i];
        let quantity = +orderedProductsArr[i + 1];

        if (obj[product]) {
            obj[product] += quantity;
        } else {
            obj[product] = quantity;
        }
    }

    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);

//

function movies(arr = []) {
    let obj = {};

    for (let line of arr) {
        let currArr = line.split(' ');

        if (currArr.includes('addMovie')) {
            currArr.shift();
            let movie = currArr.join(' ');
            obj[movie] = {
                name: movie,
            };
        } else if (currArr.includes('directedBy')) {
            let index = currArr.indexOf('directedBy');
            let movie = currArr.slice(0, index).join(' ');
            let director = currArr.slice(index + 1).join(' ');

            for (let key in obj) {
                if (key === movie) {
                    obj[movie]["director"] = director;
                }
            }
        } else if (currArr.includes('onDate')) {
            let index = currArr.indexOf('onDate');
            let movie = currArr.slice(0, index).join(' ');
            let date = currArr.slice(index + 1).join(' ');

            for (let key in obj) {
                if (key === movie) {
                    obj[movie]['date'] = date;
                }
            }
        }
    }

    for (let key in obj) {
        if (obj[key].hasOwnProperty('director') &&
            obj[key].hasOwnProperty('date') &&
            obj[key].hasOwnProperty('name')) {
            console.log(JSON.stringify(obj[key]));
        }
    }

}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)

//

function inventory(arr = []) {
    let obj = {};
    for (let heroInfo of arr) {
        let [hero, level, items] = heroInfo.split(' / ');
        obj[hero] = {};
        obj[hero]["level"] = +level;
        obj[hero]["items"] = items;
    }

    let sortedHeroes = Object.keys(obj).sort((a, b) => obj[a]["level"] - obj[b]["level"]);

    sortedHeroes.forEach(hero => {
        let sortedItems = obj[hero]["items"].split(', ').sort((a, b) => a.localeCompare(b));
        console.log(`Hero: ${hero}`);
        console.log(`level => ${obj[hero]["level"]}`);
        console.log(`items => ${sortedItems.join(', ')}`);
    });

}

inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]
);

//

function makeADictionary(arr = []) {
    let obj = {};
    for (let currJSON of arr) {
        let currObj = JSON.parse(currJSON);
        let key = Object.keys(currObj);
        let value = Object.values(currObj);

        if (!obj[key]) {
            obj[key] = value;
        } else {
            obj[key] = value;
        }
    }

    let sortedTerms = Object.keys(obj).sort((a, b) => a.localeCompare(b));
    sortedTerms.forEach(term => {
        console.log(`Term: ${term} => Definition: ${obj[term]}`);
    })
}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
);

//

class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine: parts.engine,
            power: parts.power,
            quality: parts.engine * parts.power,
        }
        this.fuel = fuel;
    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }
}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);

//

class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(randomProduct) {
        this.totalCost += randomProduct["price"] * randomProduct["quantity"];
        this.capacity -= randomProduct["quantity"];
        return this.storage.push(randomProduct);
    }

    getProducts() {
        let result = [];
        this.storage.forEach(product => result.push(JSON.stringify(product)));
        return result.join('\n');
    }
}

let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };

let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };

let productThree = { name: 'Bread', price: 1.10, quantity: 8 };

let storage = new Storage(50);

storage.addProduct(productOne);

storage.addProduct(productTwo);

storage.addProduct(productThree);

storage.getProducts();

console.log(storage.capacity);

console.log(storage.totalCost);

//

function catalogue(arr = []) {
    let obj = {};

    for (let line of arr) {
        let [product, price] = line.split(' : ');
        let firstLetter = product[0];
        price = +price;

        if (!obj[firstLetter]) {
            obj[firstLetter] = {};
        }

        obj[firstLetter][product] = price;
    }

    let sortedLetterGroups = Object.keys(obj).sort((a, b) => a.localeCompare(b));

    sortedLetterGroups.forEach(group => {
        console.log(group);
        let sortedProductsInGroup = Object.keys(obj[group]).sort((a, b) => a.localeCompare(b));
        sortedProductsInGroup.forEach(product => console.log(`  ${product}: ${obj[group][product]}`))
    })
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
);

//

function systemRegister(arr = []) {
    let obj = {};

    for (let line of arr) {
        let [system, component, subComponent] = line.split(' | ');

        if (!obj[system]) {
            obj[system] = {};
        }

        if (!obj[system][component]) {
            obj[system][component] = [];
        }

        obj[system][component].push(subComponent);
    }

    let sortedSystems = Object.keys(obj).sort((a,b) => {
        if (Object.keys(obj[a]).length - Object.keys(obj[b]).length === 0) {
            return a.localeCompare(b);
        } else {
            return Object.keys(obj[b]).length - Object.keys(obj[a]).length
        }
    });
    
    sortedSystems.forEach(system => {
        console.log(system);

        let sortedComponents = Object.keys(obj[system]).sort((a,b) => obj[system][b].length - obj[system][a].length);

        sortedComponents.forEach(component => {
            console.log(`|||${component}`);
            obj[system][component].forEach(subComponent => {
                console.log(`||||||${subComponent}`);
            })
        })
    });
}

systemRegister([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]
);