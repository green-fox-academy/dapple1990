let codeHours: number = 6;
let weeks: number = 17;
let weeklyHours: number = 52;
let workDays: number = 5;
let codingDays = weeks * workDays;
let codingHours: number = codeHours * codingDays;
let workHours: number = weeks * weeklyHours;

console.log((codingHours / workHours) * 100 );
