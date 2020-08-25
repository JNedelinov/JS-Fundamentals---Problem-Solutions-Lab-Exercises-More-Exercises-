console.log('Arriving in Kathmandu\n');

function arrInKathmandu(arr = []) {
    arr.pop();

    let regex = /^([A-Za-z!@#$?]+)=(\d+)<<(.+)/;

    for (let line of arr) {
        if (regex.test(line)) {
            let currMatch = regex.exec(line);
            let name = currMatch[1].split(/[!@#$?]+/).filter(a => a != '').join('');
            let length = +currMatch[2];
            let code = currMatch[3];

            if (code.length === length) {
                console.log(`Coordinates found! ${name} -> ${code}`);
            } else {
                console.log('Nothing found!');
            }
        } else {
            console.log('Nothing found!');
        }
    }
}

arrInKathmandu([
    '!@Ma?na?sl!u@=7<<tv58ycb4845',
    'E!ve?rest=.6<<tuvz26',
    '!K@2.,##$=4<<tvnd',
    '!Shiha@pan@gma##9<<tgfgegu67',
    '!###Anna@pur@na##=16<<tv5dekdz8x11ddkc',
    'Last note'
]
);

console.log('\nOn the way to Annapurna\n');

function solve(arr = []) {
    arr.pop();

    let obj = {};

    for (let line of arr) {
        let [command, store, item] = line.split('->');

        switch (command) {
            case 'Add': {
                if (!obj[store]) {
                    obj[store] = [];
                }
                
                let items = item.split(',');
                if (items.length > 1) {
                    for (let item of items) {
                        obj[store].push(item);
                    }
                } else {
                    obj[store].push(item);
                }
            }; break;
            case 'Remove': {
                if (obj[store]) {
                    delete obj[store];
                }
            }; break;
        }
    }

    let sortedStores = Object.keys(obj).sort((s1, s2) => {
        if (obj[s1].length - obj[s2].length === 0) {
            return s2.localeCompare(s1);
        } else {
            return obj[s2].length - obj[s1].length;
        }
    });

    console.log('Stores list:');

    sortedStores.forEach(store => {
        console.log(`${store}`);
        for (let product of obj[store]) {
            console.log(`<<${product}>>`);
        }
    })
}

solve([
    'Add->PeakSports->Map,Navigation,Compass',
    'Add->Paragon->Sunscreen',
    'Add->Groceries->Dried-fruit,Nuts',
    'Add->Groceries->Nuts',
    'Add->Paragon->Tent',
    'Remove->Paragon',
    'Add->Pharmacy->Pain-killers',
    'END'
]
); 