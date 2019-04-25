'use strict';

let abc: string[] = ["Arthur", "Boe", "Chloe"];

abc.splice(0, 2);
abc.splice(2, 0, "Arthur");
abc.splice(1, 0, "Boe");

console.log(abc);