console.log('String Manipulator\n');

function stringManipulator(arr = []) {
    let copyArr = arr.slice(0, arr.indexOf('End'));

    let str = copyArr.shift();

    for (let line of copyArr) {
        let currArr = line.split(' ');

        let command = currArr[0];

        switch (command) {
            case 'Translate': {
                let char = currArr[1];
                let replacement = currArr[2];

                let regex = RegExp(char, 'g');

                str = str.replace(regex, replacement);

                console.log(str);
            }; break;
            case 'Includes': {
                let string = currArr[1];

                if (str.includes(string)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
            }; break;
            case 'Start': {
                let string = currArr[1];

                if (str.startsWith(string)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
            }; break;
            case 'Lowercase': {
                str = str.toLowerCase();

                console.log(str);
            }; break;
            case 'FindIndex': {
                let char = currArr[1];

                let index = str.lastIndexOf(char);

                console.log(index);
            }; break;
            case 'Remove': {
                let startIndex = +currArr[1];
                let count = +currArr[2];

                let substr = str.substr(startIndex, count);
                str = str.replace(substr, '');

                console.log(str);
            }; break;
        }
    }
}

stringManipulator([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End'
]
);

console.log('\nMessage Decrypter\n');

function messageDecrypter(arr = []) {
    let copyArr = arr.slice(1);

    let regex = /^(\$|%)([A-Z][a-z]{2,})\1: \[(\d+)\]\|\[(\d+)\]\|\[(\d+)\]\|$/;

    for (let line of copyArr) {
        if (regex.test(line)) {
            let command = regex.exec(line)[2];
            let fNum = String.fromCharCode(+regex.exec(line)[3]);
            let sNum = String.fromCharCode(+regex.exec(line)[4]);
            let tNum = String.fromCharCode(+regex.exec(line)[5]);

            console.log(`${command}: ${fNum}${sNum}${tNum}`);
        } else {
            console.log("Valid message not found!");
        }
    }
}

messageDecrypter([
    '4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|'
]
);

console.log('\nMessages Manager\n');

function messagesManager(arr = []) {
    let copyArr = arr.slice(0, arr.indexOf('Statistics'));

    let capacity = +copyArr.shift();

    let messageManager = {};

    for (let line of copyArr) {
        let currArr = line.split('=');

        let command = currArr[0];

        switch (command) {
            case 'Add': {
                let username = currArr[1];
                let sent = +currArr[2];
                let recieved = +currArr[3];

                if (!messageManager[username]) {
                    messageManager[username] = {
                        'sent': sent,
                        'recieved': recieved,
                    };
                }
            }; break;
            case 'Message': {
                let sender = currArr[1];
                let reciever = currArr[2];

                if (messageManager[sender] && messageManager[reciever]) {
                    messageManager[sender]['sent'] += 1;
                    messageManager[reciever]['recieved'] += 1;

                    let senderSum = messageManager[sender]['sent'] +  messageManager[sender]['recieved'];

                    if (senderSum >= capacity) {
                        console.log(`${sender} reached the capacity!`);
                        delete messageManager[sender];
                    }

                    let recieverSum = messageManager[reciever]['sent'] +  messageManager[reciever]['recieved'];

                    if (recieverSum >= capacity) {
                        console.log(`${reciever} reached the capacity!`);
                        delete messageManager[reciever];
                    }
                }
            }; break;
            case 'Empty': {
                let username = currArr[1];

                if (username === 'All') {
                    Object.keys(messageManager).forEach(user => delete messageManager[user]);
                } else {
                    delete messageManager[username];
                }
            }; break;
        }
    }

    let pplCount = 0;

    Object.keys(messageManager).forEach(user => pplCount++);

    console.log(`Users count: ${pplCount}`);

    let sortedUsers = Object.keys(messageManager).sort((u1, u2) => {
        let fSum = messageManager[u1]['recieved'];
        let sSum = messageManager[u2]['recieved'];

        if (fSum - sSum === 0) {
            return u1.localeCompare(u2);
        } else {
            return sSum - fSum;
        }
    });

    sortedUsers.forEach(user => {
        let sum = messageManager[user]['recieved'] + messageManager[user]['sent'];

        console.log(`${user} - ${sum}`);
    });
}

messagesManager([
    '10',
    'Add=Mark=5=4',
    'Add=Clark=3=5',
    'Add=Berg=9=0',
    'Add=Kevin=0=0',
    'Message=Berg=Kevin',
    'Statistics'
]
);

console.log();

messagesManager([
    '20',
    'Add=Mark=3=9',
    'Add=Berry=5=5',
    'Add=Clark=4=0',
    'Empty=Berry',
    'Add=Blake=9=3',
    'Add=Michael=3=9',
    'Add=Amy=9=9',
    'Message=Blake=Amy',
    'Message=Michael=Amy',
    'Statistics'
  ]
);

console.log();

messagesManager([
    '12',
    'Add=Bonnie=3=5',
    'Add=Johny=4=4',
    'Empty=All',
    'Add=Bonnie=3=3',
    'Statistics'
  ]  
);

// less than 50 minutes (started after 8pm and finished at 8:53pm)

// 300/300

// 351st place