'use strict';

import { Person } from "./person";

export class Sponsor extends Person {
    company: string;
    hiredStudents: number;

    constructor(name = 'Jane Doe', age = 30, gender = 'female', company = 'Google', hiredStudents = 0) {
        super()
        this.company = company;
        this.hiredStudents = hiredStudents;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
    }

    hire() {
        this.hiredStudents += 1;
    }

    getGoal() {
        console.log('Hire brilliant junior software developers.');
    }
}
