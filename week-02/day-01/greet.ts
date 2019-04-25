'use strict'

let nameToGreet: string = 'Greenfox';

function greet(name: string = ''): string {
    let sayHello: string = 'Greetings' + name;
    return sayHello;
}

let welcome : string = greet(' dear ');
console.log(welcome + nameToGreet);
