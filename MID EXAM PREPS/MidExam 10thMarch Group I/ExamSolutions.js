/* Spring Vacation Trip */

function springVacTrip(arr = []) {
    let copy = arr.slice(0);
    let daysOfVacay = +copy.shift();
    let budget = +copy.shift();
    let people = +copy.shift();
    let priceForFuelPerKM = +copy.shift();
    let foodExpenses = +copy.shift();
    let thePriceForNight = +copy.shift();

    let totalPriceForHotel = thePriceForNight * people * daysOfVacay;
    let totalFoodSum = foodExpenses * people * daysOfVacay;

    if (people > 10) {
        totalPriceForHotel -= totalPriceForHotel * .25;
    }

    let currentExpenses = (totalPriceForHotel) + (totalFoodSum);

    let noMoney = false;

    for (let i = 1; i <= daysOfVacay; i++) {
        let distanceTravelled = +copy.shift();
        let additionalExpenses = 0;

        currentExpenses += distanceTravelled * priceForFuelPerKM;

        if (i % 3 === 0 || i % 5 === 0) {
            additionalExpenses = .4 * currentExpenses;
            currentExpenses += additionalExpenses;
        }

        if (i % 7 === 0) {
            currentExpenses -= (currentExpenses / people);
        }

        if (currentExpenses > budget) {
            noMoney = true;
            break;
        }
    }

    if (noMoney) {
        console.log(`Not enough money to continue the trip. You need ${(Math.abs(currentExpenses - budget).toFixed(2))}$ more.`);
    } else {
        console.log(`You have reached the destination. You have ${(Math.abs(currentExpenses - budget).toFixed(2))}$ budget left.`);
    }
}

springVacTrip([
    '7', '12000', '5',
    '1.5', '10', '20',
    '512', '318', '202',
    '154', '222', '108',
    '123'
]
);
springVacTrip([
    '10', '20500', '11',
    '1.2', '8', '13',
    '100', '150', '500',
    '400', '600', '130',
    '300', '350', '200',
    '300'
]

);

/* Hello France */

function helloFrance(arr = []) {
    let copy = arr.slice(0);

    let items = copy.shift().split('|');
    let budget = +copy.shift();

    let ressellPricesSum = 0;
    let oldPrices = 0;

    let prices = [];

    for (let item of items) {
        let [type, price] = item.split('->');
        price = Number(price);

        switch (type) {
            case 'Clothes': {
                if (price <= 50 && budget - price >= 0) {
                    budget -= price;
                    oldPrices += price;
                    price += price * 0.40;
                    prices.push(price);
                    ressellPricesSum += price;
                }
            }; break;
            case 'Shoes': {
                if (price <= 35 && budget - price >= 0) {
                    budget -= price;
                    oldPrices += price;
                    price += price * 0.40;
                    prices.push(price);
                    ressellPricesSum += price;
                }
            }; break;
            case 'Accessories': {
                if (price <= 20.50 && budget - price >= 0) {
                    budget -= price;
                    oldPrices += price;
                    price += price * 0.40;
                    prices.push(price);
                    ressellPricesSum += price;
                }
            }; break;
        }
    }

    let profit = ressellPricesSum - oldPrices;
    let finalSum = ressellPricesSum + budget;

    if (finalSum >= 150) {
        let newPrices = prices.map(a => a.toFixed(2));
        console.log(newPrices.join(' '));
        console.log(`Profit: ${profit.toFixed(2)}`);
        console.log('Hello, France!');
    } else {
        let newPrices = prices.map(a => a.toFixed(2));
        console.log(newPrices.join(' '));
        console.log(`Profit: ${profit.toFixed(2)}`);
        console.log('Time to go.');
    }
}

helloFrance([
    'Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60',
    '120'
]
)

helloFrance([
    'Shoes->41.20|Clothes->20.30|Accessories->40|Shoes->15.60|Shoes->33.30|Clothes->48.60',
    '90'
]

)

/* Last Stop */

function lastStop(arr = []) {
    let copyArr = arr.slice(0);

    let numberOnPainting = copyArr.shift().split(' ');

    for (let line of copyArr) {
        let currArr = line.split(' ');

        let command = currArr[0];

        if (command === 'END') {
            console.log(numberOnPainting.join(' '));
            break;
        }

        switch (command) {
            case 'Change': {
                let paintingNum = currArr[1];
                let changedNum = currArr[2];
                if (numberOnPainting.includes(paintingNum)) {
                    let index = numberOnPainting.indexOf(paintingNum)
                    numberOnPainting.splice(index, 1, changedNum);
                }
            }; break;
            case 'Hide': {
                let paintingNum = currArr[1];
                if (numberOnPainting.includes(paintingNum)) {
                    let index = numberOnPainting.indexOf(paintingNum)
                    numberOnPainting.splice(index, 1);
                }
            }; break;
            case 'Switch': {
                let paintingNum1 = currArr[1];
                let paintingNum2 = currArr[2];
                if (numberOnPainting.includes(paintingNum1) && numberOnPainting.includes(paintingNum2)) {

                    let index1 = numberOnPainting.indexOf(paintingNum1);
                    let index2 = numberOnPainting.indexOf(paintingNum2);

                    numberOnPainting.splice(index1, 1, paintingNum2);
                    numberOnPainting.splice(index2, 1, paintingNum1);
                }
            }; break;
            case 'Insert': {
                let place = currArr[1];
                let index = Number(place);
                let paintingNum = currArr[2];
                if (index >= 0 && index < numberOnPainting.length) {
                    numberOnPainting.splice(index + 1, 0, paintingNum);
                }
            }; break;
            case 'Reverse': {
                numberOnPainting.reverse();
            }; break;
        }
    }
}

lastStop([
    '115 115 101 114 73 111 116 75',
    'Insert 5 114',
    'Switch 116 73',
    'Hide 75',
    'Reverse ',
    'Change 73 70',
    'Insert 10 85',
    'END'
]
)
lastStop([
    '77 120 115 101 101 97 78 88 112 111 108 101 111 110',
    'Insert 5 32',
    'Switch 97 78',
    'Hide 88',
    'Change 120 117',
    'END'
  ]
  
)