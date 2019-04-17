// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"
'use strict';
var fs = require('fs');
var fileContent = '';
function manipulate(singleLine) {
    try {
        fs.writeFileSync('my-file.txt', fileContent);
    }
    catch (_a) {
        console.log('Unable to write file: my-file.txt');
    }
}
console.log(manipulate('Dalma'));
