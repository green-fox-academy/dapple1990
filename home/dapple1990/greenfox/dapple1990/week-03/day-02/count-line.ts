// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use strict';

const fs = require('fs');

function myFile(file) {
    try {
        fs.readFileSync('my-file.txt', 'UTF-8');
        {
            return myFile.length;

        }
    } catch (e) {
        return 0;
    }
} console.log(myFile(5));