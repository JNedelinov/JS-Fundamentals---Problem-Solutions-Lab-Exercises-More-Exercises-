console.log('Username\n');

function username(arr = []) {
    arr.pop();

    let str = arr.shift();

    for (let line of arr) {
        let currArr = line.split(' ');

        let command = currArr[0];

        switch (command) {
            case 'Case': {
                let lowUp = currArr[1];

                if (lowUp === 'lower') {
                    str = str.toLowerCase();
                } else if (lowUp === 'upper') {
                    str = str.toUpperCase();
                }

                console.log(str);
            }; break;
            case 'Reverse': {
                let startiIndex = +currArr[1];
                let endIndex = +currArr[2];

                if (startiIndex >= 0 && endIndex <= str.length - 1) {
                    let subString = str.substring(startiIndex, endIndex + 1);
                    console.log(subString.split('').reverse().join(''));
                }

            }; break;
            case 'Cut': {
                let subString = currArr[1];

                if (str.includes(subString)) {
                    str = str.replace(subString, '');
                    console.log(str);
                } else {
                    console.log(`The word ${str} doesn't contain ${subString}.`);
                }
            }; break;
            case 'Replace': {
                let char = currArr[1];

                let regex = RegExp(char, 'g');

                str = str.replace(regex, '*');

                console.log(str);
            }; break;
            case 'Check': {
                let char = currArr[1];

                if (str.includes(char)) {
                    console.log('Valid');
                } else {
                    console.log(`Your username must contain ${char}.`);
                }
            }; break;
        }
    }
}

username(['Pesho', 'Case lower', 'Cut ES', 'Check @', 'Sign up']);

console.log('\nPassword\n');

function password(arr = []) {
    arr.shift();

    let regex = /(.+)\>(\d{3})\|([a-z]{3})\|([A-Z]{3})\|(.{3})\<\1/;

    for (let line of arr) {
        if (regex.test(line)) {
            let currMatch = regex.exec(line);

            console.log(`Password: ${currMatch[2]}${currMatch[3]}${currMatch[4]}${currMatch[5]}`);
        } else {
            console.log('Try another password!');
        }
    }
}

password(
    [
        '5',
        'aa>111|mqu|BAU|mqu<aa',
        '()>111!aaa!AAA!^&*<()',
        'o>088|abc|AAA|***<o',
        'asd>asd|asd|ASD|asd<asd',
        '*>088|zzzz|ZzZ|123<*'
    ]);

console.log('\nFollowers\n');

function followers(arr = []) {
    arr.pop();

    let followersObj = {};

    for (let line of arr) {
        let [command, username, count] = line.split(': ');

        count = Number(count);

        switch (command) {
            case 'New follower': {
                if (!followersObj[username]) {
                    followersObj[username] = {
                        'likes': 0,
                        'comments': 0,
                    }
                }
            }; break;
            case 'Like': {
                if (!followersObj[username]) {
                    followersObj[username] = {
                        'likes': count,
                        'comments': 0,
                    }
                } else {
                    followersObj[username]['likes'] += count; 
                }
            }; break;
            case 'Comment': {
                if (!followersObj[username]) {
                    followersObj[username] = {
                        'likes': 0,
                        'comments': 1,
                    }
                } else {
                    followersObj[username]['comments'] += 1;
                }
            }; break;
            case 'Blocked': {
                if (followersObj[username]) {
                    delete followersObj[username];
                } else {
                    console.log(`${username} doesn't exist.`);
                }
            }; break;
        }
    }

    let countOfFollowers = 0;

    Object.keys(followersObj).forEach(follower => countOfFollowers++);

    console.log(`${countOfFollowers} followers`);

    let sortedFollowers = Object.keys(followersObj).sort((f1, f2) => {
        if (followersObj[f1]['likes'] - followersObj[f2]['likes'] === 0) {
            return f1.localeCompare(f2);
        } else {
            return followersObj[f2]['likes'] - followersObj[f1]['likes']
        }
    });

    sortedFollowers.forEach(follower => {
        console.log(`${follower}: ${followersObj[follower]['likes'] + followersObj[follower]['comments']}`);
    });
}

followers([
    'New follower: gosho',
    'Like: gosho: 5',
    'Comment: gosho',
    'New follower: gosho',
    'New follower: tosho',
    'Comment: gosho',
    'Comment: tosho',
    'Comment: pesho',
    'Log out'
]
);

// 300/300

// 40-50 minutes

// place: 450th