'use strict';

let lineCount: number = 4;

for(let i: number = 0; i <= 4;  i++) {
    let sign = "";
    
    for(let j: number = 0; j < i; j++) {
        sign += '*';
    }
    
    console.log(sign);
}