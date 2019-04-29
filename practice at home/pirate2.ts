'use strict';

export class Pirate {
    name: string;
    gold: number;
    healthPoints: number;
    isCaptain: boolean;
    woodenLeg: boolean;

    constructor(name: string, gold: number = 10, healthPoints: number = 10, isCaptain: boolean = true, woodenLeg: boolean) {
        this.name = name;
        this.gold = gold;
        this.healthPoints = healthPoints;
        this.isCaptain = isCaptain;
        this.woodenLeg = woodenLeg;
    }

    work() {
        if (this.isCaptain === true) {
            this.gold += 10;
            this.healthPoints -= 5;
        }
        else {
            this.gold += 1;
            this.healthPoints -= 1;

        }
    }
    party() {
        if(this.isCaptain === true) {
            this.healthPoints += 10;
        }
        else {
            this.healthPoints += 1;
        }
    }
    toString() {
        if(this.woodenLeg === true) {
            return `Hello, I'm ${this.name}. I have a wooden leg and ${this.gold} golds.`
        }
        else {
            return `Hello, I'm ${this.name}. I still have my real legs and ${this.gold} golds.`
        }
    }
    

}
let newMemeber = new Pirate('janika', 30, 20, true, false);
console.log(newMemeber.toString());
console.log(newMemeber);