'use strict';

export class Flower {
    color: string;
    waterAmount: number;

    constructor(color: string = 'yellow', waterAmount: number = 2) {
        this.color = color;
        this.waterAmount = waterAmount;
    }

    shouldIwaterTheFlowers(print: boolean) : boolean {
        if (this.waterAmount <= 5) {
            if (print === true) {
                console.log(`The ${this.color} Flower needs water`);
            }
            return true;
        }
        else {
            if (print === true) {
                console.log(`The ${this.color} Flower doesnt need water`);
            }
            return false;
        }

    }
    wateringFlowers(x: number) {
        this.waterAmount += x * 0.75;
        //console.log(`Watering with ${x}`)
    }

}