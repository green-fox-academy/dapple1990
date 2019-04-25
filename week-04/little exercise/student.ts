'use strict';

import { Person } from "./person";

export class Student extends Person {
    previousOrganization: string;
    skippedDays: number;



    constructor(name = 'Jane Doe', age = 30, gender = 'female', previousOrganization = 'School of Life', skippedDays = 0) {
        super(name, age, gender);
        this.previousOrganization = previousOrganization;
        this.skippedDays = skippedDays; 
    }

        getGoal() {
            console.log('Be a junior software developer');
        }

        introduce() {
            console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already`);
        }

        skipDays(numberOfDays : number) {
            this.skippedDays - numberOfDays;
        }

    }

    
