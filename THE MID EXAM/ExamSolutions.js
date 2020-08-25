/*  */

console.log('1st Exercise:');

function nationalCourt(arr = []) {
    let copy = arr.slice(0);

    let firstEfff = +copy[0];
    let secEfff = +copy[1];
    let thirdEfff = +copy[2];

    let ppl = +copy[3];

    let pplPerHour = (firstEfff + secEfff + thirdEfff);

    let answeredPpl = 0;

    let i = 0;

    while (ppl > answeredPpl) {
        i++;
        if (i % 4 !== 0) {
            answeredPpl += pplPerHour;
        }
    }
    console.log(`Time needed: ${i}h.`);
}

/* nationalCourt(['5', '6', '4', '20']);
nationalCourt(['5', '6', '4', '20']); */

nationalCourt(['1', '2', '3', '45']);
nationalCourt(['3', '2', '5', '40']);


/*  */

console.log('\n2nd Exercise:');

function shoppingList(arr = []) {
    let copyArr = arr.slice(0);

    let products = copyArr.shift().split('!');

    for (let line of copyArr) {
        let currArr = line.split(' ');
        let command = currArr[0];

        if (line === 'Go Shopping!') {
            console.log(products.join(', '));
            break;
        }

        switch (command) {
            case 'Urgent': {
                let item = currArr[1];
                if (!products.includes(item)) {
                    products.splice(0, 0, item);
                }
            }; break;
            case 'Unnecessary': {
                let item = currArr[1];
                if (products.includes(item)) {
                    let index = products.indexOf(item);
                    products.splice(index, 1);
                }
            }; break;
            case 'Correct': {
                let oldItem = currArr[1];
                let newItem = currArr[2];

                if (products.includes(oldItem)) {
                    let indexOldItem = products.indexOf(oldItem);
                    products.splice(indexOldItem, 1, newItem);
                }

            }; break;
            case 'Rearrange': {
                let item = currArr[1];
                if (products.includes(item)) {
                    let index = products.indexOf(item);
                    products.splice(index, 1);
                    products.push(item)
                }
            }; break;
        }
    }
}

shoppingList([
    'Tomatoes!Potatoes!Bread',
    'Unnecessary Milk',
    'Urgent Tomatoes',
    'Go Shopping!'
]
);

shoppingList([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
]

);

/*  */

console.log('\n3rd Exercise:');

function heartDelivery(arr = []) {
    let copy = arr.slice(0);

    let strings = copy.shift().split('@').map(x => x = Number(x));

    let index = 0;

    let lastPostion = 0;

    for (let line of copy) {
        if (line === 'Love!') {
            break;
        }
        let currArr = line.split(' ');
        let lengthOfJump = +currArr.pop();
        if (lastPostion > 0) {
            lengthOfJump += lastPostion;
        }

        if (lengthOfJump >= strings.length) {
            lengthOfJump = 0;
            if (strings[lengthOfJump] === 0) {
                console.log(`Place ${lengthOfJump} already had Valentine's day.`);
            } else {
                strings[lengthOfJump] -= 2;
                if (strings[lengthOfJump] === 0) {
                    console.log(`Place ${lengthOfJump} has Valentine's day.`);
                }
            }
            lastPostion = lengthOfJump;
        } else {
            if (strings[lengthOfJump] === 0) {
                console.log(`Place ${lengthOfJump} already had Valentine's day.`);
                lastPostion = lengthOfJump;
            } else {
                strings[lengthOfJump] -= 2;
                if (strings[lengthOfJump] === 0) {
                    console.log(`Place ${lengthOfJump} has Valentine's day.`);
                }
                lastPostion = lengthOfJump;
            }
        }
    }
    console.log(`Cupid's last position was ${lastPostion}.`);
    let isFailed = false;
    for (let number of strings) {
        if (number > 0) {
            isFailed = true;
            break;
        }
    }

    if (!isFailed) {
        console.log('Mission was successful.');
    } else {
        let count = 0;
        for (let number of strings) {
            if (number > 0) {
                count++;
            }
        }
        console.log(`Cupid has failed ${count} places.`);
    }
}

heartDelivery(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']);
heartDelivery([
    '2@4@2', 'Jump 2',
    'Jump 2', 'Jump 8',
    'Jump 3', 'Jump 1',
    'Love!'
]
);

// 290/300 - 1h 17m