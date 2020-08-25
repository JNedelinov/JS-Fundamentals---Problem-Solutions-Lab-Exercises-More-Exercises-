/* Gift Box Coverage */

/* 5 CM SIZE OF A SIDE */
/* 30 SHEETS OF PAPER */
/* 4 CM AREA OF 1 PAPER */
/* EVERY 3RD SHEET COVERS 25% OFF THE USUAL AREA */

/* 

    ФОРМУЛА ЗА ПРОЦЕНТ ПРИМЕР : 90 / 150 * 100 = 60%

*/


function giftBoxCoverage(numArr = []) {
    let sizeOfSide = +numArr.shift();
    let sheetsOfPaper = +numArr.shift();
    let singleSheetArea = +numArr.shift();

    let areaOfBox = Math.pow(sizeOfSide, 2) * 6;

    let sumWithFullCm = 0;
    let sumWithLessCm = 0;
    let counter = 0;

    for (let i = 1; i <= sheetsOfPaper; i++) {
        let temp = singleSheetArea;
        if (i % 3 === 0) {
            temp *= .25; // само 25% от цялата дължина на sheetArea-та
            counter++;
            sumWithLessCm += temp;
        } else {
            sumWithFullCm += temp;
        }
    }

    let totalSum = sumWithFullCm + sumWithLessCm;

    let result = `You can cover ${Math.abs(totalSum / areaOfBox * 100).toFixed(2)}% of the box.`;
    return result;
}

console.log(giftBoxCoverage([5, 30, 4]));
console.log(giftBoxCoverage([2.5, 32, 4.25]));

/* Task Planner */

function taskPlanner(taskArr = []) {
    let copyTaskArr = taskArr.slice(0);
    let timeOfTasks = copyTaskArr.shift().split(' ');

    let finalArr = [];

    for (let strOfCommandAndTime of copyTaskArr) {
        let command = strOfCommandAndTime.split(' ')[0];
        if (command === 'End') {
            for (let element of timeOfTasks) {
                if (Number(element) > 0) {
                    finalArr.push(element);
                }
            }
            return finalArr.join(' ');
        }
        let index = strOfCommandAndTime.split(' ')[1];
        let time;
        if (strOfCommandAndTime.split(' ').length === 3) {
            time = strOfCommandAndTime.split(' ')[2];
        }
        switch (command) {
            case 'Complete': {
                index = Number(index);
                timeOfTasks.splice(index, 1, '0');

            }; break;
            case 'Change': {
                index = Number(index);
                if (index >= 0 && index <= timeOfTasks.length - 1) {
                    timeOfTasks.splice(index, 1, time);
                }
            }; break;
            case 'Drop': {
                index = Number(index);
                if (index >= 0 && index <= timeOfTasks.length - 1) {
                    timeOfTasks.splice(index, 1, '-1');
                }
            }; break;
            case 'Count': {
                if (index === 'Completed') {
                    console.log(completedTaskFinder(timeOfTasks));
                } else if (index === 'Incomplete') {
                    console.log(incompletedTaskFinder(timeOfTasks));
                } else if (index === 'Dropped') {
                    console.log(droppedTaskFinder(timeOfTasks))
                }
            }; break;
        }
    }

    function completedTaskFinder(array = []) {
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            if (Number(array[i]) === 0) {
                count++;
            }
        }
        return count;

    }

    function incompletedTaskFinder(array = []) {
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            if (Number(array[i]) > 0 && Number(array[i]) <= 5) {
                count++;
            }
        }
        return count;

    }

    function droppedTaskFinder(array = []) {
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            if (Number(array[i]) === -1) {
                count++;
            }
        }
        return count;
    }
}

console.log(taskPlanner([
    '0 0 0 0 0 0',
    'Complete 4',
    'Change 0 4',
    'Drop 3',
    'Count Dropped',
    'End'
]));
console.log(taskPlanner([
    '1 2 3 4 5 4 0 3 2 1',
    'Complete 0',
    'Complete 1',
    'Complete 2',
    'Drop 3',
    'Change 4 1',
    'Count Completed',
    'End'
]));

/* Froggy Squad */

function froggySquad(froggySquadArr = []) {
    let copyOfSquad = froggySquadArr.slice(0);
    let frogNames = copyOfSquad.shift().split(' ');

    for (let currentRow of copyOfSquad) {
        let command = currentRow.split(' ')[0];

        if (command === 'Print') {
            let whatWayOfPrint = currentRow.split(' ')[1];
            if (whatWayOfPrint === 'Normal') {
                console.log(`Frogs: ${frogNames.join(' ')}`);
                break;
            } else if (whatWayOfPrint === 'Reversed') {
                console.log(`Frogs: ${frogNames.reverse().join(' ')}`);
                break;
            }
        }

        switch (command) {
            case 'Join': {
                let newComerFrog = currentRow.split(' ')[1];
                if (!frogNames.includes(newComerFrog)); {
                    frogNames.push(newComerFrog);
                }
            }; break;
            case 'Jump': {
                let nameOfJumpingFrog = currentRow.split(' ')[1];
                let index = Number(currentRow.split(' ')[2]);
                if (index >= 0 && index < frogNames.length) {
                    frogNames.splice(index, 0, nameOfJumpingFrog);
                }
            }; break;
            case 'Dive': {
                let index = Number(currentRow.split(' ')[1]);
                if (index >= 0 && index < frogNames.length) {
                    frogNames.splice(index, 1);
                }
            }; break;
            case 'First': {
                let count = Number(currentRow.split(' ')[1]);
                if (count >= frogNames.length) {
                    console.log(frogNames.join(' '));
                } else {
                    console.log(firstFrogs(frogNames, count));
                }
            }; break;
            case 'Last': {
                let count = Number(currentRow.split(' ')[1]);
                if (count >= frogNames.length) {
                    console.log(frogNames.join(' '));
                } else {
                    console.log(lastFrogs(frogNames, count));
                }
            }; break;
        }
    }

    function firstFrogs(arr = [], n) {
        let newArr = [];
        for (let i = 0; i < n - 1; i++) {
            newArr.push(arr[i]);
        }
        return newArr.join(' ');
    }

    function lastFrogs(arr = [], n) {
        let newArr = [];
        for (let i = arr.length - n; i < arr.length; i++) {
            newArr.push(arr[i]);
        }
        return newArr.join(' ');
    }
}

/* froggySquad([
    'Blake Muggy Kishko',
    'Join Kvachko',
    'Dive 0',
    'First 10',
    'Print Reversed'
]); */

froggySquad([
    'A B C D E F',
    'Join G',
    'Jump Q 3',
    'Last 3',
    'Dive 2',
    'Print Normal'
]);

// 382nd place before finding the errors in the code