// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

'use strict';

const fs = require('fs');

function readMyFile(path) {
    try {
        let read : string[] = fs.readFileSync(path, 'UTF-8').toString().split('\n');
        read.forEach(element => {
            console.log(element);
        })
    } catch (e) {
        console.log('Unable to read file : ' + path);
    }
}
 


readMyFile('my.file.txt');