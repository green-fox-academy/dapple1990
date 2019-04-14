'use strict';

//Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.



function chnageThoseStrings(x : string) {

    if (x.length <= 0) {
        return x;
    }
    else (x.indexOf('x'))
    
        return x.replace('x', 'Y');
    }
    console.log(chnageThoseStrings('Klenex'));


     /*if (x[0] === 'x') {
        //return (x.length - 1);
    }*/ 
