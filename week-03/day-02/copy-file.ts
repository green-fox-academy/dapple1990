// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

'use strict';

const fs = require('fs');

function copy(filename: string, newFile: string) {
    try {
        let readIt = fs.readFileSync(filename, 'UTF-8');
        fs.writeFileSync(newFile, readIt)
        return true;
    }
    catch (e) {
        return false;
    }
}

copy('file.txt', 'file2.txt');