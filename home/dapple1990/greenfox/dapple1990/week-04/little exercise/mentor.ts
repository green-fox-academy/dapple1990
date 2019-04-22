'use strict';

import { Person } from "./person";

export class Mentor extends Person {
    level: string;

    constructor(name = 'Jane Doe', age = 30, gender = 'female', level: string = 'intermediate') {
        super(name, age, gender)
        this.level = level;
    }

    getGoal() {
        console.log('Educate brilliant junior software developers.');
    }

    introduce() {
        console.log(`Hi, I'm ${this.name} a ${this.age} year olda ${this.gender} ${this.level} mentor`);
    }
}
