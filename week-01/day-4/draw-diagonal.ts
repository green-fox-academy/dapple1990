'use strict';

let lineCount: number = 6;

for (let row: number = 1; row <= lineCount; row++) {
    let sign: string = '';
    if (row === 1 || row === lineCount) {
        for (let i: number = 0; i <= lineCount; i++) {
            sign += '%';
        }
    }
    else {
        for (let column: number = 0; column <= lineCount; column++) {
            if (column === 0 || column === lineCount) {
                sign += '%';
            }
            else if(column === row) {
                sign += '%';
            }
            else {
                sign += ' '
            }

        }
    }
    console.log(sign);
}