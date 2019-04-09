'use strict';

let funkyPeople: string[] = []

console.log(funkyPeople.length);

funkyPeople.push('William');

console.log(funkyPeople.length === 0)

/*if(funkyPeople.length === 0) {
    console.log(true);
} else {
    console.log(false);
}*/

funkyPeople.push('John', 'Amanda');

console.log(funkyPeople.length);

console.log(funkyPeople[2]);

funkyPeople.forEach(function (element) {
    console.log(element);
});


function place(people) {
    for(let i : number = 0; i < people.length; i++) {
        console.log(i + 1 + '. ' + people[i]);
    }
}
    

place(funkyPeople);


funkyPeople.splice(1, 1)
console.log(funkyPeople);

let reversed: any = funkyPeople.reverse();
console.log(reversed);

funkyPeople.forEach(function (element) {
    console.log(element);
});

funkyPeople.splice(0, 2);
console.log(funkyPeople);

