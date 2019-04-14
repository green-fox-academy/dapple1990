'use strict';

// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function killThoseStrings(x : string) {

    if (x.length === 0) {
        return x;
    }
    else (x.indexOf('x'))
    
        return x.replace('x', '');
    }
    console.log(killThoseStrings('Klenex'));