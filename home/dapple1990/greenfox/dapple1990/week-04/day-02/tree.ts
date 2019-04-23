'use strict';

export class Tree {
    color: string;
    waterAmount: number;

    constructor(color: string, waterAmount: number) {
        this.color = color;
        this.waterAmount = waterAmount;
    }

    shouldIwaterTheTrees(print: boolean ) :boolean {
        if (this.waterAmount <= 10) {
            if (print === true) {
                console.log(`The ${this.color} Tree needs water`);
            }
            return true;
        }
        else {
            if (print === true) {
                console.log(`The ${this.color} Tree doesn't need water`);
            }
            return false;
        }

    }
    wateringTrees(y: number) {
        this.waterAmount += y * 0.40;
        //console.log(`Watering with ${y}`)
    }



}
