'use strict';

let currentHours: number = 14;
let currentHoursInSeconds: number = 14 * 60 * 60;
let currentMinutes: number = 34;
let currentMinutesInSeconds: number = 34 *60;
let currentSeconds: number = 42;
let currentTime: number = currentHoursInSeconds + currentMinutesInSeconds + currentSeconds;
let totalSecondsInADay: number = 24 *60 * 60;

console.log(totalSecondsInADay - currentTime);
