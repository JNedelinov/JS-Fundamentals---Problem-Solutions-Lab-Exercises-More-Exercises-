/* Print Character */

console.log('1st Exercise\n');

function printCharactersOneNewLine(str = '') {
    for (let character of str) {
        console.log(character);
    }
}

printCharactersOneNewLine('AWord')

console.log();

/* Remove Occurrences */

console.log('2nd Exercise\n');

function removeOccurrences(word = '', text = '') {
    while (text.indexOf(word) > -1) {
        text = text.replace(word, '');
    }
    console.log(text);
}

removeOccurrences('ice', 'kicegiciceeb');

console.log();

/* Substring */

console.log('3rd Exercise\n');

function substringString(str = '', numberOne, numberTwo) {
    let newString = str.substring(numberOne, numberOne + numberTwo);
    console.log(newString);
}

substringString('ASentance', 1, 8);

console.log();

/*  */

console.log('4th Exercise\n');

function censoredWords(str = '', word = '') {
    let copyOfStr = str;
    let stars;

    if (copyOfStr.includes(word)) {
        stars = '*'.repeat(word.length);
    }

    while (copyOfStr.includes(word)) {
        copyOfStr = copyOfStr.replace(word, stars);
    }

    console.log(copyOfStr);
}

censoredWords("A small sentence with some words", "small");

console.log();

/*  */

console.log('5th Exercise\n');

function countStringOccurrences(str = '', word = '') {
    let arr = str.split(' ');
    let count = 0;

    for (let el of arr) {
        if (el === word) {
            count++;
        }
    }

    console.log(count);
}

countStringOccurrences("This is a word and it also is a sentence", "is");

console.log();

/* EXERCISE: TEXT PROCESSING */

console.log('EXERCISE: TEXT PROCESSING\n');

/* Reveal Words */

console.log('1st Exercise\n');

function revealWords(wordsToBeReplaced = '', text = '') {
    let copyText = text;
    let arrOfWords = wordsToBeReplaced.split(', ');

    for (let word of arrOfWords) {
        let stars = '*'.repeat(word.length)
        if (copyText.includes(stars)) {
            copyText = copyText.replace(stars, word);
        }
    }

    console.log(copyText);
}

revealWords('grea', 'softuni is ***** place for learning new programming languages');

console.log();

/* Modern Times of #(HashTag) */

console.log('2nd Exercise\n');

function modernTimesOfHashtags(str = '') {
    let strArr = str.split(' ');
    let isDiffChar = false;

    for (let word of strArr) {
        if (word.startsWith('#') && word.length > 1) {
            word = word.replace('#', '');
            let wordArr = word.split('');
            for (let char of wordArr) {
                if (!isNaN(char) || char === '#') {
                    isDiffChar = true;
                    break;
                }
            }
            if (isDiffChar === false) {
                console.log(word);
            }
        }
        isDiffChar = false;
    }
}

modernTimesOfHashtags('Nowadays everyone uses ##pam to tag a #special word in #socialMedia');

console.log();

/*  */

console.log('3rd Exercise\n');

/* function extractFile(link = '') {
    let lastElement = link.split('\\').pop().split('.');
    let fileExtension = lastElement.pop();
    let fileName = lastElement.join('.');
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

extractFile('C:\\Internal\\training-internal\\template.bak.pptx');

console.log(); */

