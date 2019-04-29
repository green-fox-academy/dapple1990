'use strict';

import * as fs from 'fs';

let swearwords: string[] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt'];

function reParse(myFile: string): number {
    let readIt: string[] = fs.readFileSync(myFile, 'UTF-8').toString().split(' ');
    let result: string = ' ';
    let numberOf: number = 0;
    readIt.forEach(currentWord => {
        if (swearwords.indexOf(currentWord.toLowerCase().replace('.', '').replace(',', '')) >= 0) {
            numberOf++;
        } else {
            result += currentWord + ' ';
        }
    })
    fs.writeFileSync('text-file.txt', result)
    console.log(result);
    console.log(numberOf);


    return numberOf;
}
reParse('example-file.txt');