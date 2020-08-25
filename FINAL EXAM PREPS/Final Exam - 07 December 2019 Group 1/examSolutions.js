/* Email Validator */

console.log('Email Validator\n');

// substring(str.length - count, str.length);

function emailValidator(arr = []) {
    let copyArr = arr.slice(0, arr.indexOf('Complete'));

    let str = copyArr.shift();

    for (let line of copyArr) {
        let currArr = line.split(' ');

        switch (currArr[0]) {
            case 'Make': {
                let lowUp = currArr[1];

                if (lowUp === 'Upper') {
                    str = str.toUpperCase();
                } else if (lowUp === 'Lower') {
                    str = str.toLowerCase();
                }

                console.log(str);
            }; break;
            case 'GetDomain': {
                let count = +currArr[1];
                let subString = str.substring(str.length - count, str.length);
                console.log(subString);
            }; break;
            case 'GetUsername': {
                if (str.includes('@')) {
                    let subString = str.substring(0, str.indexOf('@'));
                    console.log(subString);
                } else {
                    console.log(`The email ${str} doesn't contain the @ symbol.`);
                }
            }; break;
            case 'Replace': {
                let char = currArr[1];
                let regex = RegExp(char, 'g');
                str = str.replace(regex, '-');
                console.log(str);
            }; break;
            case 'Encrypt': {
                let encryption = str.split('').map(a => a = a.charCodeAt(0)).join(' ');
                console.log(encryption);
            }
        }
    }
}

emailValidator([
    'Mike123@somemail.com',
    'Make Upper',
    'GetDomain 3',
    'GetUsername',
    'Encrypt',
    'Complete'
]
);

console.log('\n');

/* Registration */

console.log('Registration\n');

function registration(arr = []) {
    let copyArr = arr.slice(1);
    let regex = /U\$([A-Z][a-z]{2,})U\$P@\$([A-Za-z]{5,}\d+)P@\$/;

    let successfulRegistrations = 0;

    for (let line of copyArr) {
        if (regex.test(line)) {
            console.log("Registration was successful");
            successfulRegistrations++;
            let username = regex.exec(line)[1];
            let password = regex.exec(line)[2];
            console.log(`Username: ${username}, Password: ${password}`);
        } else {
            console.log("Invalid username or password");
        }
    }
    console.log(`Successful registrations: ${successfulRegistrations}`);
}

registration([
    '3',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$NameU$P@$PasswordP@$',
    'U$UserU$P@$ad2P@$'
]
);

console.log('\n');

/* Inbox Manager */

console.log('Inbox Manager\n');

function inboxManager(arr = []) {
    let copyArr = arr.slice(0);

    let users = {};

    for (let line of copyArr) {
        if (line === 'Statistics') {
            let count = 0;
            Object.keys(users).forEach(user => count++);
            console.log(`Users count: ${count}`);

            let orderedUsers = Object.keys(users).sort((u1, u2) => {
                if (users[u1].length - users[u2].length === 0) {
                    return u1.localeCompare(u2);
                } else {
                    return users[u2].length - users[u1].length;
                }
            });

            orderedUsers.forEach(user => {
                console.log(user);
                for (let email of users[user]) {
                    console.log(` - ${email}`);
                }
            });
            break;
        }

        let currArr = line.split('->');
        let command = currArr[0];

        switch (command) {
            case 'Add': {
                let username = currArr[1];
                if (!users.hasOwnProperty(username)) {
                    users[username] = [];
                } else {
                    console.log(`${username} is already registered`);
                }
            }; break;
            case 'Send': {
                let username = currArr[1];
                let email = currArr[2];
                users[username].push(email);
            }; break;
            case 'Delete': {
                let username = currArr[1];
                if (users.hasOwnProperty(username)) {
                    delete users[username];
                } else {
                    console.log(`${username} not found!`);
                }
            }; break;
        }
    }
}

inboxManager([
    'Add->Mike',
/*    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Mike->Another random test mail', */
    'Statistics'
]
);

console.log('\n');

// 203th place

// 1h & 14m