function extractFile(link = '') {
    let file = link.substring(link.lastIndexOf('\\') + 1);
    let fileName = file.substring(0, file.lastIndexOf('.'));
    let extension = file.substring(file.lastIndexOf('.') + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\template.bak.pptx');

console.log();

/*  */

console.log('4th Exercise\n');

/* function stringSubstring(searchedWord = '', text = '') {
    let textArr = text.split(' ');
    let isItContained = false;
    for (let word of textArr) {
        if (word.toLowerCase() === searchedWord.toLowerCase()) {
            isItContained = true;
            break;
        }
    }
    if (isItContained) {
        console.log(searchedWord);
    } else {
        console.log(`${searchedWord} not found!`);
    }
} */

function stringSubstring(searchedWord = '', text = '') {
    searchedWord = searchedWord.toLowerCase();
    text = text.toLowerCase();

    let words = text.split(' ');

    if (words.includes(searchedWord)) {
        console.log(searchedWord);
    } else {
        console.log(`${searchedWord} not found!`);
    }
}

stringSubstring('javascript',
    'JavaScript is the best programming language'
);

console.log();

/*  */

console.log('5th Exercise\n');

function replaceRepeatingChars(str = '') {
    let arr = str.split('');
    let currChar = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (currChar === arr[i]) {
            arr.splice(i, 1);
            i--;
        } else {
            currChar = arr[i];
        }
    }

    console.log(arr.join(''));
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');

console.log();

/*  */

console.log('6th Exercise\n');

/* function pascalCaseSplitter(str = '') {
    let arr = str.split('');

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            arr.splice(i, 0, ', ');
            i++;
        }
    }

    console.log(arr.join(''));
} */

function pascalCaseSplitter(str = '') {
    let arr = [];
    let capitalIndex = -1;

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (letter.toLowerCase() !== letter && i !== 0) {
            let word = str.substring(capitalIndex, i);
            capitalIndex = i;
            arr.push(word);
        }
    }

    arr.push(str.substring(capitalIndex));

    console.log(arr.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');

console.log();

/*  */

console.log('7th Exercise\n');

/* function cutAndReverse(str = '') {
    let arr = str.split('');

    for (let i = 0; i < str.length; i++) {
        if (i === str.length / 2) {
            arr.splice(i, 0, ' ');
            break;
        }
    }

    newStr = arr.join('');
    newArr = newStr.split(' ');

    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = newArr[i].split('').reverse().join('');
    }

    for (let word of newArr) {
        console.log(word);
    }

} */

function cutAndReverse(str = '') {
    let firstHalf = str.substring(0, str.length / 2).split('').reverse().join('');
    let secondHalf = str.substring(str.length / 2).split('').reverse().join('');
    console.log(firstHalf);
    console.log(secondHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');

console.log();

/*  */

console.log('8th Exercise\n');

/* function hardWords(arr = []) {
    let copyOfArr = arr.slice(0);
    let str = copyOfArr.shift();

    for (let word of copyOfArr[0]) {
        let currHole = ` ${'_'.repeat(` ${word.length} `)} `;
        let index = str.indexOf(currHole);

        if (str.includes(currHole) && index > -1) {
            str = str.replace(currHole, ` ${word} `);
        } else if (index === -1) {
            currHole = currHole.trim();
            if (str.includes(currHole)) {
                str = str.replace(currHole, `${word}`);
            }
        }
    }

    console.log(str);
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'sprained', 'pharmacist']]
); */


function hardWords(arr = []) {
    let copyOfArr = arr.slice(0);
    let str = copyOfArr.shift();
    let sortedWords = copyOfArr[0].sort((word1, word2) => word2.length - word1.length);

    for (let word of sortedWords) {
        let currHole = '_'.repeat(word.length);
        let index = str.indexOf(currHole);

        if (str.includes(currHole) && index > -1) {
            str = str.replace(currHole, word);
        }
    }

    console.log(str);
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'sprained', 'pharmacist']]
);

console.log();

/*  */

console.log('9th Exercise\n');

/* VOWELS - A, E, I, O, U, and sometimes Y */

/* OlRvApNzzGEhOtRvAgNtGblEs */

function passwordGenerator(arr = []) {
    let firstWord = arr[0];
    let secondWord = arr[1];
    let thirdWord = arr[2];
    thirdWord = thirdWord.toUpperCase();

    let concatenatedStr = '';
    concatenatedStr += firstWord + secondWord;

    let thirdWordIndex = 0;

    let vowelList = 'aeiouAEIOU'.split('');

    for (let char of concatenatedStr) {
        /* OlRvApNzzGEhOtRvAgNtGblEs */
        if (vowelList.includes(char)) {
            if (thirdWordIndex === thirdWord.length) {
                thirdWordIndex = 0;
            }
            concatenatedStr = concatenatedStr.replace(char, thirdWord[thirdWordIndex]);
            thirdWordIndex++;
        }
    }

    console.log(`Your generated password is ${concatenatedStr.split('').reverse().join('')}`);
}

passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);

console.log();

/*  */

console.log('10th Exercise\n');

function lettersChangeNumbers(str = '') {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let strArr = str.split(' ').filter(el => el !== "");

    let sumArr = [];

    for (let gameWord of strArr) {
        let firstLetter = gameWord[0];
        let secondLetter = gameWord[gameWord.length - 1];
        let wordNumber = Number(gameWord.substring(1, gameWord.length - 1));
        
        let sum = 0;

        let positionFLetter = alphabet.indexOf(firstLetter.toLowerCase()) + 1;
        let positionSLetter = alphabet.indexOf(secondLetter.toLowerCase()) + 1;

        if (alphabet.includes(firstLetter.toLowerCase()) && firstLetter === firstLetter.toUpperCase()) {
            sum += wordNumber / positionFLetter;
        } else if (alphabet.includes(firstLetter) && firstLetter === firstLetter.toLowerCase()) {
            sum += wordNumber * positionFLetter;
        }

        if (alphabet.includes(secondLetter.toLowerCase()) && secondLetter === secondLetter.toUpperCase()) {
            sum -= positionSLetter;
        } else if (alphabet.includes(secondLetter) && secondLetter === secondLetter.toLowerCase()) {
            sum += positionSLetter;
        }

        sumArr.push(sum);
    }

    let finalSum = sumArr.reduce((acc, curr) => {
        return acc + curr;
    }, 0);



    console.log(finalSum.toFixed(2));
}

lettersChangeNumbers('A12b s17G');
lettersChangeNumbers('P34562Z q2576f   H456z');
lettersChangeNumbers('a1A');

console.log();